import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dashboardItem: {
    minHeight: 130,
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
  colorBlack: {
    color: "#091832",
  },
  dashboardItemHeader: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  dashboardItemText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
  },
  dashboardItemHeaderCenter: {
    marginLeft: 10,
  },
  dashboardItemCount: {
    fontSize: 30,
  },
  wrapCenter: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
});

export default styles;
