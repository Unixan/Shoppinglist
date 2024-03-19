import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppForm from "./Form/AppForm";
import AppFormField from "./Form/AppFormField";
import { Picker } from "@react-native-picker/picker";

const validationSchema = Yup.object().shape({
  product: Yup.string().required().label("Product").min(3),
  count: Yup.number().required().label("Units"),
  unit: Yup.object().required().label("Unit type"),
});

function AddItem({ items }) {
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          product: "",
          count: "",
          unit: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="product"
          placeholder="Product ..."
        />

        <AppFormField
          keyboardType="numeric"
          maxLength={3}
          name="count"
          placeholder="Count"
          width={80}
        />
      </AppForm>
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
