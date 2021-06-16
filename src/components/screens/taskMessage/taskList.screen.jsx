import React from "react";
import { View, Texy } from "react-native";
import TaskListForMessage from "../../Task/forMessage/taskList";

const TaskList4Message = ({ navigation }) => {
   const backToDashboard = () => {
      navigation.navigate("Dashboard");
   };
   return (
      <View>
         <TaskListForMessage backToTheDashboard={backToDashboard} />
      </View>
   );
};

export default TaskList4Message;
