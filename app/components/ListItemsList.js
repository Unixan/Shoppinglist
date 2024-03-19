import {
  FlatList,
  Modal,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import ListItem from "./ListItem";
import { useState } from "react";
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

  const handleAddItem = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <TouchableOpacity onPress={handleAddItem}>
        <ListItem />
      </TouchableOpacity>
      <Modal visible={modalOpen} animationType="slide">
        <AddItem items={items} />
        <Button title="Close" onPress={handleAddItem} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ListItemsList;
