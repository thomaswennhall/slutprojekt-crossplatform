import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import DashboardProfile from "@/components/dashboard/profile/profile.component";
import MyProfile from "../../profile/profile.component";
const ProfileScreen = ({ navigation }) => {
   const user = {
      username: "thomas",
      role: "admin",
   };
   const toUpdateProfile = () => {
      navigation.navigate("Edit profile");
   };
   return (
      <SafeAreaView style={styles.container}>
         <DashboardProfile {...user} />
         <MyProfile toUpdateProfile={toUpdateProfile} />
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
