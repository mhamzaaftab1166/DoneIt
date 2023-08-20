import React from "react";
import SafeScreen from "../components/SafeScreen";
import { Image, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";
import AppErrorMessage from "../components/AppErrorMessage";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function LoginScreen(props) {
  return (
    <SafeScreen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon={"email"}
              onBlur={() => setFieldTouched("email")}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon={"lock"}
              placeholder="Password"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              secureTextEntry
              textContentType="password"
            />
            <AppErrorMessage
              error={errors.password}
              visible={touched.password}
            />
            <AppButton title={"Login"} onPress={handleSubmit}></AppButton>
          </>
        )}
      </Formik>
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
