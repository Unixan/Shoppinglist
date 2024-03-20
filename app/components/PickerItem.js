import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "./AppText";
import defaultStyles from "../config/defaultStyles";

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
