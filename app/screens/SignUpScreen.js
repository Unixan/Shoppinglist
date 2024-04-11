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

import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import SubmitButton from "../components/Form/SubmitButton";
import defaultStyles from "../config/defaultStyles";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .email("Invalid email")
    .required("Email address is required")
    .label("Email address"),
  userName: Yup.string()
    .required("Username is required")
    .min(3, ({ min }) => `Minimum ${min} characters`)
    .label("Username"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Minimum 8 characters")
    .max(16, "Max 16 characters")
    .matches(/[a-zA-ZÆØÅæøå]/, "Must contain a letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/^[a-zA-Z0-9ÆØÅæøå]*$/, "Only letters and numbers")
    .label("Password"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords don't match"
  ),
});

function SignUpScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ImageBackground
      resizeMode="cover"
      blurRadius={5}
      source={require("../assets/Background2.jpg")}
      style={styles.background}
    >
      <Surface style={styles.loginContainer}>
        <AppForm
          onSubmit={() => console.log("submit")}
          validationSchema={validationSchema}
          initialValues={{
            emailAddress: "",
            userName: "",
            password: "",
            passwordConfirmation: "",
          }}
        >
          <View style={styles.inputFields}>
            <AppFormField
              label="Email address ..."
              icon="email"
              name="emailAddress"
              keyboardType="email-address"
            />
            <AppFormField
              label="Username ..."
              icon="account"
              name="userName"
              keyboardType="default"
            />
            <AppFormField
              label="Password ..."
              secureTextEntry={!showPassword}
              icon={showPassword ? "eye" : "eye-off"}
              name="password"
              autoComplete="off"
              onPressIcon={() => setShowPassword(!showPassword)}
            />
            <AppFormField
              label="Confirm password ..."
              secureTextEntry={!showPassword}
              icon={showPassword ? "eye" : "eye-off"}
              name="passwordConfirmation"
              onPressIcon={() => setShowPassword(!showPassword)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              labelStyle={[defaultStyles.text, { textTransform: "uppercase" }]}
              mode="contained"
              onPress={() => navigation.navigate("Home")}
            >
              Cancel
            </Button>
            <SubmitButton title="Sign up" />
          </View>
        </AppForm>
      </Surface>
      <View style={{ paddingTop: 10 }}>
        <AppText style={[styles.signupText, defaultStyles.text]}>
          Allready have an account? Log in{" "}
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Login")}
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
    paddingBottom: 15,
    alignSelf: "flex-end",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    marginTop: 50,
    width: "75%",
    borderRadius: 10,
    height: 400,
  },
  inputFields: {
    justifyContent: "space-between",
    margin: 20,
  },
  signupLink: {
    color: "blue",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  signupText: { color: "black", fontWeight: "bold" },
});

export default SignUpScreen;
