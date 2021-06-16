import React, { useEffect, useContext, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Logo from "@/components/logo/logo.component";
import { AuthContext } from "@/store/authContext";
import Login from "@/components/login/login.component";
import PopUp from "../modal/statusMessage/errorModalComponent";

const landingScreen = ({ navigation }) => {
   const { token, getValueForToken } = useContext(AuthContext);
   const [loginError, setLoginError] = useState(false);

   useEffect(() => {
      const initToken = async () => {
         await getValueForToken()

         if (token) {
            navigation.navigate("Dashboard");
         };
      };
      initToken();
   }, [token]);

   const toggleLoginError = () => {
      setLoginError(!loginError);
   };

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Login loginErrorHandler={toggleLoginError} />
      {loginError && (
        <PopUp modalVisible={loginError} toggleModalPop={toggleLoginError} />
      )}
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

export default landingScreen;
