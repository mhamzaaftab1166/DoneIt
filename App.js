import React from "react";
import SafeScreen from "./app/components/SafeScreen";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
const Tweets = ({ navigation }) => {
  return (
    <SafeScreen>
      <Text>Tweets list</Text>
      <Button
        title="view tweet detail"
        onPress={() => navigation.navigate("TweetDetail", { id: 12 })}
      />
    </SafeScreen>
  );
};

const TweetDetail = ({ route }) => {
  return (
    <SafeScreen>
      <Text>Tweet Detail {route.params.id}</Text>
    </SafeScreen>
  );
};

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
        }}
        name="Tweets"
        component={Tweets}
      />
      <Stack.Screen
        options={{ title: "lora mera" }}
        name="TweetDetail"
        component={TweetDetail}
      />
    </Stack.Navigator>
  );
};

const Account = () => (
  <SafeScreen>
    <Text>accout</Text>
  </SafeScreen>
);
// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator
//   // tabBarOptions={{
//   //   activeBackgroundColor: "tomato",
//   //   activeTintColor: "white",
//   //   inactiveBackgroundColor: "#eee",
//   //   inactiveTintColor: "black",
//   // }}
//   >
//     <Tab.Screen
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons name="home" color={color} size={size} />
//         ),
//       }}
//       name="Feed"
//       component={StackNavigator}
//     />
//     <Tab.Screen name="Account" component={Account} />
//   </Tab.Navigator>
// );
function App(props) {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import SafeScreen from "./app/components/SafeScreen";
// import * as ImagePicker from "expo-image-picker";
// import ImageInput from "./app/components/ImageInput";
// import ImageInputList from "./app/components/ImageInputList";
// import ListingEditScreen from "./app/screens/ListingEditScreen";

// function App(props) {
//   const [imageUris, setImageUris] = useState([]);

//   const requestPermission = async () => {
//     const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (!granted) alert("Yoy need to enable permissons for accessing library!");
//   };

//   useEffect(() => {
//     requestPermission();
//   }, []);

//   return <ListingEditScreen />;
// }
// export default App;
