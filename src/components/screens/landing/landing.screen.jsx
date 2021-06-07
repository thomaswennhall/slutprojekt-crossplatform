import React from "react";
import {KeyboardScreen} from './styled'
import Logo from "@/components/logo/logo.component";
import Login from "@/components/login/login.component";

const landingScreen = ({ navigation }) => {
   const toDashboard = () => {
      navigation.navigate("Dashboard");
   };
   return (
      <KeyboardScreen behavior="padding" >
         <Logo />
         <Login toDashboard={toDashboard} />
      </KeyboardScreen>
   );
};

export default landingScreen;
