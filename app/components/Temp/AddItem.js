import { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import randomGUID from "./data/randomGUID";
import * as Yup from "yup";

import defaultStyles from "../config/defaultStyles";
import AppButton from "./AppButton";
import AppForm from "./Form/AppForm";
import AppFormField from "./Form/AppFormField";
import AppFormPicker from "./Form/AppFormPicker";
import SubmitButton from "./Form/SubmitButton";

const validationSchema = Yup.object().shape({
  product: Yup.string().required().label("Product").min(3),
  count: Yup.number().required().label("Count"),
  unit: Yup.object().required().label("Unit type"),
});

const units = [
  { id: 1, name: "unit(s)" },
  { id: 2, name: "kg" },
  { id: 3, name: "g" },
  { id: 4, name: "litres" },
  { id: 5, name: "oz" },
  { id: 6, name: "lb" },
];

function AddItem({ items, onModalClose, handleAddItem }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleContentPress = (event) => {
    event.stopPropagation();
  };

  const handleSubmit = (values) => {
    const newId = randomGUID();
    const newItem = {
      id: newId,
      name: values.product,
      value: parseFloat(values.count),
      isDone: false,
      unit: values.unit.name,
    };
    handleAddItem(newItem);
    onModalClose();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onModalClose();
        setSelectedItem(null);
      }}
    >
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
              onSubmit={(values) => handleSubmit(values)}
              validationSchema={validationSchema}
            >
              <AppFormField
                maxLength={255}
                name="product"
                placeholder="Product name ..."
              />

              <AppFormField
                keyboardType="numeric"
                maxLength={3}
                name="count"
                placeholder="Count"
                width={80}
              />
              <AppFormPicker
                name="unit"
                placeholder="Select unit type"
                items={units}
                width={180}
                selectedItem={selectedItem}
                onSelectItem={(item) => {
                  setSelectedItem(item);
                }}
              />
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <AppButton title="Cancel" onPress={onModalClose} />
                </View>
                <View style={styles.button}>
                  <SubmitButton title="Add" />
                </View>
              </View>
            </AppForm>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    width: "90%",
    position: "absolute",
    bottom: 20,
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  inputContainer: {
    backgroundColor: defaultStyles.colors.white,
    borderRadius: 20,
    height: 400,
    width: "95%",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});

export default AddItem;
