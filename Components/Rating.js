
import { View, Pressable, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useRef } from "react";
// maxStars: عدد النجوم (افتراضي = 5)
function Rating({ maxStars = 5 }) {

  // -----------------------
  // State لتخزين عدد النجوم المتلونة
  // -----------------------
  // rating = القيمة الحالية للتقييم
  // setRating = لتغيير قيمة التقييم
  const [rating, setRating] = useState(0);

  // Animation Value
  
  // scaleAnim مسؤولة عن تكبير وتصغير النجمة
  // useRef علشان القيمة تفضل ثابتة بين الـ renders
  const scaleAnim = useRef(new Animated.Value(1)).current;


  // دالة الأنيميشن
  
  // بتعمل حركة بسيطة (تكبير ثم رجوع للحجم الطبيعي)
  function animateStar() {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.25,        // تكبير النجمة
        duration: 120,        // مدة الحركة
        useNativeDriver: true // أداء أفضل
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,           // الرجوع للحجم الطبيعي
        duration: 120,
        useNativeDriver: true
      }),
    ]).start();
  }

  // دالة الضغط على النجمة
 
  // starNumber = رقم النجمة اللي اتضغط عليها
  function handlePress(starNumber) {
    setRating(starNumber); // تحديث التقييم
    animateStar();         // تشغيل الأنيميشن
  }


  return (
    // View رئيسية لعرض النجوم جنب بعض
    <View style={{ flexDirection: "row" }}>

      {/* إنشاء النجوم باستخدام loop */}
      {Array.from({ length: maxStars }, (_, index) => {

        // رقم النجمة (يبدأ من 1)
        const starNumber = index + 1;

        return (
          // Animated.View علشان نطبق الأنيميشن على النجمة
          <Animated.View
            key={starNumber}
            style={{ transform: [{ scale: scaleAnim }] }}
          >
            {/* Pressable علشان النجمة تبقى قابلة للضغط */}
            <Pressable onPress={() => handlePress(starNumber)}>
              <Ionicons
                // لو رقم النجمة أقل أو يساوي rating → نجمة متلونة
                // غير كده → نجمة فاضية
                name={starNumber <= rating ? "star" : "star-outline"}
                size={24}        
                color="gold"     
              />
            </Pressable>
          </Animated.View>
        );
      })}
    </View>
  );
}

export default Rating;
