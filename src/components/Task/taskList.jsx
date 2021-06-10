import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import { UserContext } from "../../store/userContext";
const ItemTitle = ({ title, date, onPress }) => (
   <TouchableOpacity onPress={onPress} style={style.task}>
      <Text style={style.taskTitle}>{title}</Text>
   </TouchableOpacity>
);
const TaskList = ({ toTheTask }) => {
   const { user } = useContext(UserContext);
   // useEffect(()=> {

   // })
   const renderItem = ({ item, index }) => {
      return (
         <View>
            <ItemTitle title={item.title} onPress={() => toTheTask(item._id)} />
         </View>
      );
   };
   return (
      <View style={style.container}>
         <FlatList
            data={user.tasks}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
         />
      </View>
   );
};

const style = StyleSheet.create({
   container: {
      padding: 32,
   },
   task: {
      padding: 16,
      height: 72,
      backgroundColor: "#ffffff",
      borderRadius: 8,
      marginBottom: 16,
   },
   taskTitle: {
      fontWeight: "bold",
   },
   taskDate: {
      fontSize: 8,
   },
});
export default TaskList;
