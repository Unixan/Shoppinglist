import { Platform } from "react-native";

export default {
  colors: {
    primary: "rgb(120, 69, 172)",
    secondary: "",
    white: "#fff",
    light: "rgb(240, 219, 255)",
    medium: "#6e6969",
    dark: "#0c0c0c",
    black: "#000",
    warning: "#ffe66d",
    danger: "#ff5252",
  },
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
  },
};
