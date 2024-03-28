import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SegmentedButtons } from "react-native-paper";

function SegmentSelector({ buttons, selection, width = "100%" }) {
  const [value, setValue] = useState();

  const handleSelection = (item) => {
    selection(item);
    setValue(item);
  };

  return (
    <View style={[styles.container, {width}]}>
      <SegmentedButtons
        value={value}
        onValueChange={handleSelection}
        buttons={buttons}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SegmentSelector;
