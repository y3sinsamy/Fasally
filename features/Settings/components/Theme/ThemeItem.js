import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "../../screens/styles";
import ThemeToggle from "./ThemeToggle";
import ThemeMood from "../../../../assets/Icons/ThemeMood.svg";

export default function ThemeItem({ title, onPress }) {
  const [selected, setSelected] = useState("dark");

  const handleChange = (mode) => {
    setSelected(mode);
    if (typeof onPress === "function") {
      onPress(mode);
    }
  };

  return (
    <View style={styles.item}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1, // 👈 مهم عشان يسيب مساحة للـ toggle
          }}
        >
          <View style={styles.iconContainer}>
            <ThemeMood width={20} height={20} color="#FFF" />
          </View>

          <Text style={[styles.itemTitle, { marginLeft: 10 }]}>{title}</Text>
        </View>

        {/* Right Side */}
        <ThemeToggle selected={selected} onChange={handleChange} />
      </View>
    </View>
  );
}
