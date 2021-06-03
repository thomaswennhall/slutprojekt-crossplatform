import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import Logo from "@/components/logo/logo.component";

import Login from "@/components/login/login.component";
const landingScreen = ({ navigation }) => {
   const toDashboard = () => {
      navigation.navigate("Dashboard");
   };
   return (
      <SafeAreaView style={styles.container}>
         <Logo />
         <Login toDashboard={toDashboard} />
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-evenly",
      height: "100%",
   },
});

export default landingScreen;
