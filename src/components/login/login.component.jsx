import React, { useState, useContext } from "react";
import { View } from "react-native";
import { AuthContext } from "../../store/authContext";
import Input from "../input/input.component";
import Button from "../button/button.component";

const Login = ({ toDashboard }) => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

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

   return (
      <View>
         {inputs.map((input) => (
            <Input key={input.label} {...input} />
         ))}
         <Button text="SIGN IN" pressHandler={pressHandler} color="blue" />
      </View>
   );
};

module.exports = Login;
