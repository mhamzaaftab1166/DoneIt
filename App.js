import { SafeAreaView } from "react-native-safe-area-context";
import MessagesScreen from "./app/screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";
import SafeScreen from "./app/components/SafeScreen";
import Icon from "./app/components/Icon";

export default function App() {
  return (
    <SafeScreen>
      <Icon
        name={"email"}
        size={50}
        backgroundColor="red"
        iconColor="white"
      ></Icon>
    </SafeScreen>
    // <GestureHandlerRootView>
    //   <MessagesScreen />
    // </GestureHandlerRootView>
  );
}
