import { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Button, Surface } from "react-native-paper";
import * as Yup from "yup";

import randomGUID from "./data/randomGUID";
import defaultStyles from "../config/defaultStyles";
import AppForm from "./Form/AppForm";
import AppFormField from "./Form/AppFormField";
import AppFormSegmentSelector from "./Form/AppFormSegmentSelector";
import SubmitButton from "./Form/SubmitButton";
import { useFormikContext } from "formik";

const validationSchema = Yup.object().shape({
  product: Yup.string().required().label("Product").min(3),
  count: Yup.string().required().label("Count"),
  unit: Yup.string().required().label("Unit type"),
});

const units = [
  { value: "Pcs", label: "Pieces" },
  { value: "Kg", label: "Kilos" },
  { value: "g", label: "grams" },
  { value: "l", label: "litres" },
  { value: "dl", label: "decilitres" },
];

function AddItem({ onModalClose, handleAddItem }) {
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
          <Surface style={styles.inputContainer}>
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
                  <Button mode="elevated" onPress={onModalClose}>
                    Cancel
                  </Button>
                </View>
                <View style={styles.button}>
                  <SubmitButton title="Add" />
                </View>
              </View>
            </AppForm>
          </Surface>
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
    height: "100%",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  inputContainer: {
    marginTop: 30,
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
