import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Test from "../components/screens/landing.screen";
import Dashboard from "../components/screens/dashboard/dashboard.screen";
import TaskCategory from "../components/screens/category/Category.screen";
import TaskList from "../components/screens/category/TaskList.screen";
export const ScreenName = {
   LANDING: "Landing",
   DASHBOARD: "Dashboard",
   SORT_TASK: "Sort",
   TEST: "Test",
   CATEGORY: "Category",
   TASKLIST: "Task list",
};

const Stack = createStackNavigator();
const Navigation = () => (
   <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name={ScreenName.TEST} component={Test} />
         <Stack.Screen name={ScreenName.DASHBOARD} component={Dashboard} />
         <Stack.Screen name={ScreenName.CATEGORY} component={TaskCategory} />
         <Stack.Screen name={ScreenName.TASKLIST} component={TaskList} />
         {/* Screens Goes here */}
      </Stack.Navigator>
   </NavigationContainer>
);
export default Navigation;
