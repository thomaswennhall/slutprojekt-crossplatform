import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { UserContext } from "../../store/userContext";
const MyProfile = ({ toUpdateProfile }) => {
   const { user } = useContext(UserContext);
   return (
      <View style={styles.container}>
         <Text style={styles.profileTitle}>Profile</Text>
         <View style={styles.content}>
            <View style={[styles.row1, styles.row]}>
               <View style={[styles.firstName, styles.nameColumn]}>
                  <Text style={styles.label}>First name</Text>
                  <TextInput style={styles.input} editable={false} />
               </View>
               <View style={[styles.lastName, styles.nameColumn]}>
                  <Text style={styles.label}>Last name</Text>
                  <TextInput style={styles.input} editable={false} />
               </View>
            </View>
            <View style={[styles.row2, styles.row]}>
               <View style={[styles.company]}>
                  <Text style={styles.label}>Company</Text>
                  <TextInput style={styles.input} editable={false} />
               </View>
               <View style={[styles.age]}>
                  <Text style={styles.label}>Age</Text>
                  <TextInput style={styles.input} editable={false} />
               </View>
            </View>

            <View style={styles.actions}>
               <TouchableOpacity style={styles.editButt} onPress={toUpdateProfile}>
                  <Text
                     style={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: "bold",
                     }}
                  >
                     Edit profile
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
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
   editButt: {
      padding: 12,
      backgroundColor: "#091832",
      borderRadius: 6,
   },
});
export default MyProfile;
