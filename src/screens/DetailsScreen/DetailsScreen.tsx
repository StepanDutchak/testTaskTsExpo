import React, { useRef, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { RouteProp } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";

import { RootStackParamList } from "../../types/navigation";
import AnimatedPress from "../../components/base/AnimatedPress/AnimatedPress";

import { styles } from "./styles";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "DETAILS_SCREEN">;

type InfoModalType = {
  route: DetailsScreenRouteProp | any;
};

const text = {
  header: "Details",
  helpTextTop: "Measurement Information",
  helpTextBottom: "Understanding Your Measurements?",
  modalText: "Modal info",
};

const disabledField = "Id";

const DetailsScreen = ({ route }: InfoModalType) => {
  const [isSheetExpanded, setIsSheetExpanded] = useState(false);

  const { detailsData } = route.params;

  const bottomSheetRef = useRef<BottomSheet>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
    setIsSheetExpanded(true);
  };

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
              key={formattedKey}
              style={[
                styles.rowContainer,
                formattedKey === "Wellness Score" && styles.lastElement,
              ]}
            >
              <View key={value} style={styles.row}>
                <Text style={styles.keyText}>{formattedKey}</Text>
                <Text style={styles.valueText}>{value}</Text>
              </View>
              {index < Object.keys(detailsData).length - 1 && (
                <View key={detailsData} style={styles.separator} />
              )}
            </View>
          )}
        </>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.cardContent}>{renderInfoRows()}</View>
        <View style={styles.helpContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.topText}>{text.helpTextTop}</Text>
          </View>
          <AnimatedPress
            onPress={openBottomSheet}
            style={styles.bottomContainer}
          >
            <Text>{text.helpTextBottom}</Text>
            <Text>{">"}</Text>
          </AnimatedPress>
        </View>
      </View>
      {isSheetExpanded && (
        <BottomSheet
          style={styles.bottomSheetContent}
          ref={bottomSheetRef}
          index={0}
          enablePanDownToClose
          snapPoints={[200, 400, 600]}
        >
          <View>
            <Text>{text.modalText}</Text>
          </View>
        </BottomSheet>
      )}
    </SafeAreaView>
  );
};

export default DetailsScreen;
