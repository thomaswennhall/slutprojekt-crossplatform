import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   profileImage: {
      width: 80,
      height: 80,
      borderRadius: 50,
      marginRight: 30,
   },
   profile: {
      display: "flex",
      flexDirection: "row",
      maxWidth: 250,
      alignItems: "center",
      padding: 32,
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
