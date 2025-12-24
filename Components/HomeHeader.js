import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FasallyUser from '../assets/Icons/FasallyUser.svg';
import BellIcon from '../assets/Icons/BellIcon.svg';
import Search from '../assets/Icons/Search.svg'
import { GlobalStyles } from '../Constants/Styles';

export default function HomeHeader() {
  return (
    <View style={styles.header}>

      {/* LEFT ICONS */}
      <View style={styles.left}>
        <Pressable style={styles.iconCircle}>
          <View  style={styles.borders}>
          <FasallyUser width={40} height={40} color= {GlobalStyles.colors.dark_purple} />
          </View>
           </Pressable>

        <View style={styles.notificationWrapper}>
          <Pressable style={styles.iconCircle}>
            <BellIcon  width={28} height={28}  color= {GlobalStyles.colors.dark_purple} />
          </Pressable>

          {/* Badge */}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>+9</Text>
          </View>
        </View>
      </View>

      {/* RIGHT ICON */}
      <Pressable style={styles.searchContainer}>
        <Search width={18} height={18}  color= {GlobalStyles.colors.dark_purple} />
      </Pressable>

    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:GlobalStyles.colors.light_blue,
    paddingHorizontal: 16,
    paddingTop: '8%',
    paddingBottom: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  borders:{
    borderRadius:20,
    borderColor:GlobalStyles.colors.dark_purple,
    borderWidth:1
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  User:{
    width:10,
    height:10,
    borderRadius:20
  },
  
  notificationWrapper: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 3,
    right: 20,
    backgroundColor: GlobalStyles.colors.pink,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:3,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  searchContainer:{
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
