import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../Shared/StylesColors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light_blue,
    padding: 16,
  },

  profileCard: {
    backgroundColor: "#EAF4FF",
    borderRadius: 20,
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#DDD",
    marginBottom: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#6A1B4D",
  },

  sectionTitle: {
    marginVertical: 10,
    fontSize: 15,
    fontWeight: "700",
    color: "#6A1B4D",
  },
  iconContainer: {
    padding: 10,
    backgroundColor: "#d2b4c5",
    borderRadius: 15,
    //maxWidth: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    // maxWidth: 90,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 4,
    marginBottom: 1,
    elevation: 4,
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  itemSubtitle: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },

  arrow: {
    fontSize: 20,
    color: "#999",
  },

  logout: {
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
  },

  logoutText: {
    color: "#E53935",
    fontWeight: "700",
  },
});
