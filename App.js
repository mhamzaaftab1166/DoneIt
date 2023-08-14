import { Text, TextInput, View } from "react-native";
import ListingsScreen from "./app/screens/ListingsScreen";
import SafeScreen from "./app/components/SafeScreen";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [name, setName] = useState("");
  return (
    <SafeScreen>
      <AppTextInput placeholder={"Username"} icon={"email"} />
    </SafeScreen>
  );
}
