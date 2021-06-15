import React, { useEffect, useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Logo from "@/components/logo/logo.component";
import Login from "@/components/login/login.component";
import { AuthContext } from "@/store/authContext";
const LandingScreen = ({ navigation }) => {
  const { token } = useContext(AuthContext);
  useEffect(() => {
    if (token) {
      // navigation.navigate("Dashboard");
      navigation.navigate("Messages");
    }
  }, []);
  const loginHandler = (username, password) => {
    if (username === "test-user") {
      setUserState({ username });
      // navigation.navigate("Dashboard");
      navigation.navigate("Messages");
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
