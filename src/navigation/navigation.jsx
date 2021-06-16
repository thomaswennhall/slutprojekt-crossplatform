import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../components/screens/landing.screen";
import Dashboard from "../components/screens/dashboard/dashboard.screen";
import TaskCategory from "../components/screens/category/Category.screen";
import TaskList from "../components/screens/category/TaskList.screen";
import Task from "../components/screens/task/task.screen";
import NewTask from "../components/screens/task/newTask.screen";
import Profile from "../components/screens/profile/profile.screen";
import EditProfile from "../components/screens/profile/editProfile.screen";
import TaskMessages from "../components/screens/task-messages/task-messages.screen";
import TaskList4Message from "../components/screens/taskMessage/taskList.screen";
export const ScreenName = {
   LANDING: "Landing",
   DASHBOARD: "Dashboard",
   SORT_TASK: "Sort",
   TEST: "Test",
   CATEGORY: "Category",
   TASKLIST: "Task list",
   TASK: "TASK",
   NEWTASK: "New task",
   PROFILE: "Profile",
   EDITPROFILE: "Edit profile",
   MESSAGES: "Messages",
   TASKS4MESSAGE: "Task List",
};

const Stack = createStackNavigator();
const Navigation = () => (
   <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name={ScreenName.LANDING} component={Landing} />
         <Stack.Screen name={ScreenName.MESSAGES} component={TaskMessages} />
         <Stack.Screen name={ScreenName.PROFILE} component={Profile} />
         <Stack.Screen name={ScreenName.EDITPROFILE} component={EditProfile} />
         <Stack.Screen name={ScreenName.DASHBOARD} component={Dashboard} />
         <Stack.Screen name={ScreenName.CATEGORY} component={TaskCategory} />
         <Stack.Screen name={ScreenName.TASKLIST} component={TaskList} />
         <Stack.Screen name={ScreenName.TASK} component={Task} />
         <Stack.Screen name={ScreenName.NEWTASK} component={NewTask} />
         <Stack.Screen name={ScreenName.TASKS4MESSAGE} component={TaskList4Message} />
         {/* <Stack.Screen name={ScreenName.MESSAGES} component={TaskMessages} /> */}
         {/* Screens Goes here */}
      </Stack.Navigator>
   </NavigationContainer>
);
export default Navigation;
