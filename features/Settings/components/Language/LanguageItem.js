import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "../../screens/styles";
import LanguageToggle from "./LanguageToggle";
import LanguageVector from "../../../../assets/Icons/LanguageVector.svg";

export default function LanguageItem({ title, onPress }) {
  const [selected, setSelected] = useState("en");

  const handleChange = (lang) => {
    setSelected(lang);
    if (typeof onPress === "function") {
      onPress(lang);
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
            flex: 1, // 👈 مهم جدًا عشان يسيب مساحة للـ toggle
          }}
        >
          <View style={styles.iconContainer}>
            <LanguageVector width={20} height={20} color="#FFF" />
          </View>

          <Text style={[styles.itemTitle, { marginLeft: 10 }]}>{title}</Text>
        </View>

        {/* Right Side */}
        <LanguageToggle selected={selected} onChange={handleChange} />
      </View>
    </View>
  );
}
