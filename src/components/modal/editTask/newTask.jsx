import React, { useState, useContext, useEffect } from "react";
import {
   Modal,
   StyleSheet,
   Text,
   TextInput,
   View,
   Image,
   TouchableOpacity,
} from "react-native";
import * as API from "../../../api/index";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import RNPickerSelect from "react-native-picker-select";
import { AuthContext } from "../../../store/authContext";
import { UserContext } from "../../../store/userContext";
const popUp = ({ sendBack }) => {
   const { token } = useContext(AuthContext);
   const { newTask, setClientList, clients } = useContext(UserContext);
   const [newTaskTitle, addTaskTitle] = useState("");
   const [newTaskContent, addTaskContent] = useState("");
   const [clientId, setClientId] = useState("");
   const postNewTask = async () => {
      await newTask(token, newTaskTitle, newTaskContent, clientId);
      sendBack();
   };
   useEffect(() => {
      const initClients = async () => {
         await setClientList(token);
      };
      initClients();
   }, []);
   return (
      <View style={styles.centeredView}>
         <View style={styles.centeredView}>
            <View style={styles.modalView}>
               <View style={styles.editHeader}>
                  <Text style={styles.editTitle}>{newTaskTitle}</Text>
               </View>
               <View style={styles.editInputs}>
                  <Text style={styles.label}>Title</Text>
                  <TextInput
                     onChangeText={addTaskTitle}
                     value={newTaskTitle}
                     style={styles.taskInput}
                  />
               </View>
               <View style={styles.editInputs}>
                  <Text style={styles.label}>Content</Text>
                  <TextInput
                     multiline={true}
                     numberOfLines={5}
                     onChangeText={addTaskContent}
                     value={newTaskContent}
                     style={styles.taskTextArea}
                  />
               </View>
               <View style={styles.editInputs}>
                  <Text style={styles.label}>Status</Text>
                  <View style={[styles.taskInput, styles.dropdown]}>
                     <RNPickerSelect
                        placeholder={{ label: "--- Option ---" }}
                        onValueChange={(value) => {
                           setClientId(value);
                        }}
                        items={clients.map((client) => ({
                           label: client.username,
                           value: client._id,
                        }))}
                        style={{ ...styles.taskInput }}
                     />
                  </View>
               </View>
               <View style={styles.events}>
                  <TouchableOpacity
                     style={[styles.button, styles.apply]}
                     onPress={() => postNewTask()}
                  >
                     <Text style={styles.textStyle}>Save Task</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.button, styles.discard]}>
                     <Text style={[styles.textStyle, styles.textDiscard]}>
                        Discard task
                     </Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   centeredView: {
      width: "100%",
      marginTop: 16,
      padding: 8,
   },
   modalView: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 32,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 0,
      },
      shadowOpacity: 0.025,
      shadowRadius: 4,
      elevation: 50,
   },
   modalImg: {
      width: "100%",
      marginTop: -10,
      marginBottom: -10,
      padding: 0,
   },
   button: {
      width: "100%",
      marginTop: 8,
      alignSelf: "center",
      borderRadius: 8,
      padding: 12,
      elevation: 2,
   },
   events: {
      marginTop: 20,
   },
   apply: {
      backgroundColor: "#3B3AC9",
   },
   discard: {
      backgroundColor: "#EB6464",
   },
   textDiscard: {
      color: "#fff",
   },
   textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 12,
   },
   editTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
   },
   modalText: {
      fontSize: 12,
      color: "#BABABA",
      marginBottom: 30,
      textAlign: "center",
   },
   editInputs: {
      marginTop: 16,
   },
   taskInput: {
      backgroundColor: "#EDF2FC",
      padding: 16,
      borderRadius: 12,
      marginTop: 8,
      maxHeight: 150,
   },
   taskTextArea: {
      backgroundColor: "#EDF2FC",
      padding: 16,
      borderRadius: 12,
      marginTop: 8,
      height: 100,
   },
   label: {
      color: "#BFBFBF",
   },
});

export default popUp;
