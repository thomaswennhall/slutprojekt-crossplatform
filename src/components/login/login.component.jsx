import React, { useState, useContext } from "react";
import { View } from "react-native";
import { AuthContext } from "../../store/authContext";
import Input from "../input/input.component";
import Button from "../button/button.component";
import Modal from "../modal/errorModalComponent";
const Login = ({ loginErrorHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    <View style={{ width: "100%", padding: 28 }}>
      {inputs.map((input) => (
        <Input key={input.label} {...input} />
      ))}
      <Button text="SIGN IN" pressHandler={pressHandler} color="blue" />
    </View>
  );
};

export default Login;
