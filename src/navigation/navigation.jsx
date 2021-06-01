import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Test from "../components/screens/landing.screen";
import Dashboard from "../components/screens/dashboard/dashboard.screen";
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
         <Stack.Screen name={ScreenName.TEST} component={Test} />
         <Stack.Screen name={ScreenName.DASHBOARD} component={Dashboard} />
         {/* Screens Goes here */}
      </Stack.Navigator>
   </NavigationContainer>
);
export default Navigation;
