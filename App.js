import React, { useEffect, useState } from "react";
import SafeScreen from "./app/components/SafeScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

function App(props) {
  const [imageUris, setImageUris] = useState([]);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("Yoy need to enable permissons for accessing library!");
  };

  useEffect(() => {
    requestPermission();
  }, []);
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };
  return (
    <SafeScreen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </SafeScreen>
  );
}
export default App;
