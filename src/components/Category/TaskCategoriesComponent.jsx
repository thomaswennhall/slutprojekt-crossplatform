import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { UserContext } from "../../store/userContext";
const CategoryListScreen = ({ notCompletedHandler, addNewTask }) => {
   const { user } = useContext(UserContext);
   return (
      <View style={style.container}>
         <TouchableOpacity onPress={notCompletedHandler} style={style.list}>
            <Text style={style.categoryTitle}>Not Completed</Text>
            <Icon name="arrow-right" style={style.icon} />
         </TouchableOpacity>
         {/* <TouchableOpacity onPress={notCompletedHandler} style={style.list}>
            <Text style={style.categoryTitle}>Completed</Text>
            <Icon name="arrow-right" style={style.icon} />
         </TouchableOpacity> */}
         {user.role === "worker" && (
            <TouchableOpacity onPress={addNewTask} style={style.list}>
               <Text style={style.categoryTitle}>New task</Text>
               <Icon name="arrow-right" style={style.icon} />
            </TouchableOpacity>
         )}
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
      fontSize: 30,
      alignSelf: "center",
   },
   categoryTitle: {
      fontWeight: "bold",
      display: "flex",
   },
});
export default CategoryListScreen;
