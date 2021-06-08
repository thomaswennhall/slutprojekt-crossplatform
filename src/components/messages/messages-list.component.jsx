import React from "react";
import { SafeAreaView } from "@/styles";
import { FlatList } from "react-native";
import MessagesListItem from "./messages-list-item";

const MessagesList = ({ data }) => {
  return (
    <SafeAreaView theme={{ backgroundColor: "#fff" }}>
      <FlatList
        data={data}
        style={{ flex: 1 }}
        renderItem={({ item }) => <MessagesListItem {...item} key={item._id} />}
      />
    </SafeAreaView>
  );
};

export default MessagesList;
