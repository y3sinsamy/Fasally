import { Text, View, StyleSheet } from "react-native";

function HeadLine({children}){
    return(<>
     <View style={styles.textContainer}>
            <Text style={styles.text} >
                {children}
            </Text>
        </View>
    </>)
}

export default HeadLine;
const styles = StyleSheet.create({
  
    textContainer:{
        paddingVertical:'1%'
    },
    text:{
        fontSize:24,
        fontWeight:'bold'
    },
})