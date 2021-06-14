import React, { useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import DashboardProfile from "../../dashboard/profile/profile.component";
import EditProfile from "../../updateProfile/update-profile.component";
import { UserContext } from "../../../store/userContext";
const ProfileScreen = ({ navigation }) => {
   const { user } = useContext(UserContext);
   const backToProfile = () => {
      navigation.navigate("Profile");
   };
   return (
      <SafeAreaView style={styles.container}>
         <DashboardProfile {...user} />
         <EditProfile userInfo={user} backToProfile={backToProfile} />
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
