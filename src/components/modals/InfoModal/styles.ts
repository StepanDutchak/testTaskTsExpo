import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    alignItems: "center",
    padding: 16,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#ccc",
    borderRadius: 2,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  rowContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  keyText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  valueText: {
    fontSize: 16,
  },
});
