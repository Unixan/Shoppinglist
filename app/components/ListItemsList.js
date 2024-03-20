import { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import ListItem from "./ListItem";
import AddItem from "./AddItem";

function ListItemsList({ items, handleChangeCheck, handleChangeText }) {
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
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <TouchableOpacity onPress={handleModalState}>
        <ListItem />
      </TouchableOpacity>
      <Modal transparent={true} visible={modalOpen} animationType="fade">
        <AddItem items={items} onModalClose={() => handleModalState()} />
        <Button title="Close" onPress={handleModalState} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({});

export default ListItemsList;
