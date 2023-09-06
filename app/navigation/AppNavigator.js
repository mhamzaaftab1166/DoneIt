import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  useNotifications();

  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          bottom: 3,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="Feed"
        component={FeedNavigator}
      />
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("ListingEdit")}
            />
          ),
          // tabBarIcon: ({ size, color }) => (
          //   <MaterialCommunityIcons
          //     name="plus-circle"
          //     color={color}
          //     size={size}
          //   />
          // ),
        })}
        name="ListingEdit"
        component={ListingEditScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="Account"
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
