import { StatusBar } from "expo-status-bar";
import RootNavigator from "../navigation/RootNavigator";
import { GlobalStyles } from "../Shared/StylesColors";
import { StyleSheet, View, Text } from "react-native";
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RootNavigator />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light_blue,
    alignItems: "center",
    justifyContent: "center",
  },
});
