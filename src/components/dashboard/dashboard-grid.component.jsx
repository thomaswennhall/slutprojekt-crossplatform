import React, { useContext } from "react";
import { FlatGrid } from "react-native-super-grid";
import DashboardItem, { StylingOption } from "@/components/dashboard/dashboard-item";
import { UserContext } from "@/store/userContext";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DashboardGrid = ({ toCategory }) => {
   const { user } = useContext(UserContext);
   const grid = [
      {
         data: {
            button: {
               title: user.tasks ? user.tasks.length : 0,
               onPressHandler: () => {
                  toCategory();
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
         icon: <Icon name="email" style={styles.icon} />,
         stylingOption: {
            background: StylingOption.BACKGROUND_RED,
         },
         data: {
            button: {
               title: "New",
               onPressHandler: () => {
                  alert("Message");
               },
            },
         },
      },
   ];
   return (
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
   );
};

const styles = StyleSheet.create({
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

export default DashboardGrid;
