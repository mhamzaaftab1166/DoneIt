import React from "react";
import SafeScreen from "../components/SafeScreen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
const listings = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    price: 40,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];
function ListingsScreen(props) {
  return (
    <SafeScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </SafeScreen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
