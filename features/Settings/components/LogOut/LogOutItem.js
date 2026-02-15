import { View, Text, Pressable } from "react-native";
import styles from "../../screens/styles";
import SignOut from "../../../../assets/Icons/SignOut.svg";
export default function LogOutItem({ title, onPress }) {
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
          <View
            style={[styles.iconContainer, { backgroundColor: "#FF7700B2" }]}
          >
            <SignOut width={20} height={20} color="#FFF" />
          </View>

          <Text style={styles.itemTitle}>{title}</Text>
        </View>

        {/* Right Side */}
      </View>
    </Pressable>
  );
}
