import React, { useContext } from "react";
import { View, Text } from "react-native";
import Task from "../../Task/theTask";
import { UserContext } from "../../../store/userContext";
const TaskScreen = ({ route, navigation }) => {
   const { id } = route.params;
   const { findTaskById } = useContext(UserContext);
   const task = findTaskById(id);
   const toTaskList = () => {
      navigation.navigate("Task list");
   };
   const toTaskMessages = () => {
      navigation.navigate("Messages", { taskId: id });
   };
   return (
      <View>
         <Task task={task} toTheTaskList={toTaskList} toTheTaskMessage={toTaskMessages} />
      </View>
   );
};

export default TaskScreen;
