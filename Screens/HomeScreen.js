import { StyleSheet, View, ScrollView } from "react-native";
import Carousel from "../Components/Carousel";
import Grid from '../Components/Grid';
import List from "../Components/ProductCardList/List";
import {DATA} from '../Dummy_Data/Data'
import { GlobalStyles } from "../Constants/Styles";
import HeadLine from '../Components/HeadLine';
import TailorsList from '../Components/TailorCard/TailorList';

function HomeScreen() {
  return (<>
  <ScrollView>
  <View style={styles.container}>
      <Carousel />
      <Grid item={DATA[0]} />
      <HeadLine>
        Best selling
      </HeadLine>
      <List />
      <HeadLine>Nearby tailors</HeadLine>
      <TailorsList />
    </View>
    </ScrollView>
  </>
    
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:GlobalStyles.colors.light_blue,
    paddingBottom:50,
    paddingHorizontal:12
    
  },
});
