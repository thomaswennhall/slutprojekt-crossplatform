import React from "react";
import { Text, View, Image } from "react-native";

import styles from "./styles";

const DashboardProfile = ({ username, role }) => (
  <View style={styles.profile}>
    <Image
      style={styles.profileImage}
      source={{
        uri: "https://reactnative.dev/img/tiny_logo.png",
      }}
    />
    <View style={styles.profileUser}>
      <Text style={styles.profileHeader}>{username}</Text>
      <Text style={styles.profileRole}>{role}</Text>
    </View>
  </View>
);

export default DashboardProfile;
