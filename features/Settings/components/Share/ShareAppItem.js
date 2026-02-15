import { View, Text, Pressable } from "react-native";
import styles from "../../screens/styles";
import ShareVector from "../../../../assets/Icons/ShareVector.svg";
export default function ShareAppItem({ title, onPress }) {
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
            <ShareVector width={20} height={20} color="#FFF" />
          </View>

          <Text style={styles.itemTitle}>{title}</Text>
        </View>

        {/* Right Side */}
      </View>
    </Pressable>
  );
}
