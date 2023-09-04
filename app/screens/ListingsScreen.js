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
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const {
    data: listings,
    loading,
    error,
    request: loadListing,
  } = useApi(litingsApi.getListings);

  useEffect(() => {
    loadListing();
  }, []);

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
            thumbnailUrl={item.images[0].thumbnailUrl}
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
