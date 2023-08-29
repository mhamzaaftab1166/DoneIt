import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
function SafeScreen({ children, style }) {
  return <View style={[styles.screen, style]}>{children}</View>;
}
const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight,
    height: "100%",
  },
});
export default SafeScreen;
