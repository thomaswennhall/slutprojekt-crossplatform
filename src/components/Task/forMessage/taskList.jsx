import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import { UserContext } from "../../../store/userContext";
import { AuthContext } from "../../../store/authContext";
import NewMessageModal from "../../modal/messages/newMessages";
import { useState } from "react/cjs/react.development";
const ItemTitle = ({ title, date, onPress }) => (
   <TouchableOpacity onPress={onPress} style={style.task}>
      <Text style={style.taskTitle}>{title}</Text>
   </TouchableOpacity>
);
const TaskList = ({ backToTheDashboard }) => {
   const { user } = useContext(UserContext);
   const { token } = useContext(AuthContext);
   const [newMessagesModal, setNewMessagesModal] = useState(false);
   const [taskId, setTaskId] = useState("");
   const toggleNewMessagesModal = (taskId) => {
      setTaskId(taskId);
      setNewMessagesModal(!newMessagesModal);
   };
   const renderItem = ({ item, index }) => {
      return (
         <View>
            <ItemTitle
               title={item.title}
               onPress={() => toggleNewMessagesModal(item._id)}
            />
         </View>
      );
   };
   return (
      <View style={style.container}>
         <FlatList
            data={user.tasks}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
         />
         <NewMessageModal
            newMessagesModal={newMessagesModal}
            toggleNewMessagesModal={toggleNewMessagesModal}
            taskId={taskId}
            backToTheTask={backToTheDashboard}
         />
      </View>
   );
};

const style = StyleSheet.create({
   container: {
      padding: 32,
   },
   task: {
      padding: 16,
      height: 72,
      backgroundColor: "#ffffff",
      borderRadius: 8,
      marginBottom: 16,
   },
   taskTitle: {
      fontWeight: "bold",
   },
   taskDate: {
      fontSize: 8,
   },
});
export default TaskList;
