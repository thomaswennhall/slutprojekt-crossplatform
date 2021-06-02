import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  header: {
    minWidth: "80%",
    marginVertical: 20,
  },
  headerText: {
    color: "#2B2B2B",
    fontSize: 25,
    fontWeight: "bold",
  },
  messageWrapper: {
    backgroundColor: "#fff",
    display: "flex",
    minWidth: "100%",
  },
  messageContainer: {
    padding: 20,
    borderBottomColor: "#eee",
    borderBottomWidth: 2,
    display: "flex",
    justifyContent: "space-between",
  },
  messageAuthor: {
    // color: "#7A7A7A",
    fontWeight: "bold",
    color: "#eee",
  },
  messageContent: {
    marginVertical: 10,
    fontSize: 16,
    color: "#222",
    fontWeight: "600",
  },
  message: {
    padding: 20,
    display: "flex",
    // backgroundColor: "#FDF0E9",
    backgroundColor: "#3B3AC9",
    justifyContent: "space-evenly",
    borderRadius: 6,
  },
  messageTitle: {
    fontWeight: "bold",
    color: "#222",
    fontSize: 18,
  },
  alignRight: {
    alignSelf: "flex-end",
  },
  messageDate: {
    color: "#7A7A7A",
    fontWeight: "bold",
    // color: "#eee",
  },
  colorOwner: {
    color: "#222",
  },
  messageOwner: {
    backgroundColor: "#FFCA36",
  },
});

export default styles;
