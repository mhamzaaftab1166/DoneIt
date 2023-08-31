import React, { useEffect, useState } from "react";
import SafeScreen from "../components/SafeScreen";
import { FlatList, StyleSheet } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import litingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function ListingsScreen({ navigation }) {
  const [listings, setLitings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListing();
  }, []);

  const loadListing = async () => {
    setLoading(true);
    const response = await litingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setLitings(response.data);
  };

  return (
    <SafeScreen style={styles.screen}>
      <ActivityIndicator visible={loading} />
      {error && (
        <>
          <AppText style={{ color: colors.danger, textAlign: "center" }}>
            Couldn't Retrive listings.
          </AppText>
          <AppButton title="Retry" onPress={loadListing} />
        </>
      )}
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
