import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import styles from "./styles";
const TaskMessages = () => {
  const [user] = useState({
    username: "test-user",
  });
  const [messages, setMessages] = useState([
    {
      _id: 1,
      author: "test-user",
      title: "My title!",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque mi tempus, gravida nunc id, scelerisque neque. Donec eu diam eu elit volutpat aliquam. In in viverra dolor. Morbi massa libero, ultrices id augue eget, auctor rutrum nulla. Nullam eget ante neque. Fusce hendrerit aliquet mattis. Donec quis leo ex. Etiam et tellus molestie, ultricies elit eget, condimentum dui. Nullam volutpat consectetur posuere",
      date: new Date(),
      showMessage: false,
    },
    {
      _id: 2,
      author: "test-user",
      title: "My title!",
      content:
        "In eget finibus ante. Ut ut nisi augue. Duis vestibulum, elit quis efficitur lobortis, dolor mi hendrerit odio, eu vehicula urna mauris a tellus. Curabitur vestibulum arcu lorem, eu finibus ligula semper a. Proin tristique neque sed convallis lacinia.",
      date: new Date(),
      showMessage: false,
    },
    {
      _id: 3,
      author: "another-user",
      title: "My title!",
      content:
        "Ut in sapien at libero tincidunt fermentum quis vel lorem. Proin in risus imperdiet, convallis tortor ac, malesuada nulla. Vestibulum nec est sed nisi blandit sollicitudin. Vestibulum fermentum sem vel libero gravida tempus. Vivamus placerat posuere vulputate. Nulla facilisi. Vivamus at finibus eros",
      date: new Date(),
      unread: true,
      showMessage: false,
    },
    {
      _id: 3,
      author: "another-user",
      title: "My title!",
      content:
        "Ut in sapien at libero tincidunt fermentum quis vel lorem. Proin in risus imperdiet, convallis tortor ac, malesuada nulla. Vestibulum nec est sed nisi blandit sollicitudin. Vestibulum fermentum sem vel libero gravida tempus. Vivamus placerat posuere vulputate. Nulla facilisi. Vivamus at finibus eros",
      date: new Date(),
      unread: false,
      showMessage: false,
    },
  ]);
  const rightSwipeActions = (author) => {
    return author === user.username ? (
      <View style={{ backgroundColor: "#eee", display: "flex", minWidth: 100 }}>
        <View
          style={{
            backgroundColor: "#eee",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            borderLeftColor: "#EB6464",
            borderLeftWidth: 10,
          }}
        >
          <Text>Delete</Text>
        </View>
        <View
          style={{
            backgroundColor: "#eee",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            borderBottomColor: "#eee",
            borderBottomWidth: 2,
            borderLeftColor: "#7997FF",
            borderLeftWidth: 10,
          }}
        >
          <Text>Edit</Text>
        </View>
      </View>
    ) : (
      <View
        style={{
          backgroundColor: "#eee",
          display: "flex",
          minWidth: 100,
          marginLeft: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#eee",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            borderLeftColor: "#3B3AC9",
            borderLeftWidth: 10,
          }}
        >
          <Text>Reply</Text>
        </View>
      </View>
    );
  };
  const LeftSwipeActions = () => {
    return (
      <View
        style={{
          backgroundColor: "#eee",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            color: "#222",
            paddingHorizontal: 10,
            fontWeight: "600",
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}
        >
          Delete
        </Text>
      </View>
    );
  };
  const swipeFromLeftOpen = () => {
    alert("Swipe from left");
  };
  const swipeFromRightOpen = () => {
    alert("Swipe from right");
  };
  const [showMessage, setShowMessage] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.messageWrapper}
        data={messages}
        renderItem={({ item }) => (
          <Swipeable
            renderLeftActions={LeftSwipeActions}
            renderRightActions={() => rightSwipeActions(item.author)}
            onSwipeableRightOpen={swipeFromRightOpen}
            onSwipeableLeftOpen={swipeFromLeftOpen}
          >
            <TouchableOpacity
              onPress={() =>
                setMessages([
                  ...messages.map((message) =>
                    message._id === item._id
                      ? { ...message, showMessage: true }
                      : message
                  ),
                ])
              }
            >
              <View
                style={[
                  styles.messageContainer,
                  user.username === item.author ? styles.messageOwner : "",
                ]}
                key={item._id}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.messageTitle}>{item.title}</Text>
                  <View
                    style={{
                      borderRadius: 50,
                      minHeight: 30,
                      minWidth: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "blue",
                    }}
                  >
                    <Text
                      style={[
                        styles.alignRight,
                        { color: "red", marginRight: 10 },
                      ]}
                    >
                      {item.author.substring(0, 1).toUpperCase()}
                    </Text>
                  </View>
                </View>
                {item.showMessage && (
                  <Text style={styles.messageContent}>
                    {item.content.substring(0, 150)}
                  </Text>
                )}

                <Text style={[styles.alignRight, styles.messageDate]}>
                  {item.date.toString().split(" GMT")[0]}
                </Text>
              </View>
            </TouchableOpacity>
          </Swipeable>
        )}
      />
    </SafeAreaView>
  );
};

export default TaskMessages;
