import React, { useEffect, useState } from "react";
import SafeScreen from "./app/components/SafeScreen";
import * as ImagePicker from "expo-image-picker";
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

  return (
    <SafeScreen>
      <ImageInput
        imageUri={imageUri}
        onSelectImage={(uri) => setImageUri(uri)}
      />
    </SafeScreen>
  );
}
export default App;
