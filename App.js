import SafeScreen from "./app/components/SafeScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
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
  return (
    <SafeScreen>
      <AppTextInput icon={"email"} placeholder={"Name"} />
      <AppPicker items={cat} icon={"apps"} placeholder={"Category"} />
    </SafeScreen>
  );
}
