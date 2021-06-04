import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const Input = ({ label, secureInput, placeholder, inputHandler }) => {
   return (
      <View>
         {label && <Text style={styles.header}>{label}</Text>}
         <TextInput
            secureTextEntry={secureInput}
            style={styles.textBox}
            placeholder={placeholder}
            onChangeText={inputHandler}
            autoCapitalize="none"
         />
      </View>
   );
};
const styles = StyleSheet.create({
  textBox: {
    color: "black",
    backgroundColor: "#eee",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    height: 50,
  }
});

export default Input
