import { SafeAreaView } from "react-native-safe-area-context";
import MessagesScreen from "./app/screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";
import SafeScreen from "./app/components/SafeScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeScreen>
        <ListItem
          title={"my title"}
          ImageComponent={<Icon name={"email"}></Icon>}
        ></ListItem>
      </SafeScreen>
    </GestureHandlerRootView>
    // <GestureHandlerRootView>
    //   <MessagesScreen />
    // </GestureHandlerRootView>
  );
}
