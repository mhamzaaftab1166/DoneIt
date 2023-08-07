import React from "react";
import { Image, StyleSheet, View } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  closeIcon: {
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
    position: "absolute",
    top: 50,
    left: 20,
  },
  deleteIcon: {
    backgroundColor: "#4ecdc4",
    width: 50,
    height: 50,
    position: "absolute",
    top: 50,
    right: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
