import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";

const DATA = [
   { title: "Do something", date: "2021-05-17" },
   { title: "Do something", date: "2021-05-17" },
   { title: "Do something", date: "2021-05-17" },
   { title: "Do something", date: "2021-05-17" },
];
const ItemTitle = ({ title, date, onPress }) => (
   <TouchableOpacity onPress={onPress} style={style.task}>
      <Text style={style.taskTitle}>{title}</Text>
   </TouchableOpacity>
);
const TaskList = ({ toTheTask }) => {
   const renderItem = ({ item, index }) => {
      return (
         <View>
            <ItemTitle title={item.title} onPress={toTheTask} />
         </View>
      );
   };
   return (
      <View style={style.container}>
         <FlatList
            data={DATA}
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
