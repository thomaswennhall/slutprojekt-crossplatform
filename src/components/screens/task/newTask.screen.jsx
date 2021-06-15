import React from "react";
import { View, Text } from "react-native";
import NewTask from "../../modal/editTask/newTask";
const NewTaskScreen = ({ navigation }) => {
   const sendBackToScreen = () => {
      navigation.navigate("Category");
   };
   return (
      <View>
         <NewTask sendBack={sendBackToScreen} />
      </View>
   );
};

export default NewTaskScreen;
