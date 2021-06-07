import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Test from "../components/screens/landing.screen";
import Dashboard from "../components/screens/dashboard/dashboard.screen";
import TaskCategory from "../components/screens/category/Category.screen";
import TaskList from "../components/screens/category/TaskList.screen";
import Task from "../components/screens/task/task.screen";
import NewTask from "../components/screens/task/newTask.screen";
export const ScreenName = {
   LANDING: "Landing",
   DASHBOARD: "Dashboard",
   SORT_TASK: "Sort",
   TEST: "Test",
   CATEGORY: "Category",
   TASKLIST: "Task list",
   TASK: "TASK",
   NEWTASK: "New task",
};

const Stack = createStackNavigator();
const Navigation = () => (
   <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name={ScreenName.TEST} component={Test} />
         <Stack.Screen name={ScreenName.DASHBOARD} component={Dashboard} />
         <Stack.Screen name={ScreenName.CATEGORY} component={TaskCategory} />
         <Stack.Screen name={ScreenName.TASKLIST} component={TaskList} />
         <Stack.Screen name={ScreenName.TASK} component={Task} />
         <Stack.Screen name={ScreenName.NEWTASK} component={NewTask} />
         {/* Screens Goes here */}
      </Stack.Navigator>
   </NavigationContainer>
);
export default Navigation;
