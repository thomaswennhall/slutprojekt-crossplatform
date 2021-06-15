import React from "react";
import { SafeAreaView } from "@/styles";
import { FlatList } from "react-native";
import MessagesListItem from "./messages-list-item";

const MessagesList = ({ data }) => {
   return (
      <SafeAreaView
         theme={{
            background: "#F8F8F8",
         }}
      >
         <FlatList
            data={data}
            style={{ flex: 1 }}
            renderItem={({ item }) => <MessagesListItem {...item} />}
            keyExtractor={(item, index) => item._id.toString()}
         />
      </SafeAreaView>
   );
};

export default MessagesList;
