import React from "react";
import SafeScreen from "../components/SafeScreen";
import ListItem from "../components/ListItem";
import { FlatList, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeprator from "../components/ListItemSeprator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
function AccountScreen(props) {
  return (
    <GestureHandlerRootView>
      <SafeScreen style={styles.screen}>
        <View style={styles.container}>
          <ListItem
            title={"M. Hamza Aftab"}
            subTitle={"mhamzaaftab1166@gmail.com"}
            image={require("../assets/hamza.jpeg")}
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  ></Icon>
                }
              ></ListItem>
            )}
            ItemSeparatorComponent={ListItemSeprator}
          ></FlatList>
        </View>
        <ListItem
          title={"Log Out"}
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d"></Icon>}
        ></ListItem>
      </SafeScreen>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
export default AccountScreen;
