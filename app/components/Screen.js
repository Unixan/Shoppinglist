import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen({ children }) {
  return (
    <SafeAreaView>
      <View style={styles.contianer}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contianer: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
