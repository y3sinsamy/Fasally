import { FlatList, Image, StyleSheet, View, Dimensions } from "react-native";
import { useState } from "react";
import { DATA } from "../Dummy_Data/Data";
import ProductCard from "./ProductCardList/ProductCard";
import { GlobalStyles } from "../Constants/Styles";



function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>

          {/* ---------- Horizontal Carousel ---------- */}
          <FlatList
            data={item.horizontalImages}
            keyExtractor={(img) => img.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => {
              const index = Math.round(
                event.nativeEvent.contentOffset.x / SCREEN_WIDTH
              );
              setActiveIndex(index);
            }}
            renderItem={({ item }) => (
              <Image source={item.img} style={styles.horizontalImage} />
            )}
          />

          {/* ---------- Pagination Dots ---------- */}
          <View style={styles.dotsContainer}>
            {item.horizontalImages.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  activeIndex === index && styles.activeDot,
                ]}
              />
            ))}
          </View>
        </View>
        
      )}
    />
  );
}

export default Carousel;
const SCREEN_WIDTH = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },

  horizontalImage: {
    width: SCREEN_WIDTH-23,
    height: 230,
    resizeMode: "cover",
    borderRadius:12
  },

  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#7b2cbf",
  },

});
