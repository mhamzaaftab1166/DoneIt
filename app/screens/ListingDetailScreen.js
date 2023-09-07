import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import { Image } from "react-native-expo-image-cache";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import ContactSellerForm from "../components/forms/ContactSellerForm";

function ListingDetailScreen({ route }) {
  const listing = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        tint="light"
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title={"Hamza Aftab"}
            subTitle={"4 Listings"}
            image={require("../assets/hamza.jpeg")}
          ></ListItem>
        </View>
      </View>
      <View style={styles.contactContainer}>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
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
  contactContainer: {
    padding: 10,
  },
});
export default ListingDetailScreen;
