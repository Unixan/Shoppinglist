import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import defaultStyles from "../config/defaultStyles";
import AppText from "./AppText";

function PickerItem({ item, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <AppText style={styles.text}>{item.name}</AppText>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    backgroundColor: defaultStyles.colors.light,
    textAlign: "center",
  },
});

export default PickerItem;
