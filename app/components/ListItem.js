import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";
import Checkbox from "expo-checkbox";
import { useRef, useState } from "react";
import { Alert, StyleSheet, TextInput, View, Text } from "react-native";
import { Surface } from "react-native-paper";

import defaultStyles from "../config/defaultStyles";
import AppText from "./AppText";
import { Swipeable } from "react-native-gesture-handler";

function ListItem({
  checkValue,
  handleChangeCheck,
  handleChangeText,
  itemName,
  number,
}) {
  const [tempValue, setTempValue] = useState(number);
  const swipeableRef = useRef(null);

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

  const leftAction = () => {
    return (
      <View style={styles.swipeArea}>
        <MaterialCommunityIcons
          name="cart-check"
          size={30}
          style={{ paddingLeft: 10 }}
        />
      </View>
    );
  };

  const rightAction = () => {
    return (
      <View style={styles.swipeArea}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          style={{ paddingRight: 10 }}
        />
      </View>
    );
  };

  const onSwipeableOpen = (direction) => {
    if (direction === "left") {
      swipeableRef.current.close();
      handleChangeCheck();
    } else {
      swipeableRef.current.close();
      Alert.alert(
        "Delete Item",
        "Are you sure you want to delete this item?",
        [
          {
            text: "No",
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              handleChangeText(0);
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <>
      {itemName && (
        <Swipeable
          friction={1}
          renderLeftActions={leftAction}
          renderRightActions={rightAction}
          onSwipeableOpen={(event) => onSwipeableOpen(event)}
          rightThreshold={55}
          ref={swipeableRef}
        >
          <Surface style={styles.container} elevation={2}>
            <View style={styles.element}>
              <TextInput
                value={tempValue}
                maxLength={3}
                onBlur={handleBlur}
                onChangeText={(value) => setTempValue(value)}
                keyboardType="numeric"
                style={styles.value}
              />
              <Divider
                orientation="vertical"
                width={1}
                style={styles.divider}
              />
              <AppText style={styles.name}>{itemName}</AppText>
            </View>
            <Checkbox
              style={styles.chekbox}
              value={checkValue}
              onValueChange={handleChangeCheck}
              color={checkValue ? "#6fc276" : defaultStyles.colors.medium}
            />
          </Surface>
        </Swipeable>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    margin: 7,
    borderRadius: 10,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    backgroundColor: defaultStyles.colors.light,
  },
  chekbox: {
    margin: 8,
    marginRight: 15,
  },
  swipeArea: {
    width: 60,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
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
