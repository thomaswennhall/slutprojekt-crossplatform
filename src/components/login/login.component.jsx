import React, { useState } from "react";
import { View } from "react-native";

import Input from "../input/input.component";
import Button from "../button/button.component";

const Login = ({ onLoginHandler }) => {
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

  return (
    <View>
      {inputs.map((input) => (
        <Input key={input.label} {...input} />
      ))}
      <Button
        text="SIGN IN"
        color={"red"}
        pressHandler={() => onLoginHandler(username, password)}
      />
    </View>
  );
};

module.exports = Login;
