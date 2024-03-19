import { useEffect, useState } from "react";
import ListItemsList from "./app/components/ListItemsList";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppText from "./app/components/AppText";

export default function App() {
  // const [listItems, setListItems] = useState([
  //   { id: 1, name: "Knekkebrød", value: 2, isDone: true },
  //   { id: 2, name: "Ost", value: 1, isDone: false },
  //   { id: 3, name: "Brød", value: 4, isDone: true },
  //   { id: 4, name: "Melk", value: 2, isDone: false },
  //   { id: 5, name: "Syltetøy", value: 1, isDone: true },
  // ]);

  // const handleChangeCheck = (id) => {
  //   const updatedListItems = listItems.map((item) =>
  //     item.id === id ? { ...item, isDone: !item.isDone } : item
  //   );
  //   setListItems(updatedListItems);
  // };
  // const handleChangeText = (text, id) => {
  //   const updatedListItems = listItems.map((item) =>
  //     item.id === id ? { ...item, value: parseFloat(text) || 0 } : item
  //   );
  //   setListItems(updatedListItems);
  // };

  // useEffect(() => {
  //   const newList = listItems.filter((item) => item.value > 0);
  //   if (JSON.stringify(newList) !== JSON.stringify(listItems)) {
  //     setListItems(newList);
  //   }
  //   console.log(listItems);
  // }, [listItems]);

  return (
    <Screen>
      <AppTextInput placeholder="Testing" />
    </Screen>
    // <Screen>
    //   <ListItemsList
    //     items={listItems}
    //     handleChangeCheck={handleChangeCheck}
    //     handleChangeText={handleChangeText}
    //   />
    // </Screen>
  );
}
