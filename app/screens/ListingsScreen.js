import React from "react";
import SafeScreen from "../components/SafeScreen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
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
  {
    id: 3,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];
function ListingsScreen({ navigation }) {
  return (
    <SafeScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
