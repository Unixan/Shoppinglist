import { StyleSheet } from "react-native";
import defaultStyles from "../../config/defaultStyles";
import AppText from "../AppText";

function ErrorMessage({ error, visible }) {
  if (!visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    alignSelf: "center",
    color: defaultStyles.colors.danger,
  },
});

export default ErrorMessage;
