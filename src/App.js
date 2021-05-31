import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import Test from "@/test";
import OverviewScreen from "./components/screens/overview/dashboard.screen";
const App = () => {
  return (
    <View style={styles.container}>
      <Test />
      <Text>Open up App.js to start working on your app!!!</Text>
      <StatusBar style="auto" />
      <OverviewScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default registerRootComponent(App);
