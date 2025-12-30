import { FlatList } from "react-native";
import TailorCard from "./TailorCard";
import { TAILORS } from "../../Dummy_Data/TailorsData";

function TailorsList() {
  return (
    <FlatList
      data={TAILORS}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TailorCard item={item} />}
    />
  );
}

export default TailorsList;
