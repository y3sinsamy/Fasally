import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import Tailors from '../Screens/Tailors'
import Chat from '../Screens/Chat'
import Fabrics from '../Screens/Fabrics'
import { Ionicons } from '@expo/vector-icons';
import Vector from '../assets/Icons/Vector.svg'
import Fabric from '../assets/Icons/Fabric.svg'
import { GlobalStyles } from '../Constants/Styles';
import HomeHeader from '../Components/HomeHeader'
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();





export default function App() {
  return (<>
  <StatusBar style="auto" />
  <HomeHeader />
  <BottomTab.Navigator
  screenOptions={{
    tabBarActiveTintColor: GlobalStyles.colors.dark_purple,
    tabBarInactiveTintColor:  GlobalStyles.colors.gray,
    headerShown: false,
    backgroundColor: GlobalStyles.colors.light_blue
  }}
>

  <BottomTab.Screen name="HomeScreen" component={HomeScreen}
   options={{
    title: 'Home Screen',
    tabBarLabel: 'Home',
    tabBarIcon: ({ size, color }) => (
  <Ionicons name='home' size={size} color={color} />
)}}/>
  <BottomTab.Screen  name="Tailors" component={Tailors} 
  options={{
    title: 'Tailors',
    tabBarLabel: 'Tailors',
     tabBarIcon: ({ size, color }) => (
  <Vector width={size} height={size} fill={color} />
)
}} />
   <BottomTab.Screen  name="Fabrics" component={Fabrics}
    options={{
    title: 'Chat',
    tabBarLabel: 'Chat',
    tabBarIcon: ({ size, color }) => (
  <Fabric width={size} height={size} fill={color} />
)

}}
   />
  <BottomTab.Screen name="Chat" component={Chat} 
  options={{
    title: 'Chat',
    tabBarLabel: 'Chat',
    tabBarIcon:({color, size}) =><Ionicons name="chatbubbles-outline" size={size} color={color} 
    />
    
}}
  />
</BottomTab.Navigator>
       
   <View style={styles.badge}>
               <Text style={styles.badgeText}>+9</Text>
    </View>
  </>
      
  );
}

const styles = StyleSheet.create({
    badge: {
    position: 'absolute',
    bottom: 45,
    right: 20,
    backgroundColor: GlobalStyles.colors.pink,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:3,
  },
    badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
})