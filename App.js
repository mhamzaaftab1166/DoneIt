import { View } from "react-native";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
      }}
    >
      <ListingDetailScreen></ListingDetailScreen>
      {/* <Card
        title={"Red Jacket For Sale"}
        subTitle={"$10"}
        image={require("./app/assets/jacket.jpg")}
      ></Card>
      <Card
        title={"Red Jacket For Sale"}
        subTitle={"$10"}
        image={require("./app/assets/jacket.jpg")}
      ></Card> */}
    </View>
  );
}
