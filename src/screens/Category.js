import React from "react";
import { View, Text, Button } from "react-native";
import CategoryList from "../components/TaskCategories";
const CategoryScreen = ({ navigation }) => {
   const toTaskList = () => {
      navigation.navigate("Task list");
   };
   return (
      <View>
         <CategoryList notCompletedHandler={toTaskList} />
      </View>
   );
};

export default CategoryScreen;
