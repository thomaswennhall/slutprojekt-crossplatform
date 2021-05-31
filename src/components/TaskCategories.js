import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import Arrow from "../../assets/icons/Iconly/Bold/arrow-right.svg";
import TaskList from "../screens/TaskList";
const CategoryListScreen = ({ notCompletedHandler }) => {
   return (
      <View>
         <TouchableOpacity onPress={notCompletedHandler}>
            <Text>Not Completed</Text>
            <Arrow />
         </TouchableOpacity>
      </View>
   );
};
export default CategoryListScreen;
