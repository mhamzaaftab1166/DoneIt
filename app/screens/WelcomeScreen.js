import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
function WelcomeScreen({ navigation }) {
  return (
    <>
      <ImageBackground
        blurRadius={8}
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.tagline}>Sell What You Want!!</Text>
        </View>
        <View style={styles.buttonContainner}>
          <AppButton
            onPress={() => navigation.navigate(routes.LOGIN)}
            title={"Login"}
          ></AppButton>
          <AppButton
            onPress={() => navigation.navigate(routes.REGISTER)}
            title={"Register"}
            color="secondary"
          ></AppButton>
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
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  buttonContainner: {
    padding: 20,
    width: "100%",
  },
});
export default WelcomeScreen;
