import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import defaultStyles from "../../config/defaultStyles";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      labelStyle={[styles.buttonText, defaultStyles.text]}
      mode="contained"
      onPress={handleSubmit}
    >
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    textTransform: "uppercase",
  },
});

export default SubmitButton;
