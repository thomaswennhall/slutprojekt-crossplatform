import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { registerRootComponent } from "expo";
import TaskList from "./screens/TaskList";
import Category from "./screens/Category";
const HomeScreen = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <Text>Home</Text>
         <Button title="To category" onPress={() => navigation.navigate("Category")} />
      </View>
   );
};

const Stack = createStackNavigator();
const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Task list" component={TaskList} />
         </Stack.Navigator>
      </NavigationContainer>
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
