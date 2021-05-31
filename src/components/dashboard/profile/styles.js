import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    maxWidth: 250,
    alignItems: "center",
  },
  profileRole: {
    fontSize: 16,
  },
  profileHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
