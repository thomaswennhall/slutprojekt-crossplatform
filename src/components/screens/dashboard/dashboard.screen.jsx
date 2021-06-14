import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import DashboardProfile from "@/components/dashboard/profile/profile.component";
import Action from "@/components/button/button.component";
import DashboardGrid from "@/components/dashboard/dashboard-grid.component";

import { AuthContext } from "@/store/authContext";
import { UserContext } from "@/store/userContext";

const DashboardScreen = ({ navigation }) => {
   const { token, clearToken } = useContext(AuthContext);

   const { user, setUserProfile, clearUser } = useContext(UserContext);

   useEffect(() => {
      const setProfile = async () => {
         await setUserProfile(token);
      };

      setProfile();

      return () => {
         clearUser();
         clearToken();
      };
   }, []);

   const navigateToCategory = () => {
      navigation.navigate("Category");
   };
   const navigateToProfile = () => {
      navigation.navigate("Profile");
   };
   const logoutHandler = () => {
      navigation.goBack();
   };

   return (
      <View style={styles.container}>
         <DashboardProfile username={user.username} role={user.role} />
         <DashboardGrid
            user={user}
            toCategory={navigateToCategory}
            toProfile={navigateToProfile}
         />
         <Action
            text={"SIGN OUT"}
            color={"lightRed"}
            logoutButton={true}
            pressHandler={logoutHandler}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "space-between",
      paddingVertical: 20,
   },
   overViewHeader: {
      display: "flex",
      flexDirection: "row",
   },

   overViewGrid: {
      flexGrow: 0,
   },
   overViewText: {
      fontWeight: "bold",
      fontSize: 30,
      color: "#2B2B2B",
      marginBottom: 15,
      marginLeft: 25,
   },
   icon: {
      fontSize: 24,
   },
});

export default DashboardScreen;
