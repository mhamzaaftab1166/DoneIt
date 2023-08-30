import React, { useEffect, useState } from "react";
import SafeScreen from "../components/SafeScreen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import litingsApi from "../api/listings";

function ListingsScreen({ navigation }) {
  const [listings, setLitings] = useState([]);
  useEffect(() => {
    litingsApi.getListings().then((response) => setLitings(response.data));
  }, []);
  return (
    <SafeScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
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
