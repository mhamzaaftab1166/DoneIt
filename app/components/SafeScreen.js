import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
function SafeScreen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
export default SafeScreen;
