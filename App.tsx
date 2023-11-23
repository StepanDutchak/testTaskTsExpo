import "react-native-gesture-handler";

import { LogBox, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
  );
}
