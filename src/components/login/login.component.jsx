import React, { useState, useContext } from "react";
import {
   View,
   KeyboardAvoidingView,
   TouchableWithoutFeedback,
   Keyboard,
   Platform,
} from "react-native";
import { AuthContext } from "../../store/authContext";
import Input from "../input/input.component";
import Button from "../button/button.component";
import Modal from "../modal/statusMessage/errorModalComponent";

import * as SecureStore from 'expo-secure-store'

const Login = ({ loginErrorHandler }) => {
   const [username, setUsername] = useState("worker");
   const [password, setPassword] = useState("worker");

   const inputs = [
      {
         label: "Username",
         //placeholder: 'username...',
         inputHandler: (input) => {
            setUsername(input);
         },
         value: "",
      },
      {
         label: "Password",
         //placeholder: 'password...',
         secureInput: true,
         inputHandler: (input) => {
            setPassword(input);
         },
         value: "",
      },
   ];
   const { signIn } = useContext(AuthContext);
   const pressHandler = async () => {
      try {
         await signIn(username, password);
         setUsername("");
         setPassword("");
      } catch (err) {
         loginErrorHandler();
      }
   };
   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={{ width: "100%", padding: 32 }}
      >
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
               {inputs.map((input) => (
                  <Input key={input.label} {...input} />
               ))}
               <Button text="SIGN IN" pressHandler={pressHandler} color="blue" />
            </View>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
   );
};

export default Login;
