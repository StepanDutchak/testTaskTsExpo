import React from "react";
import { View, Text, StyleSheet, Platform, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import AnimatedPress from "../AnimatedPress/AnimatedPress";
import { ApplicationStackParamList } from "../../../types/navigation";

import { useNavigation } from "@react-navigation/native";

interface HeaderType {
  title: string;
  isGoBack?: boolean;
}

type ScreenRouteProp = ApplicationStackParamList["hookRoute"];

const Header = ({ title, isGoBack }: HeaderType) => {
  const navigation = useNavigation<ScreenRouteProp>();

  return (
    <SafeAreaView
      style={[styles.header, { paddingTop: Platform.OS === "ios" ? 20 : 0 }]}
    >
      <StatusBar style="auto" />

      {isGoBack && (
        <AnimatedPress
          onPress={() => navigation.goBack()}
          containerStyle={styles.backIcon}
        >
          <Text style={styles.backText}>Close</Text>
        </AnimatedPress>
      )}
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  );
};

export default Header;
