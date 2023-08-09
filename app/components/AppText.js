import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "700",
    fontStyle: "italic",
    color: "grey",
    textTransform: "capitalize",
    textAlign: "center",
    lineHeight: 70,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 70,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
