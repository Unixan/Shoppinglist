import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions, ScrollView } from "react-native";
import { SegmentedButtons } from "react-native-paper";

function SegmentSelector({
  buttons,
  onSelectItem,
  selectedItem,
  width = "100%",
}) {
  const [value, setValue] = useState();

  const handleSelection = (item) => {
    onSelectItem(item);
  };

  return (
    <View style={[styles.container, { width }]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SegmentedButtons
          value={selectedItem}
          onValueChange={onSelectItem}
          buttons={buttons}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default SegmentSelector;
