import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: "#f2f2f2" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff8a00",
    textAlign: "center",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 14,
  },
  noResults: {
    textAlign: "center",
    color: "#999",
    marginBottom: 10,
  },
  item: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 2,
    fontSize: 16,
  },
});