import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";

const DATA = [
   { title: "Do something", date: "2021-05-17" },
   { title: "Do something", date: "2021-05-17" },
   { title: "Do something", date: "2021-05-17" },
   { title: "Do something", date: "2021-05-17" },
];
const ItemTitle = ({ title }) => (
   <View>
      <Text style={style.taskTitle}>{title}</Text>
   </View>
);

const TaskList = () => {
   const renderItem = ({ item, index }) => (
      <View style={style.task}>
         <Text style={style.taskTitle}>
            <ItemTitle title={item.title} />
         </Text>
      </View>
   );

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
      flex: 1,
      padding: 32,
   },
   task: {
      padding: 16,
      height: 72,
      backgroundColor: "#ffffff",
      borderRadius: 8,
      marginBottom: 16,
   },
   taskTitle: {},
   taskDate: {
      fontSize: 8,
   },
});
export default TaskList;
