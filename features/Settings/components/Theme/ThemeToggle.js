import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ThemeToggle({ selected = "light", onChange }) {
  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: "#C084FC",
        height: 36,
        width: 100, // 👈 ده اللي كان ناقص
      }}
    >
      <Pressable
        onPress={() => onChange("dark")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: selected === "dark" ? "#6B21A8" : "transparent",
        }}
      >
        <Ionicons name="moon" size={14} color="#fff" />
      </Pressable>

      <Pressable
        onPress={() => onChange("light")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: selected === "light" ? "#6B21A8" : "transparent",
        }}
      >
        <Ionicons name="sunny" size={14} color="#fff" />
      </Pressable>
    </View>
  );
}
