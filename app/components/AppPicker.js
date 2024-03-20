import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { FlatList } from "react-native";
import AppText from "../components/AppText";
import defaultStyles from "../config/defaultStyles";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, placeholder, onSelectItem, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.name}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <Button title="close" onPress={() => setModalVisible(false)} />
              <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <PickerItem
                    item={item}
                    onPress={() => {
                      setModalVisible(false);
                      onSelectItem(item);
                    }}
                  />
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
  modal: {
    width: "30%",
    borderRadius: 10,
  },
  modalContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: { flex: 1 },
});

export default AppPicker;
