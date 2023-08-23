import React, { useEffect, useState } from "react";
import SafeScreen from "./app/components/SafeScreen";
import * as ImagePicker from "expo-image-picker";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";
function App(props) {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("Yoy need to enable permissons for accessing library!");
  };
  useEffect(() => {
    requestPermission();
  }, []);
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.assets[0].uri);
    } catch (error) {
      console.log("error reading an image", error);
    }
  };
  return (
    <SafeScreen>
      <Button title="Select Image" onPress={selectImage}></Button>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )}
      <ImageInput imageUri={imageUri} />
    </SafeScreen>
  );
}
export default App;
