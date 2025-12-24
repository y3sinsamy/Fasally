import { StyleSheet, View } from "react-native";
import Carousel from "../Components/Carousel";
import List from "../Components/ProductCardList/List";
import { GlobalStyles } from "../Constants/Styles";

function HomeScreen() {
  return (<>
  <View style={styles.container}>
      <Carousel />
      <List />
    </View>
  </>
    
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:GlobalStyles.colors.light_blue
  },
});
