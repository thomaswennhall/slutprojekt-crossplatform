import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Test from "@/test";
import LandingScreen from "../components/screens/landing/landing.screen";
import DashboardScreen from "../components/screens/dashboard/dashboard.screen";

export const ScreenName = {
  LANDING: "Landing",
  DASHBOARD: "Dashboard",
  SORT_TASK: "Sort",
  TEST: "Test",
};

const Stack = createStackNavigator();
const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={ScreenName.LANDING} component={LandingScreen} />
      <Stack.Screen name={ScreenName.DASHBOARD} component={DashboardScreen} />
      {/* Screens Goes here */}
    </Stack.Navigator>
  </NavigationContainer>
);
export default Navigation;
