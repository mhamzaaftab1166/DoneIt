import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function App(props) {
  const demo = async () => {
    try {
      // await AsyncStorage.setItem("person", JSON.stringify({ name: "hamza" }));
      const value = await AsyncStorage.getItem("person");
      const peron = JSON.parse(value);
      console.log(peron);
    } catch (error) {
      console.log(error);
    }
  };
  demo();
  return null;
}

export default App;
