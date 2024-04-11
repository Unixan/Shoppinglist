import { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, Surface } from "react-native-paper";
import * as Yup from "yup";

import AppText from "../components/AppText";
import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import SubmitButton from "../components/Form/SubmitButton";
import defaultStyles from "../config/defaultStyles";
import User from "../model/User";
import ErrorMessage from "../components/Form/ErrorMessage";

const validationSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required()
    .label("Email address"),
  password: Yup.string().required().label("Password"),
});

const tempUsers = [
  {
    email: "staale_80@hotmail.com",
    userName: "Ståle",
    password: "Apetryne1",
  },
  {
    email: "helene.persson11@gmail.com",
    userName: "Helene",
    password: "Apetryne2",
  },
];

function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [wrongInfo, setWrongInfo] = useState(false);

  const handleSubmit = ({ emailAddress, password }) => {
    const user = new User(emailAddress.toLowerCase(), password);
    if (
      tempUsers.find(
        (userdata) =>
          user.email === userdata.email && user.password === userdata.password
      )
    ) {
      setCurrentUser(user);
      console.log(currentUser);
    } else {
      setWrongInfo(true);
    }
  };

  return (
    <ImageBackground
      resizeMode="cover"
      blurRadius={5}
      source={require("../assets/Background2.jpg")}
      style={styles.background}
    >
      <Surface style={styles.loginContainer}>
        <AppForm
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
          initialValues={{
            emailAddress: "",
            password: "",
          }}
        >
          <View style={styles.inputFields}>
            <AppFormField
              onChange={() => setWrongInfo(false)}
              label="Email address ..."
              icon="email"
              name="emailAddress"
              keyboardType="email-address"
            />
            <AppFormField
              onChange={() => setWrongInfo(false)}
              label="Password ..."
              secureTextEntry={!showPassword}
              icon={showPassword ? "eye" : "eye-off"}
              name="password"
              onPressIcon={() => setShowPassword(!showPassword)}
            />
          </View>
          {wrongInfo ? (
            <ErrorMessage
              error="Wrong username and/or password"
              visible={wrongInfo}
            />
          ) : (
            <AppText> </AppText>
          )}
          <View style={styles.buttonContainer}>
            <Button
              labelStyle={[defaultStyles.text, { textTransform: "uppercase" }]}
              mode="contained"
              onPress={() => navigation.navigate("Home")}
            >
              Cancel
            </Button>
            <SubmitButton title="Log in" />
          </View>
        </AppForm>
      </Surface>
      <View style={{ paddingTop: 10 }}>
        <AppText style={[styles.signupText, defaultStyles.text]}>
          Dont have an account? Sign up{" "}
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Signup")}
          >
            <AppText style={styles.signupLink}>here</AppText>
          </TouchableWithoutFeedback>
        </AppText>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    height: Dimensions.get("screen").height,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    marginTop: 100,
    width: "75%",
    height: 250,
    borderRadius: 10,
  },
  inputFields: {
    justifyContent: "space-between",
    height: 120,
    margin: 20,
  },
  signupLink: {
    color: "blue",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  signupText: { color: "black", fontWeight: "bold" },
});

export default LoginScreen;
