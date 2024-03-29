import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <Button mode="contained" onPress={handleSubmit}>
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SubmitButton;
