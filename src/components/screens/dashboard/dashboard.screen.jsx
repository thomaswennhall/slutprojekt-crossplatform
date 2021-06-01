import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import DashboardItem, { StylingOption } from "@/components/dashboard/dashboard-item";
import DashboardProfile from "@/components/dashboard/profile/profile.component";
import Action from "@/components/button/button.component";

const DashboardScreen = () => {
   const [user, setUser] = useState({
      username: "Test-User",
      role: "worker",
      image: "https://via.placeholder.com/150",
      tasks: [{}, {}, {}],
   });

   const logoutHandler = () => {
      console.log("logging out");
   };

   const grid = [
      {
         data: user.tasks.length,
         title: "Tasks",
         icon: "i",
         stylingOption: {
            background: StylingOption.BACKGROUND_BLUE,
         },
      },
      {
         title: "Profile",
         icon: "i",
         data: {
            button: {
               title: "View",
               onPressHandler: () => {
                  console.log("Profile on press");
               },
            },
         },
         stylingOption: {
            background: StylingOption.BACKGROUND_YELLOW,
            color: StylingOption.COLOR_BLACK,
         },
      },
      {
         title: "Messages",
         icon: "i",
         stylingOption: {
            background: StylingOption.BACKGROUND_RED,
         },
         data: {
            button: {
               title: "New",
               onPressHandler: () => {
                  console.log("Messages on press");
               },
            },
         },
      },
   ];

   return (
      <View style={styles.container}>
         <DashboardProfile {...user} />
         <View>
            <Text style={styles.overViewText}>Overview</Text>
            <FlatGrid
               itemDimension={120}
               data={grid}
               spacing={15}
               renderItem={({ item }) => <DashboardItem {...item} />}
               style={styles.overViewGrid}
            />
         </View>
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
});

export default DashboardScreen;
