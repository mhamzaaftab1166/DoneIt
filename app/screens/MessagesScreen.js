import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import SafeScreen from "../components/SafeScreen";
import ListItemSeprator from "../components/ListItemSeprator";

function MessagesScreen(props) {
  const messages = [
    {
      id: 1,
      title: "hamza",
      description: "this is my description",
      image: require("../assets/hamza.jpeg"),
    },
    {
      id: 2,
      title: "hamza",
      description: "this is my description",
      image: require("../assets/hamza.jpeg"),
    },
  ];
  return (
    <SafeScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          ></ListItem>
        )}
        ItemSeparatorComponent={ListItemSeprator}
      />
    </SafeScreen>
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
