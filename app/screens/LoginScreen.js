import React, { useState } from "react";
import SafeScreen from "../components/SafeScreen";
import { Image, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeScreen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon={"email"}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon={"lock"}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        textContentType="password"
      />
      <AppButton
        title={"Login"}
        onPress={() => console.log(email, password)}
      ></AppButton>
    </SafeScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});
export default LoginScreen;
