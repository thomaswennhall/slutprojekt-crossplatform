import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import DashboardItem, { StylingOption } from "@/components/dashboard/dashboard-item";
import DashboardProfile from "@/components/dashboard/profile/profile.component";
import Button from "@/components/base/button.component";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const DashboardScreen = ({ navigation }) => {
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
         data: {
            button: {
               title: user.tasks.length,
               onPressHandler: () => {
                  navigation.navigate("Category");
               },
            },
         },
         title: "Tasks",
         icon: <Icon name="file-document-outline" style={styles.icon} />,
         stylingOption: {
            background: StylingOption.BACKGROUND_BLUE,
         },
      },
      {
         title: "Profile",
         icon: <Icon name="account-circle" style={styles.icon} />,
         data: {
            button: {
               title: "View",
               onPressHandler: () => {
                  navigation.navigate("Profile");
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
         icon: <Icon name="email" style={styles.icon} />,
         stylingOption: {
            background: StylingOption.BACKGROUND_RED,
         },
         data: {
            button: {
               title: "New",
               onPressHandler: () => {
                  navigation.navigate("Task list");
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
         <Button
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
   icon: {
      fontSize: 24,
   },
});

export default DashboardScreen;
