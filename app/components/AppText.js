import React from "react";
import { View, StyleSheet, Text } from "react-native";
import defaultStyles from "../config/defaultStyles";

function AppText({ children, style }) {
  return (
    <View style={styles.container}>
      <Text style={[defaultStyles.text, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppText;
