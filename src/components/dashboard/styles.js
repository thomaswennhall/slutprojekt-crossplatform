import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dashboardItem: {
    height: 120,
    display: "flex",
    padding: 10,
  },
  backgroundBlue: {
    backgroundColor: "#3C40C6",
    borderRadius: 10,
  },
  backgroundYellow: {
    backgroundColor: "#FFCA36",
    borderRadius: 10,
  },
  backgroundRed: {
    backgroundColor: "#FF365A",
    borderRadius: 10,
  },
  dashboardItemHeader: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  dashboardItemText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  dashboardItemHeaderCenter: {
    alignSelf: "center",
    flexGrow: 1,
  },
  dashboardItemCount: {
    fontSize: 22,
  },
  wrapCenter: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
});

export default styles;
