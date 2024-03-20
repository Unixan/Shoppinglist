import { useEffect, useState } from "react";
import ListItemsList from "../components/ListItemsList";
import Screen from "../components/Screen";

function ShoppingListScreen(props) {
  const [listItems, setListItems] = useState([
    { id: 1, name: "Knekkebrød", value: 2, isDone: true, unit: "unit(s)" },
    { id: 2, name: "Ost", value: 1, isDone: false, unit: "unit(s)" },
    { id: 3, name: "Brød", value: 4, isDone: true, unit: "unit(s)" },
    { id: 4, name: "Melk", value: 2, isDone: false, unit: "litres" },
    { id: 5, name: "Syltetøy", value: 1, isDone: true, unit: "unit(s)" },
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
    setListItems(updatedListItems);
  };

  const handleAddItem = (item) => {
    const newList = [...listItems, item];
    setListItems(newList);
  };

  useEffect(() => {
    const newList = listItems.filter((item) => item.value > 0);
    if (JSON.stringify(newList) !== JSON.stringify(listItems)) {
      setListItems(newList);
    }
  }, [listItems]);

  return (
    <Screen>
      <ListItemsList
        handleAddItem={handleAddItem}
        items={listItems}
        handleChangeCheck={handleChangeCheck}
        handleChangeText={handleChangeText}
      />
    </Screen>
  );
}

export default ShoppingListScreen;
