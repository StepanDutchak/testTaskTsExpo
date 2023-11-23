import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  rowContainer: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginVertical: 5, // Adjust this value for the desired vertical space
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginVertical: 5, // Adjust this value for the desired vertical space
  },
  keyText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  valueText: {
    fontSize: 16,
    color: "#666",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  closeButton: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
