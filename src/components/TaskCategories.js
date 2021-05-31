import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import Arrow from "../../assets/icons/Iconly/Bold/arrow-right.svg";
import Plus from "../../assets/icons/Iconly/Bold/plus.svg";
const CategoryListScreen = ({ notCompletedHandler }) => {
   return (
      <View style={style.container}>
         <TouchableOpacity onPress={notCompletedHandler} style={style.list}>
            <Text style={style.categoryTitle}>Not Completed</Text>
            <Arrow style={style.icon} />
         </TouchableOpacity>
         <TouchableOpacity onPress={notCompletedHandler} style={style.list}>
            <Text style={style.categoryTitle}>Completed</Text>
            <Arrow style={style.icon} />
         </TouchableOpacity>
         <TouchableOpacity onPress={notCompletedHandler} style={style.list}>
            <Text style={style.categoryTitle}>New task</Text>
            <Plus style={style.icon} />
         </TouchableOpacity>
      </View>
   );
};

const style = StyleSheet.create({
   list: {
      padding: 16,
      backgroundColor: "#ffffff",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: 72,
      marginBottom: 16,
   },
   icon: {
      alignSelf: "center",
   },
   categoryTitle: {
      fontWeight: "bold",
   },
});
export default CategoryListScreen;
