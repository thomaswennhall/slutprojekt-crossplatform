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
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import RNPickerSelect from "react-native-picker-select";
import { UserContext } from "../../../store/userContext";
import { AuthContext } from "../../../store/authContext";
const statusData = ["Completed", "Not Completed"];

const popUp = ({
   editModal,
   toggleEditModal,
   taskId,
   theTaskTitle,
   theTaskContent,
   backToTheTask,
}) => {
   const { editTask } = useContext(UserContext);
   const { token } = useContext(AuthContext);
   const [taskTitle, editTaskTitle] = useState(theTaskTitle);
   const [taskContent, editTaskContent] = useState(theTaskContent);
   const [taskStatus, setSelectedStatus] = useState(false);
   useEffect(() => {
      editTaskContent(theTaskContent);
      editTaskTitle(theTaskTitle);
   }, [theTaskContent, theTaskTitle]);
   const editTheTask = async () => {
      await editTask(token, taskId, taskTitle, taskContent, taskStatus);
      backToTheTask();
   };
   return (
      <TouchableOpacity onPress={() => toggleEditModal(!editModal)}>
         <Modal animationType="slide" transparent={true} visible={editModal}>
            <View style={styles.centeredView}>
               <View style={styles.modalView}>
                  <View style={styles.editHeader}>
                     <Text style={styles.editTitle}>Edit</Text>
                  </View>
                  <View style={styles.editInputs}>
                     <Text style={styles.label}>Title</Text>
                     <TextInput
                        onChangeText={editTaskTitle}
                        value={taskTitle}
                        defaultValue={theTaskTitle}
                        style={styles.taskInput}
                     />
                  </View>
                  <View style={styles.editInputs}>
                     <Text style={styles.label}>Content</Text>
                     <TextInput
                        multiline={true}
                        numberOfLines={5}
                        onChangeText={editTaskContent}
                        value={taskContent}
                        defaultValue={theTaskContent}
                        style={styles.taskTextArea}
                     />
                  </View>
                  <View style={styles.editInputs}>
                     <Text style={styles.label}>Status</Text>
                     <View style={[styles.taskInput, styles.dropdown]}>
                        <RNPickerSelect
                           placeholder={{ label: "--- Option ---" }}
                           onValueChange={(value) => {
                              setSelectedStatus(value);
                           }}
                           items={[
                              { label: "Completed", value: true },
                              { label: "Not completed", value: false },
                           ]}
                           style={{ ...styles.taskInput }}
                        />
                     </View>
                  </View>
                  <View style={styles.events}>
                     <TouchableOpacity
                        style={[styles.button, styles.apply]}
                        onPress={() => editTheTask()}
                     >
                        <Text style={styles.textStyle}>Apply change</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                        style={[styles.button, styles.discard]}
                        onPress={() => toggleEditModal(!editModal)}
                     >
                        <Text style={[styles.textStyle, styles.textDiscard]}>
                           Discard change
                        </Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         </Modal>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   centeredView: {
      padding: 24,
      flex: 1,
      justifyContent: "center",
      backgroundColor: "rgba(52, 52, 52, 0.8)",
   },
   modalView: {
      width: "100%",
      backgroundColor: "white",
      borderRadius: 20,
      padding: 32,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
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
