import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={35} color={"white"} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color={"white"}
        />
      </View>
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
    backgroundColor: colors.black,
  },
  closeIcon: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  deleteIcon: {
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
