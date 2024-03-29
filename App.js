import AddItem from "./app/components/AddItem";
import ListItemsList from "./app/components/ListItemsList";
import Screen from "./app/components/Screen";
import ShoppingListScreen from "./app/screens/ShoppingListScreen";

export default function App() {
  return (
    <Screen>
      <ShoppingListScreen />
    </Screen>
  );
}
