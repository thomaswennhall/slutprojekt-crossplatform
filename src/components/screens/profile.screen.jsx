import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import UpdateProfile from "@/components/updateProfile/update-profile.component";
import DashboardProfile from "@/components/dashboard/profile/profile.component";
import MyProfile from "../profile/profile.component";
const ProfileScreen = () => {
   const user = {
      username: "thomas",
      role: "admin",
   };

   return (
      <SafeAreaView style={styles.container}>
         <DashboardProfile {...user} />
         <MyProfile />
         {/* <UpdateProfile /> */}
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
