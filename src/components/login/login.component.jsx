import React, { useState, useContext } from "react";
import { View } from "react-native";
import { AuthContext } from "../../store/authContext";
import Input from "../input/input.component";
import Button from "../button/button.component";
import Modal from "../pop-up/errorPopUpComponent";
const Login = ({ toDashboard }) => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   // const [toggleModal, setModal] = useState(false);
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
      <View style={{ width: "100%", padding: 28 }}>
         {inputs.map((input) => (
            <Input key={input.label} {...input} />
         ))}
         <Button text="SIGN IN" pressHandler={pressHandler} color="blue" />
         {/* <Button text="ERROR" onPress={() => setModal(true)} color="blue" /> */}
         <Modal />
      </View>
   );
};

export default Login;
