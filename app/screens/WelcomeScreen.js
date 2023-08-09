import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text>Sell What You Want!!</Text>
        </View>
        <View style={styles.buttonContainner}>
          <AppButton title={"Login"}></AppButton>
          <AppButton title={"Register"} color="secondary"></AppButton>
        </View>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonContainner: {
    padding: 20,
    width: "100%",
  },
});
export default WelcomeScreen;
