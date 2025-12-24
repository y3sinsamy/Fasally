// Components/ProductCardList/ProductCard.js
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Rating from "../Rating";
import { GlobalStyles } from "../../Constants/Styles";

const CARD_WIDTH = 200;

function ProductCard({ image, index, total }) {
  return (
    <View style={styles.card}>
      
      <View style={styles.imageContainer}>
        <Image source={image.img} style={styles.image} />
        <Text style={styles.imageCounter}>
          {index + 1}/{total}
        </Text>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        Velvet fabric with floral patterns for designs t...
      </Text>

      <View style={styles.colorsContainer}>
        <View style={[styles.colorDot, { backgroundColor: "#840F20" }]} />
        <View style={[styles.colorDot, { backgroundColor: "#2E1FFF" }]} />
        <View style={[styles.colorDot, { backgroundColor: "#00882D" }]} />
      </View>

<View style={styles.PriceAndActions}>

       <View style={styles.priceContainer}>

        <Text style={styles.price}>219.99 EGP/m</Text>
        <Text style={styles.oldPrice}>248.00 EGP/m</Text>
        
      </View>
      <View style={styles.actions}>
          <Pressable>
            <Ionicons name="heart-outline" size={20} color='#fff' />
          </Pressable>
          <Pressable style={styles.actionButton}>
            <Ionicons name="cart-outline" size={20} color="#fff" />
          </Pressable>
      </View>
</View>
     

      <View style={styles.footer}>
        <Rating rating={4} />

        
      </View>
    </View>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    width: CARD_WIDTH+11,
    elevation: 4,
    marginRight: 12, // ✅ مسافة بين الكروت
    
  },
  imageContainer: {
    width: CARD_WIDTH ,
    position: "relative",
  },
  image: {
    width: "95%",
    height: 120,
    borderRadius: 10,
  },
  imageCounter: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#fff",
    fontSize: 12,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  title: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
  },
  colorsContainer: {
    flexDirection: "row",
    marginVertical: 6,
  },
  colorDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 6,
  },
  priceContainer: {
    flexDirection: 'column',
    backgroundColor:'rgba(f, f, f, 1)',
   
  },
  price: {
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 6,
  },
  oldPrice: {
    fontSize: 12,
    color: "gray",
    textDecorationLine: "line-through",
  },
  PriceAndActions:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  actions: {
    flexDirection: "row",
    backgroundColor:GlobalStyles.colors.dark_purple,
    borderRadius:5,
    padding:6

  },
  actionButton: {
    marginLeft: 10,
  },
});
