import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { GlobalStyles } from "../Constants/Styles";
import {DATA} from '../Dummy_Data/Data'


function Grid({ item }) {
 
  if (!item || !item.gridImages) {
    return null; // حماية من الكراش
  }

  return (<>
    <View style={styles.grid}>
      {item.gridImages.map((img) => (
        <Image
          key={img.id}
          source={img.img}
          style={styles.gridImage}
        />
      ))}
    </View>
      </>
  );

   
}

export default Grid;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const CARD_HEIGHT = deviceHeight /5
const CARD_WIDTH = deviceWidth / 5;
const styles =StyleSheet.create({
  grid: {
    flexDirection: "row",
    justifyContent: 'space-between',
     //paddingHorizontal: deviceWidth < 380 ? 10 : 15,
   
    
  },
  gridImage: {
    borderRadius: 12,
    borderColor:GlobalStyles.colors.dark_purple,
    borderWidth:2,
    width: CARD_HEIGHT ,
    height:CARD_WIDTH
   
  },
})