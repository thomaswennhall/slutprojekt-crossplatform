import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";

const DATA = [
   { title: "Do something", date: "2021-05-17" },
   { title: "Do something", date: "2021-05-17" },
   { title: "Do something", date: "2021-05-17" },
   { title: "Do something", date: "2021-05-17" },
];
const ItemTitle = ({ title, date }) => (
   <View>
      <Text>{title}</Text>
      <Text>{date}</Text>
   </View>
);

const TaskList = () => {
   const renderItem = ({ item, index }) => (
      <View>
         <Text>
            <ItemTitle title={item.title} />
         </Text>
         <Text>
            <ItemTitle title={item.date} />
         </Text>
      </View>
   );

   return (
      <View>
         <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
         />
      </View>
   );
};

export default TaskList;
