import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
    color: colors.dark,
  },
};
