import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import CategoryList from "../../Category/TaskCategoriesComponent";
const CategoryScreen = ({ navigation }) => {
   const toTaskList = () => {
      navigation.navigate("Task list");
   };
   const toAddNewTask = () => {
      navigation.navigate("New task");
   };
   return (
      <View style={style.categoryContainer}>
         <CategoryList
            notCompletedHandler={toTaskList}
            addNewTask={toAddNewTask}
            style={style.categoryList}
         />
      </View>
   );
};

const style = StyleSheet.create({
   categoryContainer: {
      flex: 1,
      padding: 32,
   },
});
export default CategoryScreen;
