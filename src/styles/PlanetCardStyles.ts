import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 36) / 2; // 2 colonne

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    width: CARD_WIDTH,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
  },
  destroyed: {
    fontSize: 14,
    color: "#ff3b3b",
    fontWeight: "bold",
  },
});