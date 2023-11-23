import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
  },
  content: {
    marginTop: 12,
    paddingHorizontal: 12,
  },
  cardContent: {
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
  },
  rowContainer: {
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginVertical: 0,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginVertical: 5, // Adjust this value for the desired vertical space
  },
  lastElement: {
    marginBottom: 0,
    borderBottomWidth: 0,
  },
  topContainer: {
    padding: 15,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 1,
  },
  topText: {
    fontWeight: "bold",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  helpContainer: {
    marginTop: 12,
    backgroundColor: "white",
  },
  keyText: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#333",
  },
  valueText: {
    fontSize: 14,
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
