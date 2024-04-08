import { ImageBackground, StyleSheet, View } from "react-native";
import { Surface, Button, TextInput } from "react-native-paper";
import { useState } from "react";
import * as Yup from "yup";

import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import SubmitButton from "../components/Form/SubmitButton";
import defaultStyles from "../config/defaultStyles";

const validationSchema = Yup.object().shape({
  accountName: Yup.string().email().required().label("Username").min(3),
  password: Yup.string().required().label("Password"),
});

function LoginScreen(props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ImageBackground
      blurRadius={5}
      source={require("../assets/Background2.jpg")}
      style={styles.background}
    >
      <Surface style={styles.loginContainer}>
        <AppForm
          onSubmit={() => console.log("submit")}
          validationSchema={validationSchema}
          initialValues={{
            accountName: "",
            password: "",
          }}
        >
          <View style={styles.inputFields}>
            <AppFormField
              label="Account name ..."
              icon="account"
              name="accountName"
              keyboardType="email-address"
            />
            <AppFormField
              label="Password ..."
              secureTextEntry={!showPassword}
              icon={showPassword ? "eye" : "eye-off"}
              name="password"
              onPressIcon={() => setShowPassword(!showPassword)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              labelStyle={[defaultStyles.text, { textTransform: "uppercase" }]}
              mode="contained"
            >
              Cancel
            </Button>
            <SubmitButton title="Log in" />
          </View>
        </AppForm>
      </Surface>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
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
});

export default LoginScreen;
