import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import defaultStyles from "../config/defaultStyles";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        dense={true}
        outlineStyle={{ borderRadius: 40 }}
        mode="outlined"
        style={[defaultStyles.text]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

export default AppTextInput;
