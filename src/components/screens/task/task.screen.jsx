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
   return (
      <View>
         <Task task={task} toTheTaskList={toTaskList} />
      </View>
   );
};

export default TaskScreen;
