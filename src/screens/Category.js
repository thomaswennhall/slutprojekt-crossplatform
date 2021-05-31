import React from "react";
import { View, Text, Button } from "react-native";
import CategoryList from "../components/TaskCategories";
const CategoryScreen = () => {
   return (
      <View>
         <Text>Category</Text>
         <CategoryList />
      </View>
   );
};

export default CategoryScreen;
