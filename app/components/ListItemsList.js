import { useState } from "react";
import { FlatList, Modal, StyleSheet, TouchableOpacity } from "react-native";

import AddItem from "./AddItem";
import ListItem from "./ListItem";

function ListItemsList({
  items,
  handleChangeCheck,
  handleChangeText,
  handleAddItem,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const renderItem = ({ item }) => (
    <ListItem
      itemName={item.name}
      number={item.value.toString()}
      checkValue={item.isDone}
      handleChangeCheck={() => handleChangeCheck(item.id)}
      handleChangeText={(text) => handleChangeText(text, item.id)}
    />
  );

  const handleModalState = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <TouchableOpacity
        style={{ flex: 1, alignSelf: "flex-end" }}
        onPress={handleModalState}
      >
        <ListItem />
      </TouchableOpacity>
      <Modal transparent={true} visible={modalOpen} animationType="fade">
        <AddItem
          items={items}
          onModalClose={() => handleModalState()}
          handleAddItem={handleAddItem}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({});

export default ListItemsList;
