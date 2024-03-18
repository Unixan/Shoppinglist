import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen({ children }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
