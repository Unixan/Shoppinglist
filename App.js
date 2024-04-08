import Screen from "./app/components/Screen";
import LoginScreen from "./app/screens/LoginScreen";
import ShoppingListScreen from "./app/screens/ShoppingListScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <Screen>
      <LoginScreen />
    </Screen>
  );
}
