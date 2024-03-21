import { useEffect, useState } from "react";
import ListItemsList from "../components/ListItemsList";

function ShoppingListScreen(props) {
  const [listItems, setListItems] = useState([
    {
      id: "92185047-3001-4a17-9af3-b99a7a52c024",
      name: "Knekkebrød",
      value: 2,
      isDone: true,
      unit: "unit(s)",
    },
    {
      id: "b10ef69e-817a-4929-8922-433d5ce4a0b8",
      name: "Ost",
      value: 1,
      isDone: false,
      unit: "unit(s)",
    },
    {
      id: "6b17a08d-8cbf-456a-b753-33ff9e0f8a01",
      name: "Brød",
      value: 4,
      isDone: true,
      unit: "unit(s)",
    },
    {
      id: "23ff2634-fc88-46d6-aaae-06700f2f6683",
      name: "Melk",
      value: 2,
      isDone: false,
      unit: "litres",
    },
    {
      id: "d048dfd4-7a1a-4c83-a2b7-c91be8691cb4",
      name: "Syltetøy",
      value: 1,
      isDone: true,
      unit: "unit(s)",
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
    console.log(listItems);
  }, [listItems]);

  return (
    <ListItemsList
      handleAddItem={handleAddItem}
      items={listItems}
      handleChangeCheck={handleChangeCheck}
      handleChangeText={handleChangeText}
    />
  );
}

export default ShoppingListScreen;
