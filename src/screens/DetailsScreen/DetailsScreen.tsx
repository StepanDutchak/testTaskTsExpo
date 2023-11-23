import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "../../types/navigation";
import Header from "../../components/base/Header/Header";
import AnimatedPress from "../../components/base/AnimatedPress/AnimatedPress";
import InfoModal from "../../components/modals/InfoModal/InfoModal";

import { styles } from "./styles";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "DETAILS_SCREEN">;

type InfoModalType = {
  route: DetailsScreenRouteProp | any;
};

const text = {
  header: "Details",
  helpTextTop: "Measurement Information",
  helpTextBottom: "Understanding Your Measurements?",
};

const disabledField = "Id";

const DetailsScreen = ({ route }: InfoModalType) => {
  const [isInfoModal, setInfoModal] = useState(false);
  const { detailsData } = route.params;

  const renderInfoRows = () => {
    return Object.entries(detailsData).map(([key, value]: any, index) => {
      const formattedKey = key
        .split("_")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return (
        <>
          {formattedKey !== disabledField && (
            <View
              style={[
                styles.rowContainer,
                formattedKey === "Wellness Score" && styles.lastElement,
              ]}
              key={key}
            >
              <View style={styles.row}>
                <Text style={styles.keyText}>{formattedKey}</Text>
                <Text style={styles.valueText}>{value}</Text>
              </View>
              {index < Object.keys(detailsData).length - 1 && (
                <View style={styles.separator} />
              )}
            </View>
          )}
        </>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header isGoBack title={text.header} /> */}
      <View style={styles.content}>
        <View style={styles.cardContent}>{renderInfoRows()}</View>
        <View style={styles.helpContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.topText}>{text.helpTextTop}</Text>
          </View>
          <AnimatedPress
            onPress={() => setInfoModal(true)}
            style={styles.bottomContainer}
          >
            <Text>{text.helpTextBottom}</Text>
            <Text>{">"}</Text>
          </AnimatedPress>
        </View>
      </View>
      <InfoModal onClose={setInfoModal} visible={isInfoModal} />
    </SafeAreaView>
  );
};

export default DetailsScreen;
