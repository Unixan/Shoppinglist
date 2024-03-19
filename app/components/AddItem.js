import { StyleSheet, View } from "react-native";
import AppForm from "./Form/AppForm";
import { useFormikContext } from "formik";

function AddItem({ items }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <View style={styles.container}>
      <AppForm></AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    width: "95%",
    height: "50%",
  },
});

export default AddItem;
