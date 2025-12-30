import { DATA } from "../../Dummy_Data/Data";
import { FlatList, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";
function List() {
  const images = DATA[0]?.cardImages ?? [];

  if (images.length === 0) {
    return null;
  }

  return (
    <FlatList
      data={images}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <ProductCard
          image={item}
          index={index}
          total={images.length}
  
        />
      )}
    />
  );
}
export default List;

