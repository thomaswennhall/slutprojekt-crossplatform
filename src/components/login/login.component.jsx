import React, { useState } from "react";
import { View } from "react-native";

import Input from "../input/input.component";
import Button from "../button/button.component";

const Login = () => {
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

   const pressHandler = () => {
      console.log(username, password);
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

export default Login;
