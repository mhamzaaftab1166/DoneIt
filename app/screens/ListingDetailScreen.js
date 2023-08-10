import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket For SALE</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title={"Hamza Aftab"}
            subTitle={"4 Listings"}
            image={require("../assets/hamza.jpeg")}
          ></ListItem>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 24,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 12,
  },
  userContainer: {
    marginVertical: 30,
  },
});
export default ListingDetailScreen;
