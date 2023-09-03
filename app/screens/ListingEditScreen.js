import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";
import SafeScreen from "../components/SafeScreen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import SubmitButton from "../components/forms/SubmitButton";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";
import litingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().nullable().required().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});
const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen(props) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  const handleSubmit = async (listing) => {
    setVisible(true);
    setProgress(0);
    const result = await litingsApi.addListing(
      { ...listing, location },
      (progress) => {
        console.log(progress);
        setProgress(progress);
      }
    );

    if (!result.ok) {
      setVisible(false);
      return alert("Couldn't Save Listing");
    }
  };
  return (
    <SafeScreen style={styles.container}>
      <UploadScreen
        onDone={() => setVisible(false)}
        progress={progress}
        visible={visible}
      />
      <AppForm
        initialValues={{
          images: [],
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name={"images"} />
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
          numColumns={3}
          PickerItemComponent={CategoryPickerItem}
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
