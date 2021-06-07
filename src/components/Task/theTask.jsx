import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome5";
import IconIonic from "react-native-vector-icons/Ionicons";
const task = {
   title: "Do something",
   content:
      "porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet",
   date: "2021-05-27",
   client: "Mooms",
};
const Task = () => {
   return (
      <View style={style.container}>
         <View style={style.taskHeader}>
            <View style={style.taskTitle}>
               <Text style={style.title}>Do something</Text>
            </View>
            <View style={style.bages}>
               <TouchableOpacity style={style.shortcut}>
                  <View style={style.shortcutFrame}>
                     <IconFontAwesome name="pen" style={style.shortcutIcon} />
                  </View>
               </TouchableOpacity>
               <TouchableOpacity style={style.shortcut}>
                  <View style={style.shortcutFrame}>
                     <IconIonic name="md-mail" style={style.shortcutIcon} />
                  </View>
               </TouchableOpacity>
            </View>
         </View>
         <View style={style.taskBody}>
            <View style={style.descriptionHeader}>
               <Text style={style.contentTitle}>{task.title}</Text>
               <Text style={style.descriptionDate}>{task.date}</Text>
            </View>
            <View style={style.descriptionBody}>
               <Text style={style.descriptionContent}>{task.content}</Text>
            </View>
            <View style={style.taskFooter}>
               <Text style={style.taskClient}>Client: {task.client}</Text>
            </View>
         </View>
         <View style={style.taskBody}>
            <View style={style.photoHeader}>
               <Text style={style.contentTitle}>Photos</Text>
            </View>
         </View>
         <View style={style.taskBody}>
            <View style={style.photoHeader}>
               <Text style={style.contentTitle}>Messages</Text>
            </View>
         </View>
      </View>
   );
};

const style = StyleSheet.create({
   container: {
      padding: 32,
   },
   taskHeader: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
   },
   title: {
      fontSize: 22,
      fontWeight: "bold",
   },
   taskTitle: {
      width: "70%",
   },
   shortcut: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#091832",
      width: 40,
      height: 40,
      borderRadius: 8,
   },
   bages: {
      width: "30%",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
   },
   shortcutFrame: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: 24,
      height: 24,
      borderRadius: 4,
   },
   shortcutIcon: {
      fontSize: 16,
      marginTop: 1,
      marginRight: -0.5,
      color: "#091832",
   },
   taskBody: {
      marginTop: 30,
      borderRadius: 8,
      backgroundColor: "#fff",
      padding: 16,
   },
   contentTitle: {
      fontWeight: "bold",
   },
   descriptionDate: {
      fontSize: 10,
      color: "#727272",
   },
   descriptionBody: {
      marginTop: 24,
      marginBottom: 24,
   },
   descriptionContent: {
      fontSize: 10.5,
      color: "#A3A3A3",
      letterSpacing: 0.05,
   },
   taskClient: {
      fontSize: 10,
      color: "#727272",
   },
});
export default Task;
