import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";
import DashboardScreen from "./components/screens/dashboard/dashboard.screen";
const App = () => {
  return <DashboardScreen />;
};

export default registerRootComponent(App);
