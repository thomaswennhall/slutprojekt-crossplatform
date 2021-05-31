import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import CategoryList from "../components/TaskCategories";
const CategoryScreen = ({ navigation }) => {
   const toTaskList = () => {
      navigation.navigate("Task list");
   };
   return (
      <View style={style.categoryContainer}>
         <CategoryList notCompletedHandler={toTaskList} style={style.categoryList} />
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
