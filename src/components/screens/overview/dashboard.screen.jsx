import React from "react";
import { Text, Image, StyleSheet, FlatList } from "react-native";
const OverviewScreen = () => {
  return (
    <FlatList style={styles.container}>
      <View>
        <Image>Image</Image>
        <Text></Text>
      </View>
    </FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overViewHeader: {
    display: "flex",
    flexDirection: "row",
  },
});

export default OverviewScreen;
