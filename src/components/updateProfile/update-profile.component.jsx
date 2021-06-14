import React, { useState } from "react";
import {
   View,
   Text,
   StyleSheet,
   TextInput,
   TouchableOpacity,
   KeyboardAvoidingView,
   TouchableWithoutFeedback,
   Keyboard,
} from "react-native";
import Input from "@/components/input/input.component";
import Button from "@/components/button/button.component";

const UpdateProfile = () => {
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

   const saveChanges = () => {};

   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={{ width: "100%" }}
      >
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
               <Text style={styles.profileTitle}>Profile</Text>
               <View style={styles.content}>
                  <View style={[styles.row1, styles.row]}>
                     <View style={[styles.firstName, styles.nameColumn]}>
                        <Text style={styles.label}>First name</Text>
                        <TextInput style={styles.input} />
                     </View>
                     <View style={[styles.lastName, styles.nameColumn]}>
                        <Text style={styles.label}>Last name</Text>
                        <TextInput style={styles.input} />
                     </View>
                  </View>
                  <View style={[styles.row2, styles.row]}>
                     <View style={[styles.company]}>
                        <Text style={styles.label}>Company</Text>
                        <TextInput style={styles.input} />
                     </View>
                     <View style={[styles.age]}>
                        <Text style={styles.label}>Age</Text>
                        <TextInput style={styles.input} />
                     </View>
                  </View>

                  <View style={styles.actions}>
                     <TouchableOpacity style={[styles.editButt, styles.butt]}>
                        <Text
                           style={{
                              textAlign: "center",
                              color: "#fff",
                              fontSize: 12,
                              fontWeight: "bold",
                           }}
                        >
                           Save change
                        </Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={[styles.discardButt, styles.butt]}>
                        <Text
                           style={{
                              textAlign: "center",
                              color: "#fff",
                              fontSize: 12,
                              fontWeight: "bold",
                           }}
                        >
                           Discard change
                        </Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
   );
};

const styles = StyleSheet.create({
   container: {
      padding: 32,
   },
   profileTitle: {
      fontSize: 24,
      fontWeight: "bold",
   },
   content: {
      marginTop: 16,
   },
   row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 16,
   },
   nameColumn: {
      width: "48%",
   },
   company: {
      width: "68%",
   },
   age: {
      width: "28%",
   },
   label: {
      fontSize: 12,
      color: "#BFBFBF",
   },
   input: {
      backgroundColor: "#EDF2FC",
      padding: 16,
      borderRadius: 12,
      marginTop: 8,
      maxHeight: 150,
   },
   butt: {
      padding: 12,
      borderRadius: 6,
      marginVertical: 4,
   },
   editButt: {
      backgroundColor: "#091832",
   },
   discardButt: {
      backgroundColor: "#EB6464",
   },
});

export default UpdateProfile;
