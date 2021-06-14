import React, { useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import DashboardProfile from "@/components/dashboard/profile/profile.component";
import MyProfile from "../../profile/profile.component";
import { UserContext } from "../../../store/userContext";
const ProfileScreen = ({ navigation }) => {
   const { user } = useContext(UserContext);
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
