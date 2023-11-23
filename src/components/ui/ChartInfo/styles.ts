import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 0, // Set borderBottomWidth to 0 for the last block
  },
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    marginLeft: 10,
  },
  monthName: {
    fontSize: 12,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#666",
  },
  chartValue: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
