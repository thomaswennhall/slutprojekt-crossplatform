import React, { useContext } from "react";
import { CardWrapper, ColumnContainer, SafeAreaView } from "@/styles";
// import { SafeAreaView } from "react-native";
import { ThemeContext } from "styled-components/native";
import { Text, FlatList } from "react-native";
import MessagesListItem from "./messages-list-item";

const MessagesList = ({ data }) => {
  const { colors, spacing } = useContext(ThemeContext);
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        style={{ flex: 1 }}
        renderItem={({ item }) => <MessagesListItem {...item} key={item._id} />}
      />
    </SafeAreaView>
  );
};

export default MessagesList;
