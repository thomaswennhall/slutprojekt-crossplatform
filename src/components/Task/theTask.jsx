import React, { useState } from "react";
import {
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
   ScrollView,
   FlatList,
   Image,
} from "react-native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome5";
import IconIonic from "react-native-vector-icons/Ionicons";
import EditTask from "../modal/editTask/editTask";
import NewMessages from "../modal/messages/newMessages";
import UploadImage from "./uploadImg/uploadImg";
import UploadImageComp from "./uploadImg/uploadImg";
const Messages = ({ title, content, date }) => (
   <View style={style.taskMessage}>
      <Text style={style.messageTtile}>{title}</Text>
      <View style={style.messageContentBody}>
         <Text style={style.messageContent}>{content}</Text>
      </View>
      <Text style={style.messageFooter}>{date}</Text>
   </View>
);
const Task = ({ task, toTheTaskList, toTheTaskMessage }) => {
   const [editModal, setEditModal] = useState(false);
   const [newMessagesModal, setNewMessagesModal] = useState(false);
   const [taskTitle, setTaskTitle] = useState("");
   const [taskContent, setTaskContent] = useState("");
   const [taskId, setTaskId] = useState("");
   const toggleEditModal = () => {
      setTaskId(task._id);
      setEditModal(!editModal);
   };
   const toggleNewMessagesModal = () => {
      setTaskId(task._id);
      setNewMessagesModal(!newMessagesModal);
   };
   const splitDateNTime = (dateNTime) => {
      return dateNTime.split("T")[0];
   };
   const renderItem = ({ item }) => (
      <View>
         <Messages
            title={item.title}
            content={item.content}
            date={splitDateNTime(item.createdAt)}
         />
      </View>
   );
   return (
      <View>
         <ScrollView style={style.container}>
            <View style={style.taskHeader}>
               <View style={style.taskTitle}>
                  <Text style={style.title}>{task.title}</Text>
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
                  <TouchableOpacity
                     style={style.shortcut}
                     onPress={() => toggleNewMessagesModal(!newMessagesModal)}
                  >
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
                     <Text style={style.descriptionDate}>
                        {splitDateNTime(task.createdAt)}
                     </Text>
                  </View>
                  <View style={style.descriptionBody}>
                     <Text style={style.descriptionContent}>{task.info}</Text>
                  </View>
                  <View style={style.taskFooter}>
                     <Text style={style.taskClient}>Client: {task.client}</Text>
                  </View>
               </View>
               <View style={style.taskBody}>
                  <View style={style.photoHeader}>
                     <Text style={style.contentTitle}>Photos</Text>
                  </View>
                  {task.image && <Image source={{ uri: task.image }} style={style.img} />}
                  <UploadImage taskId={task._id} />
               </View>
            </View>
         </ScrollView>
         <View style={style.messagesBody}>
            <View style={style.taskBody}>
               <View style={style.photoHeader}>
                  <Text style={style.contentTitle}>Messages</Text>
                  <View style={style.messageContentWrapper}>
                     <FlatList
                        data={task.messages}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                     />
                  </View>
               </View>
               <TouchableOpacity style={style.messageButton} onPress={toTheTaskMessage}>
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>View all</Text>
               </TouchableOpacity>
            </View>
         </View>
         <EditTask
            editModal={editModal}
            toggleEditModal={toggleEditModal}
            taskId={taskId}
            theTaskTitle={taskTitle}
            theTaskContent={taskContent}
            backToTheTask={toTheTaskList}
         />
         <NewMessages
            newMessagesModal={newMessagesModal}
            toggleNewMessagesModal={toggleNewMessagesModal}
            taskId={taskId}
            backToTheTask={toTheTaskList}
         />
      </View>
   );
};

const style = StyleSheet.create({
   container: {
      padding: 32,
      paddingBottom: 0,
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
   // taskContents: { marginBottom: 50 },
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
   messagesBody: {
      padding: 32,
      paddingTop: 0,
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
   img: {
      width: "100%",
      height: 120,
      borderRadius: 8,
      marginBottom: 8,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.9,
      shadowRadius: 4,
   },
});
export default Task;
