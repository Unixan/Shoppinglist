import { useState } from "react";
import { FlatList, Modal, StyleSheet, View, Text } from "react-native";
import { FAB } from "react-native-paper";

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
      renderRightAction={() => (
        <View>
          <Text>Test</Text>
        </View>
      )}
    />
  );

  const handleModalState = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <FAB
        style={styles.fab}
        icon="cart-plus"
        onPress={handleModalState}
        customSize={60}
      >
        <ListItem />
      </FAB>
      <Modal transparent={true} visible={modalOpen} animationType="fade">
        <AddItem
          onModalClose={() => handleModalState()}
          handleAddItem={handleAddItem}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    alignSelf: "flex-end",
    marginHorizontal: 10,
    height: 60,
    width: 60,
  },
  list: {
    paddingVertical: 5,
  },
});

export default ListItemsList;
