import React from "react";
import { View, StyleSheet, Keyboard, Alert } from "react-native";
import messagesApi from "../../api/messages";
import * as Notifications from "expo-notifications";
import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
import SubmitButton from "./SubmitButton";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  message: Yup.string().label("Message"),
});
function ContactSellerForm({ listing }) {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  const scheduleLocalNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome",
        body: "Your message sent to the seller!",
      },
      trigger: null,
    });
  };

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);
    if (!result.ok) {
      console.log("error", result);
      return Alert.alert("error", "could not send message");
    }

    resetForm();

    scheduleLocalNotification();
  };
  return (
    <View>
      <AppForm
        initialValues={{ message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          multiline
          name="message"
          placeholder="Message..."
        />
        <SubmitButton title="Contact Seller" />
      </AppForm>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default ContactSellerForm;
