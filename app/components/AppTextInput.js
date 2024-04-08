import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { TextInput as AltText } from "react-native";

import defaultStyles from "../config/defaultStyles";

function AppTextInput({ icon, width = "100%", onPressIcon, ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        left={
          icon && onPressIcon ? (
            <TextInput.Icon onPress={onPressIcon} icon={icon} />
          ) : icon ? (
            <TextInput.Icon disabled icon={icon} />
          ) : null
        }
        dense={true}
        outlineStyle={{ borderRadius: 40 }}
        mode="outlined"
        style={[defaultStyles.text, { width: "100%" }]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default AppTextInput;
