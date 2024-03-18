import { Divider } from "@rneui/themed";
import Checkbox from "expo-checkbox";
import { StyleSheet, TextInput, View } from "react-native";

import defaultStyles from "../config/defaultStyles";
import AppText from "./AppText";

function ListItem({ checkValue, handleChangeCheck, handleChangeText, number }) {
  return (
    <View style={styles.contianer}>
      <View style={styles.element}>
        <TextInput
          value={number}
          maxLength={3}
          onChangeText={(value) => handleChangeText(value)}
          keyboardType="numeric"
          style={styles.value}
        />
        <Divider orientation="vertical" width={1} style={styles.divider} />
        <AppText style={styles.name}>Knekkebrød</AppText>
      </View>
      <Checkbox
        style={styles.chekbox}
        value={checkValue}
        onValueChange={() => handleChangeCheck(!checkValue)}
        color={checkValue ? "#6fc276" : defaultStyles.colors.medium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: defaultStyles.colors.light,
  },
  chekbox: {
    margin: 8,
    marginRight: 15,
  },
  element: {
    flexDirection: "row",
  },
  name: {
    paddingLeft: 8,
  },
  value: {
    fontSize: defaultStyles.text.fontSize,
    marginRight: 5,
    borderRadius: 5,
    height: 25,
    textAlign: "right",
    paddingHorizontal: 5,
    width: 40,
    backgroundColor: defaultStyles.colors.white,
  },
});

export default ListItem;
