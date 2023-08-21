import React from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";
import SafeScreen from "../components/SafeScreen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import SubmitButton from "../components/forms/SubmitButton";

const validationSchema = Yup.object({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().nullable().required().label("Category"),
});
const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Camera",
    value: 3,
  },
];
function ListingEditScreen(props) {
  return (
    <SafeScreen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name={"title"} maxLength={225} placeholder={"Title"} />
        <AppFormField
          keyboardType={"numeric"}
          maxLength={8}
          name={"price"}
          placeholder={"Price"}
          width={120}
        />
        <AppFormPicker
          items={categories}
          name={"category"}
          placeholder={"Category"}
          width={"50%"}
        />
        <AppFormField
          maxLength={225}
          multiline
          numberOfLines={3}
          name={"description"}
          placeholder={"Decriptions"}
        />
        <SubmitButton title={"Post"} />
      </AppForm>
    </SafeScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
