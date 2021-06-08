import React, { useContext } from "react";
import { View, Text } from "react-native";
import Task from "../../Task/theTask";
import { UserContext } from "../../../store/userContext";
const TaskScreen = ({ route }) => {
   const { id } = route.params;
   const { findTaskById } = useContext(UserContext);
   const task = findTaskById(id);
   return (
      <View>
         <Task task={task} />
      </View>
   );
};

export default TaskScreen;
