import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import DashboardProfile from "../../dashboard/profile/profile.component";
import EditProfile from "../../updateProfile/update-profile.component";
const ProfileScreen = ({ navigation }) => {
   const user = {
      username: "thomas",
      role: "admin",
   };
   return (
      <SafeAreaView style={styles.container}>
         <DashboardProfile {...user} />
         <EditProfile />
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
   },
});

export default ProfileScreen;
