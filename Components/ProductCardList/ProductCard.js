// Components/ProductCardList/ProductCard.js
import { View, Text, StyleSheet, Image, Pressable, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Rating from "../Rating";
import { GlobalStyles } from "../../Constants/Styles";


function ProductCard({ image, index, total }) {
  return (<>
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
     <View style={styles.footer}><Rating rating={4} /></View>
    </View>
      </>
  );
}

export default ProductCard;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const CARD_HEIGHT = deviceHeight /7.5
const CARD_WIDTH = deviceWidth / 2.5;
//const scale = deviceWidth / 35;

const styles = StyleSheet.create({
    
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal:2,
    paddingTop:2,
    width: CARD_WIDTH,
    elevation: 4,
   // marginLeft: 10,
    marginRight: '1%',
    marginBottom:'5%',
    
  },
  imageContainer: {
    width: '99%',
    position: "relative",
  },
  image: {
    width: CARD_WIDTH - 5 ,
    height: CARD_HEIGHT,
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
    fontSize: 12,
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
   // marginRight: 6,
  },
  oldPrice: {
    fontSize: 12,
    color: "gray",
    textDecorationLine: "line-through",
  },
  PriceAndActions:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    //paddingHorizontal:2,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 7,
    marginBottom:9
  },
  actions: { //////////eding here
    flexDirection: "row",
    backgroundColor:GlobalStyles.colors.dark_purple,
    borderRadius:5,
    padding:5
  },
  actionButton: {
    marginLeft: 10,
  },
});
