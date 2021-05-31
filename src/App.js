import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { registerRootComponent } from "expo";
import Test from "@/test";
import DashboardScreen from "./components/screens/dashboard/dashboard.screen";

const App = () => {
  return (
    <View style={styles.container}>
      <Test />
      <StatusBar style="auto" />
      <DashboardScreen />
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
