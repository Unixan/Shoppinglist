import { useEffect, useState } from "react";
import ListItemsList from "../components/ListItemsList";
import { Portal, Snackbar } from "react-native-paper";
import { StyleSheet } from "react-native";

function ShoppingListScreen(props) {
  const [snackBarVisibleOnDelete, setSnackBarVisibleOnDelete] = useState(false);
  const [snackBarVisibleOnAdd, setSnackBarVisibleOnAdd] = useState(false);
  const [modifiedItem, setDeletedModifiedItem] = useState("");
  const [addedItem, setAddedItem] = useState("");
  const [listItems, setListItems] = useState([
    {
      id: "92185047-3001-4a17-9af3-b99a7a52c024",
      name: "Knekkebrød",
      value: 2,
      isDone: true,
      unit: "Pcs",
    },
    {
      id: "b10ef69e-817a-4929-8922-433d5ce4a0b8",
      name: "Ost",
      value: 1,
      isDone: false,
      unit: "Pcs",
    },
    {
      id: "6b17a08d-8cbf-456a-b753-33ff9e0f8a01",
      name: "Brød",
      value: 4,
      isDone: true,
      unit: "Pcs",
    },
    {
      id: "23ff2634-fc88-46d6-aaae-06700f2f6683",
      name: "Melk",
      value: 2,
      isDone: false,
      unit: "l",
    },
    {
      id: "d048dfd4-7a1a-4c83-a2b7-c91be8691cb4",
      name: "Snyltetøy",
      value: 1,
      isDone: true,
      unit: "Pcs",
    },
  ]);

  const handleChangeCheck = (id) => {
    const updatedListItems = listItems.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setListItems(updatedListItems);
  };
  const handleChangeText = (text, id) => {
    const updatedListItems = listItems.map((item) =>
      item.id === id ? { ...item, value: parseFloat(text) || 0 } : item
    );
    setDeletedModifiedItem(listItems.find((item) => item.id === id));
    setSnackBarVisibleOnDelete(true);
    setListItems(updatedListItems);
  };

  const handleAddItem = (item) => {
    const newList = [...listItems, item];
    setAddedItem(item);
    setSnackBarVisibleOnAdd(true);
    setListItems(newList);
  };

  const handleSnackbarVisibleOnDelete = () => {
    setSnackBarVisibleOnDelete(false);
    setDeletedModifiedItem("");
  };

  const handleSnackbarVisibleOnAdd = () => {
    setSnackBarVisibleOnAdd(false);
    setAddedItem("");
  };

  useEffect(() => {
    const newList = listItems.filter((item) => item.value > 0);
    if (JSON.stringify(newList) !== JSON.stringify(listItems)) {
      setListItems(newList);
    }
    // console.log(listItems);
  }, [listItems]);

  return (
    <>
      <ListItemsList
        handleAddItem={handleAddItem}
        items={listItems}
        handleChangeCheck={handleChangeCheck}
        handleChangeText={handleChangeText}
      />
      <Portal>
        <Snackbar
          style={styles.snackBar}
          duration={2000}
          visible={snackBarVisibleOnDelete}
          onDismiss={handleSnackbarVisibleOnDelete}
        >
          {modifiedItem.name + " was removed"}
        </Snackbar>
        <Snackbar
          style={styles.snackBar}
          duration={2000}
          visible={snackBarVisibleOnAdd}
          onDismiss={handleSnackbarVisibleOnAdd}
        >
          {addedItem.name + " added"}
        </Snackbar>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  snackBar: {
    position: "absolute",
    bottom: 10,
  },
});

export default ShoppingListScreen;
