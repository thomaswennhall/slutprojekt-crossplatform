import React from "react";
import { View, Text } from "react-native";
import Tasks from "../../Task/tasks";
const TaskListScreen = ({ navigation }) => {
   const theTask = () => {
      navigation.navigate("TASK");
   };
   return (
      <View>
         <Tasks toTheTask={theTask} />
      </View>
   );
};

export default TaskListScreen;
