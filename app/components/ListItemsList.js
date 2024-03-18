import { FlatList, StyleSheet } from "react-native";
import ListItem from "./ListItem";

function ListItemsList({ items, handleChangeCheck, handleChangeText }) {
  const renderItem = ({ item }) => (
    <ListItem
      itemName={item.name}
      number={item.value.toString()}
      checkValue={item.isDone}
      handleChangeCheck={() => handleChangeCheck(item.id)}
      handleChangeText={(text) => handleChangeText(text, item.id)}
    />
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  contianer: {},
});

export default ListItemsList;
