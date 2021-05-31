import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CategoryList = () => {
   return (
      <View>
         <TouchableOpacity onPress={() => alert("Hi")}>
            <Text>Not Completed</Text>
         </TouchableOpacity>
      </View>
   );
};

export default CategoryList;
