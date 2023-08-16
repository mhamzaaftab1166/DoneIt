import { Switch, Text, TextInput, View } from "react-native";
import ListingsScreen from "./app/screens/ListingsScreen";
import SafeScreen from "./app/components/SafeScreen";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [name, setName] = useState(false);
  return (
    <SafeScreen>
      <AppTextInput icon={"email"} placeholder={"Name"} />
      <AppPicker icon={"apps"} placeholder={"Category"} />
    </SafeScreen>
  );
}
