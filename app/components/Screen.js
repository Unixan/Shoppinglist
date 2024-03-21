import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

function Screen({ children }) {
  return (
    <PaperProvider>
      <SafeAreaView>{children}</SafeAreaView>
    </PaperProvider>
  );
}

export default Screen;
