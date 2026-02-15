import { View, Text, Pressable } from "react-native";
import styles from "../../screens/styles";
import UserVector from "../../../../assets/Icons/UserVector.svg";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../../../Shared/StylesColors";
export default function Update({ title, subtitle, onPress }) {
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side (Icon + Title) */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.iconContainer}>
            <UserVector width={20} height={20} color="#FFF" />
          </View>

          <Text style={styles.itemTitle}>{title}</Text>
          {/** 
          {subtitle && (
            <Text
              style={{
                fontSize: 12,
                color: "#888",
                marginTop: 4,
              }}
            >
              {subtitle}
            </Text>
          )}*/}
        </View>

        {/* Right Side  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: GlobalStyles.colors.dark_purple,
            borderRadius: 30,
          }}
        >
          <Ionicons name="chevron-forward" size={18} color="#ffffff" />
        </View>
      </View>
    </Pressable>
  );
}
