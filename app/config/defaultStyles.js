import { Platform } from "react-native";

export default {
  colors: {
    white: "#fff",
    light: "#f8f4f4",
    medium: "#6e6969",
    dark: "#0c0c0c",
    black: "#000",
    warning: "#ffe66d",
    danger: "#ff5252",
  },
  text: {
    color: "#0c0c0c",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
  },
};
