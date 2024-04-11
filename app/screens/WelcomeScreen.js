import { Image, ImageBackground, StyleSheet } from "react-native";
import { Button, Surface } from "react-native-paper";
import defaultStyles from "../config/defaultStyles";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/WelcomeScreen.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/Logo.png")} />
      <Surface mode="flat" style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
          labelStyle={styles.buttonText}
          mode="contained"
        >
          Log in
        </Button>
        <Button
          onPress={() => navigation.navigate("Signup")}
          style={styles.button}
          labelStyle={styles.buttonText}
          mode="contained"
        >
          Sign up
        </Button>
      </Surface>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {},
  background: {
    alignItems: "center",
    flex: 1,
    height: "100%",
    justifyContent: "space-around",
  },
  button: {
    borderRadius: 25,
    fontSize: 18,
    fontWeight: 900,
    height: 50,
  },
  buttonText: {
    fontFamily: defaultStyles.text.fontFamily,
    fontSize: defaultStyles.text.fontSize,
    padding: 5,
    textTransform: "uppercase",
  },
  buttonContainer: {
    backgroundColor: "transparent",
    height: 120,
    justifyContent: "space-between",
    width: "70%",
  },
  logo: {
    width: 250,
    height: 250,
  },
});

export default WelcomeScreen;
