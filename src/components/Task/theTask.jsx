import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome5";
import IconIonic from "react-native-vector-icons/Ionicons";
import EditTask from "../modal/editTask/editTask";
const task = {
   title: "Do something",
   content:
      "porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet",
   date: "2021-05-27",
   client: "Mooms",
};

const Task = () => {
   const [editModal, setEditModal] = useState(false);
   const toggleEditModal = () => {
      setEditModal(!editModal);
   };
   return (
      <View>
         <ScrollView style={style.container}>
            <View style={style.taskHeader}>
               <View style={style.taskTitle}>
                  <Text style={style.title}>Do something</Text>
               </View>
               <View style={style.bages}>
                  <TouchableOpacity
                     style={style.shortcut}
                     onPress={() => toggleEditModal(!editModal)}
                  >
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
            <View style={style.taskContents}>
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
                  <View style={style.messageContentWrapper}>
                     <View style={style.taskMessage}>
                        <Text style={style.messageTtile}>{task.title}</Text>
                        <View style={style.messageContentBody}>
                           <Text style={style.messageContent}>{task.content}</Text>
                        </View>
                        <Text style={style.messageFooter}>{task.date}</Text>
                     </View>
                     <View style={style.taskMessage}>
                        <Text style={style.messageTtile}>{task.title}</Text>
                        <View style={style.messageContentBody}>
                           <Text style={style.messageContent}>{task.content}</Text>
                        </View>
                        <Text style={style.messageFooter}>{task.date}</Text>
                     </View>
                  </View>
                  <TouchableOpacity style={style.messageButton}>
                     <Text style={{ color: "#fff", fontWeight: "bold" }}>View all</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </ScrollView>
         <EditTask editModal={editModal} toggleEditModal={toggleEditModal} />
      </View>
   );
};

const style = StyleSheet.create({
   container: {
      padding: 32,
      marginBottom: 50,
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
   taskContents: { marginBottom: 50 },
   taskBody: {
      marginTop: 15,
      borderRadius: 8,
      backgroundColor: "#fff",
      padding: 16,
   },
   contentTitle: {
      fontSize: 18,
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
   taskMessage: {
      padding: 12,
      backgroundColor: "#FDF0E9",
      marginTop: 8,
      marginBottom: 8,
      borderRadius: 8,
   },
   messageContentWrapper: {
      marginTop: 16,
   },
   messageTtile: {
      fontSize: 16,
      fontWeight: "bold",
   },
   messageContentBody: {
      marginTop: 8,
      marginBottom: 8,
   },
   messageContent: {
      color: "#404040",
      fontSize: 10,
   },
   messageFooter: {
      fontSize: 12,
      textAlign: "right",
      color: "#7A7A7A",
   },
   messageButton: {
      backgroundColor: "#3B3AC9",
      paddingTop: 8,
      paddingBottom: 8,
      alignItems: "center",
      borderRadius: 6,
      marginTop: 12,
   },
});
export default Task;
