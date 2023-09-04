import React, { useContext } from "react";
import NavigateSafeScreen from "../navigation/NavigateSafeScreen";
import ListItem from "../components/ListItem";
import { FlatList, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeprator from "../components/ListItemSeprator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import routes from "../navigation/routes";
import AuthContext from "../auth/context";

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
    targetScreen: routes.MESSAGES,
  },
];
function AccountScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <GestureHandlerRootView>
      <NavigateSafeScreen style={styles.screen}>
        <View style={styles.container}>
          <ListItem
            title={user.name}
            subTitle={user.email}
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
                onPress={() => navigation.navigate(item.targetScreen)}
              ></ListItem>
            )}
            ItemSeparatorComponent={ListItemSeprator}
          ></FlatList>
        </View>
        <ListItem
          title={"Log Out"}
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d"></Icon>}
        ></ListItem>
      </NavigateSafeScreen>
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
