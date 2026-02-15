import { View, Text, Pressable } from "react-native";
import styles from "../../screens/styles";
import ExclamationTriangle from "../../../../assets/Icons/ExclamationTriangle.svg";
import { GlobalStyles } from "../../../../Shared/StylesColors";
import { Ionicons } from "@expo/vector-icons";
export default function ReportProblemItem({ title, onPress }) {
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
            <ExclamationTriangle width={20} height={20} color="#FFF" />
          </View>

          <Text style={styles.itemTitle}>{title}</Text>
        </View>

        {/* Right Side */}
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
