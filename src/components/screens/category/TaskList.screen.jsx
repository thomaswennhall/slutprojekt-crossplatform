import React from "react";
import { View, Text } from "react-native";
import Tasks from "../../Task/taskList";
const TaskListScreen = ({ navigation }) => {
   const theTask = (id) => {
      navigation.navigate("TASK", { id });
   };
   return (
      <View>
         <Tasks toTheTask={theTask} />
      </View>
   );
};

export default TaskListScreen;
