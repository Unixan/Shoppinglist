import { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import * as Yup from "yup";
import randomGUID from "./data/randomGUID";

import defaultStyles from "../config/defaultStyles";
import AppButton from "./AppButton";
import AppForm from "./Form/AppForm";
import AppFormField from "./Form/AppFormField";
import AppFormSegmentSelector from "./Form/AppFormSegmentSelector";
import SubmitButton from "./Form/SubmitButton";

const validationSchema = Yup.object().shape({
  product: Yup.string().required().label("Product").min(3),
  count: Yup.string().required().label("Count"),
  unit: Yup.string().required().label("Unit type"),
});

const units = [
  { value: "pieces", label: "Pcs" },
  { value: "kilos", label: "Kg" },
  { value: "grams", label: "g" },
  { value: "litres", label: "l" },
  { value: "decilitres", label: "dl" },
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
      unit: values.unit,
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
              validationSchema={validationSchema}
              initialValues={{
                product: "",
                count: "",
                unit: null,
              }}
              onSubmit={(values) => handleSubmit(values)}
            >
              <View style={styles.inputFields}>
                <AppFormField
                  maxLength={255}
                  name="count"
                  label="Count"
                  width="20%"
                  keyboardType="decimal-pad"
                />
                <AppFormField
                  maxLength={255}
                  name="product"
                  label="Product name"
                  width="70%"
                />
              </View>
              <AppFormSegmentSelector
                name="unit"
                buttons={units}
                selectedItem={selectedItem}
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
    height: 250,
    width: "95%",
    paddingTop: 20,
  },
  inputFields: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
    paddingBottom: 20,
  },
});

export default AddItem;
