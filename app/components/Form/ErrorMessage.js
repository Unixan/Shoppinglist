import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../AppText";
import defaultStyles from "../../config/defaultStyles";

function ErrorMessage({ error, visible }) {
  if (!visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: defaultStyles.colors.danger,
  },
});

export default ErrorMessage;
