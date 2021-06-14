import React, { useState, useContext } from "react";
import {
   View,
   Text,
   StyleSheet,
   TextInput,
   TouchableOpacity,
   KeyboardAvoidingView,
   TouchableWithoutFeedback,
   Keyboard,
   ScrollView,
} from "react-native";
import Input from "@/components/input/input.component";
import Button from "@/components/button/button.component";
import { AuthContext } from "../../store/authContext";
import { UserContext } from "../../store/userContext";
const UpdateProfile = ({ userInfo, backToProfile }) => {
   // console.log(userInfo);
   const { updateUserProfile } = useContext(UserContext);
   const { token } = useContext(AuthContext);
   const [username, setUsername] = useState(userInfo.username);
   const [password, setPassword] = useState("");

   const saveChanges = async () => {
      await updateUserProfile(token, username);
      backToProfile();
   };

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

                  <View style={styles.actions}></View>
               </View>
               <View
                  style={{
                     borderBottomColor: "#BFBFBF",
                     borderBottomWidth: 0.25,
                     marginTop: 8,
                  }}
               />
               <View style={styles.content}>
                  <Text style={styles.profileTitle}>Account</Text>
                  <View style={styles.content}>
                     <View style={[styles.row1, styles.row]}>
                        <View style={[styles.firstName, styles.nameColumn]}>
                           <Text style={styles.label}>Username</Text>
                           <TextInput
                              onChangeText={setUsername}
                              style={styles.input}
                              value={username}
                           />
                        </View>
                        <View style={[styles.lastName, styles.nameColumn]}>
                           <Text style={styles.label}>Password</Text>
                           <TextInput
                              style={styles.input}
                              value={password}
                              onChangeText={setPassword}
                              value={password}
                           />
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
                              onPress={saveChanges}
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
      backgroundColor: "#3A32CC",
   },
   discardButt: {
      backgroundColor: "#EB6464",
   },
});

export default UpdateProfile;
