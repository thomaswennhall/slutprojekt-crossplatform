import React, { useRef, useState } from "react";
import { Text, View, Image, StyleSheet, FlatList, Button } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import DashboardItem, { StylingOption } from "../../dashboard/dashboard-item";

const DashboardScreen = () => {
  const [user, setUser] = useState({
    name: "Test-User",
    role: "worker",
    image: "https://via.placeholder.com/150",
    tasks: [{}, {}, {}],
  });

  const grid = [
    {
      data: user.tasks.length,
      title: "Tasks",
      icon: "i",
      stylingOption: {
        background: StylingOption.BACKGROUND_BLUE,
      },
    },
    {
      title: "Profile",
      icon: "i",
      data: {
        button: {
          title: "View",
        },
      },
      stylingOption: {
        background: StylingOption.BACKGROUND_YELLOW,
      },
    },
    {
      title: "Messages",
      icon: "i",
      stylingOption: {
        background: StylingOption.BACKGROUND_RED,
      },
      data: {
        button: {
          title: "New",
        },
      },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View style={styles.profileUser}>
          <Text style={styles.profileHeader}>{user.name}</Text>
          <Text style={styles.profileRole}>{user.role}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.overViewText}>OVERVIEW</Text>
        <FlatGrid
          itemDimension={130}
          data={grid}
          renderItem={({ item }) => <DashboardItem {...item} />}
          style={styles.overViewGrid}
        />
      </View>
      <Button title="Log out" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 20,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    maxWidth: 250,
  },
  profileRole: {
    fontSize: 12,
  },
  profileHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  overViewHeader: {
    display: "flex",
    flexDirection: "row",
  },

  overViewGrid: {
    flexGrow: 0,
  },
  overViewText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2B2B2B",
    marginBottom: 15,
    marginLeft: 15,
  },
});

export default DashboardScreen;
