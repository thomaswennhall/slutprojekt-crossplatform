import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Logo from "@/components/logo/logo.component";
import Login from "@/components/login/login.component";
const LandingScreen = ({ navigation }) => {
  const [userState, setUserState] = useState(null);
  useEffect(() => {
    if (userState) {
      navigation.navigate("Dashboard");
    }
  }, []);
  const loginHandler = (username, password) => {
    console.log(username, password);
    if (username === "test-user") {
      setUserState({ username });
      navigation.navigate("Dashboard");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Login onLoginHandler={loginHandler} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100%",
  },
});

export default LandingScreen;
