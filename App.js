import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
