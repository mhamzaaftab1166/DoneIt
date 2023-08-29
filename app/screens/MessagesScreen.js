import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import NavigateSafeScreen from "../navigation/NavigateSafeScreen";
import ListItemSeprator from "../components/ListItemSeprator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
const initialMessages = [
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
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <NavigateSafeScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("messg tap", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          ></ListItem>
        )}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "hamza",
              description: "this is my description",
              image: require("../assets/hamza.jpeg"),
            },
          ])
        }
        ItemSeparatorComponent={ListItemSeprator}
      />
    </NavigateSafeScreen>
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
