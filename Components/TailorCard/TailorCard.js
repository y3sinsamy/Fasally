import { View, Text, StyleSheet, Image, Pressable, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Rating from "../Rating";
import { GlobalStyles } from "../../Constants/Styles";
function TailorCard({ item }) {

  /*function renderStars(rate) {
    return [...Array(5)].map((_, index) => (
      <Ionicons
        key={index}
        name={index < rate ? "star" : "star-outline"}
        size={14}
        color="#6A1B4D"
      />
    ));
  }*/ // for future use 

  return (
    <Pressable style={styles.card}>
      {/* Image */}
      <View style={styles.imageContainer}>
        {item.image ? (
          <Image source={item.image } style={styles.image} />
        ) : (
          <Image source={require('../../assets/ADVs/nullPhoto.png')} style={styles.image} />
        )}
      </View>

      {/* Name */}
      <Text style={styles.name}>{item.name}</Text>

      {/* Description */}
      <Text style={styles.desc} numberOfLines={2}>
        {item.description}
      </Text>

      {/* Tags */}
      <View style={styles.tagsContainer}>
        {item.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      {/* Rating */}
      <View style={styles.ratingContainer}>
       {/*  <View style={styles.stars}>{renderStars(item.rating)}</View>*/}
       <View style={styles.footer}><Rating rating={4} /></View>
        <Text style={styles.reviewText}>({item.reviews})</Text>
      </View>
    </Pressable>
  );
}

export default TailorCard;
const deviceWidth = Dimensions.get('window').width;
const cardWidth = deviceWidth / 2 - 30; // considering horizontal margins and gaps
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  card: {
  width: cardWidth >= 176? cardWidth: 176,
  // height:deviceHeight/4.5  ,
  backgroundColor: "#fff",
  borderRadius: 16,
  padding: 10,
  marginRight: 10,
  marginTop: 67,      // مساحة للصورة
  elevation: 4,
  position: "relative", //  مهم
  paddingTop: 55,
 marginBottom:20,
 borderColor: GlobalStyles.colors.dark_purple,
 borderWidth:2
 
  },
  imageContainer: {
  width: 102,
  height: 102,
  borderRadius: "50%",
  borderColor: "#0000",
  borderTopColor: "#6A1B4D",
  borderRightColor: "#6A1B4D",
  borderWidth: 2,
  justifyContent: "center",
  alignItems: "center",
  padding: 2,
  position: "absolute", //  هنا السحر
  top: -1,             // نص الصورة برا الكارد
  transform: "translateY(-50%), rotate(-45deg)", // Make it dynamic to reposition the img even if its dimensions changed
  alignSelf: "center",
  backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    transform: "rotate(45deg)",
    // zIndex: 10,
    // elevation: 6,
    // resizeMode:'contain'
    //marginBottom:5
  },
  name: {
    textAlign: "center",
    fontWeight: 600,
    color: "#6A1B4D",
    fontSize: 20,
    marginBottom: 3,
    marginTop: 0
  },
  desc: {
    textAlign: "center",
    fontSize: 12,
    color: "#777",
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: '6%',
  },
  tag: {
    backgroundColor: "#F3E5F5",
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 12,
  },
  tagText: {
    fontSize: 10,
    color: "#6A1B4D",
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  stars: {
    flexDirection: "row",
  },
  reviewText: {
    fontSize: 12,
    color: "#777",
    //marginTop: 6,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //marginTop: 6,
  },
});
