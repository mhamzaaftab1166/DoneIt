import SafeScreen from "./app/components/SafeScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";
import { Button } from "react-native";
const cat = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];
export default function App() {
  const [category, setCategory] = useState();
  return (
    <>
      <SafeScreen>
        <AppTextInput icon={"email"} placeholder={"Name"} />
        <AppPicker
          selectedItem={category}
          onSelectedItem={(item) => setCategory(item)}
          items={cat}
          icon={"apps"}
          placeholder={"Category"}
        />
      </SafeScreen>
    </>
  );
}
