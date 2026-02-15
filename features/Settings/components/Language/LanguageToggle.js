import { View, Text, Pressable } from "react-native";
import Arabicicon from "../../../../assets/Icons/Arabicicon.svg";

export default function LanguageToggle({ selected = "en", onChange }) {
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
        onPress={() => onChange("en")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: selected === "en" ? "#6B21A8" : "transparent",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>En</Text>
      </Pressable>

      <Pressable
        onPress={() => onChange("ar")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: selected === "ar" ? "#6B21A8" : "transparent",
        }}
      >
        <Arabicicon width={18} height={18} color="#fff" />
      </Pressable>
    </View>
  );
}
