import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import NavigateSafeScreen from "../navigation/NavigateSafeScreen";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppButton from "../components/AppButton";
import userApi from "../api/register";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";
import AppErrorMessage from "../components/forms/AppErrorMessage";
import SubmitButton from "../components/forms/SubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [error, setError] = useState();
  const [errorVisible, setErrorVisible] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (userInfo) => {
    const result = await userApi.register(userInfo);
    if (!result.ok) {
      setErrorVisible(true);
      if (result.data) setError(result.data.error);
      else setError("an unexpected error occur.");
      return;
    }
    setErrorVisible(false);
    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );
    login(authToken);
  };

  return (
    <NavigateSafeScreen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppErrorMessage error={error} visible={errorVisible} />
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </NavigateSafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
