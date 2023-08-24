import React from "react";
import { View, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  return (
    <View style={styles.container}>
      {imageUris.map((imageUri) => (
        <View style={styles.image} key={imageUri}>
          <ImageInput
            imageUri={imageUri}
            onSelectImage={() => onRemoveImage(imageUri)}
          />
        </View>
      ))}

      <ImageInput onSelectImage={(uri) => onAddImage(uri)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
export default ImageInputList;
