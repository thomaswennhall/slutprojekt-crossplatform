import React, { useState, useContext } from "react";
import {
   View,
   KeyboardAvoidingView,
   TouchableWithoutFeedback,
   Keyboard,
} from "react-native";
import { AuthContext } from "../../store/authContext";
import Input from "../input/input.component";
import Button from "../button/button.component";
import Modal from "../modal/statusMessage/errorModalComponent";
const Login = ({ toDashboard }) => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [modalVisible, setModal] = useState(false);
   const inputs = [
      {
         label: "Username",
         //placeholder: 'username...',
         inputHandler: (input) => {
            setUsername(input);
         },
      },
      {
         label: "Password",
         //placeholder: 'password...',
         secureInput: true,
         inputHandler: (input) => {
            setPassword(input);
         },
      },
   ];

   const { singIn } = useContext(AuthContext);
   const pressHandler = async () => {
      await singIn(username, password);
      toDashboard();
   };
   const toggleModalPop = () => {
      setModal(!modalVisible);
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
               <Button text="ERROR" pressHandler={toggleModalPop} color="blue" />
               <Modal modalVisible={modalVisible} toggleModalPop={toggleModalPop} />
            </View>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
   );
};

export default Login;
