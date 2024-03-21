import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";
import Checkbox from "expo-checkbox";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

import defaultStyles from "../config/defaultStyles";
import AppText from "./AppText";

function ListItem({
  checkValue,
  handleChangeCheck,
  handleChangeText,
  itemName,
  number,
}) {
  const [tempValue, setTempValue] = useState(number);

  const isEmptyOrWhitespace = (input) => {
    return !input || /^\s*$/.test(input);
  };

  const handleBlur = () => {
    if (parseFloat(tempValue) <= 0 || isEmptyOrWhitespace(tempValue)) {
      Alert.alert("Remove Item", "Do you want to remove this item?", [
        {
          text: "Cancel",
          onPress: () => setTempValue(number),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            handleChangeText(tempValue);
            setTempValue(number);
          },
        },
      ]);
    } else {
      handleChangeText(tempValue);
    }
  };

  return (
    <>
      {itemName && (
        <View style={styles.container}>
          <View style={styles.element}>
            <TextInput
              value={tempValue}
              maxLength={3}
              onBlur={handleBlur}
              onChangeText={(value) => setTempValue(value)}
              keyboardType="numeric"
              style={styles.value}
            />
            <Divider orientation="vertical" width={1} style={styles.divider} />
            <AppText style={styles.name}>{itemName}</AppText>
          </View>
          <Checkbox
            style={styles.chekbox}
            value={checkValue}
            onValueChange={handleChangeCheck}
            color={checkValue ? "#6fc276" : defaultStyles.colors.medium}
          />
        </View>
      )}
      {!itemName && (
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="cart-plus" size={30} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    margin: 3,
    borderRadius: 10,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "97%",
    backgroundColor: defaultStyles.colors.light,
  },
  chekbox: {
    margin: 8,
    marginRight: 15,
  },
  element: {
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: defaultStyles.colors.light,
    alignItems: "center",
    borderRadius: 10,
    height: 60,
    justifyContent: "center",
    margin: 8,
    width: 60,
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
    backgroundColor: defaultStyles.colors.light,
  },
});

export default ListItem;
