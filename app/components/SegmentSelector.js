import { StyleSheet } from "react-native";
import { SegmentedButtons, Surface } from "react-native-paper";

function SegmentSelector({
  buttons,
  onSelectItem,
  selectedItem,
  backgroundColor = "white",
}) {
  return (
    <Surface style={styles.container} elevation={0}>
      <SegmentedButtons
        value={selectedItem}
        onValueChange={onSelectItem}
        buttons={buttons}
        style={{ width: "100%", backgroundColor, borderRadius: 50 }}
      />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
});

export default SegmentSelector;
