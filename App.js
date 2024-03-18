import { useState } from "react";
import ListItemsList from "./app/components/ListItemsList";
import Screen from "./app/components/Screen";

export default function App() {
  const [listItems, setListItems] = useState([
    { id: 1, name: "Knekkebrød", value: 2, isDone: true },
    { id: 2, name: "Ost", value: 1, isDone: false },
    { id: 3, name: "Brød", value: 4, isDone: true },
    { id: 4, name: "Melk", value: 2, isDone: false },
    { id: 5, name: "Syltetøy", value: 1, isDone: true },
  ]);

  const handleChangeCheck = (id) => {
    const updatedListItems = listItems.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setListItems(updatedListItems);
    console.log(listItems);
  };
  const handleChangeText = (text, id) => {
    // Update the 'value' property of the item with the given id
    const updatedListItems = listItems.map((item) =>
      item.id === id ? { ...item, value: parseInt(text) || 0 } : item
    );
    setListItems(updatedListItems); // Update the state with the modified items
  };

  return (
    <Screen>
      <ListItemsList
        items={listItems}
        handleChangeCheck={handleChangeCheck}
        handleChangeText={handleChangeText}
      />
    </Screen>
  );
}
