import React, { useEffect, useState } from "react";
import SafeScreen from "./app/components/SafeScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

function App(props) {
  const [imageUris, setImageUris] = useState([]);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("Yoy need to enable permissons for accessing library!");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <ListingEditScreen />;
}
export default App;
