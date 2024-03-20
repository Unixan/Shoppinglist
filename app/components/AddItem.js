import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import * as Yup from "yup";

import { useState } from "react";
import defaultStyles from "../config/defaultStyles";
import AppPicker from "./AppPicker";
import AppForm from "./Form/AppForm";
import AppFormField from "./Form/AppFormField";

const validationSchema = Yup.object().shape({
  product: Yup.string().required().label("Product").min(3),
  count: Yup.number().required().label("Count"),
  unit: Yup.object().required().label("Unit type"),
});

const units = [
  { id: 1, name: "unit(s)" },
  { id: 2, name: "kg" },
  { id: 3, name: "g" },
  { id: 4, name: "oz" },
  { id: 5, name: "lb" },
];

function AddItem({ items, onModalClose }) {
  const [selectedItem, setSelectedItem] = useState({ id: 1, name: "unit(s)" });
  const handleContentPress = (event) => {
    event.stopPropagation();
  };

  return (
    <TouchableWithoutFeedback onPress={onModalClose}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handleContentPress}>
          <View style={styles.inputContainer}>
            <AppForm
              style={{ padding: 10 }}
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
              <AppPicker
                placeholder="Units"
                items={units}
                selectedItem={selectedItem}
                onSelectItem={(item) => {
                  setSelectedItem(item);
                }}
              />
            </AppForm>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  inputContainer: {
    borderRadius: 20,
    backgroundColor: defaultStyles.colors.white,
    width: "95%",
    height: 320,
  },
});

export default AddItem;
