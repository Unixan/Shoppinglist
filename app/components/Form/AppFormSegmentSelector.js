import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";
import SegmentSelector from "../SegmentSelector";

function AppFormSegmentSelector({ buttons, name }) {
  const { handleChange, setFieldValue, values } = useFormikContext();

  return (
    <SegmentSelector
      buttons={buttons}
      selection={handleChange(name)}
      onSelectItem={(item) => setFieldValue(name, item)}
      selectedItem={values[name]}
    />
  );
}

export default AppFormSegmentSelector;
