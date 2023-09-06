import * as Notifications from "expo-notifications";
import expoPushTokenApi from "../api/expoPushToken";
import navigation from "../navigation/rootNavigation";
import { useEffect } from "react";

export default useNotifications = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  const registerForPushNotifications = async () => {
    try {
      const permissions = await Notifications.getPermissionsAsync();
      if (!permissions.granted) {
        const finalPermissions = await Notifications.requestPermissionsAsync();
        if (!finalPermissions.granted) {
          console.log("permissions NOT granted!");
          return;
        }
      }
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.register(token.data);
    } catch (error) {
      console.log("error getting push notification", error);
    }
  };
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addNotificationResponseReceivedListener((noty) =>
      navigation.navigate("Account")
    );
  }, []);
};
