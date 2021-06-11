import React, { useState, useEffect, useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../../../store/authContext";
import { UserContext } from "../../../store/userContext";
const UploadImage = ({ taskId }) => {
   const { token } = useContext(AuthContext);
   const { uploadImage } = useContext(UserContext);
   const [image, setImage] = useState(null);
   useEffect(() => {
      ImagePicker.requestMediaLibraryPermissionsAsync().then((response) => {
         console.log(response);
      });
   }, []);
   const pickImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({});
      if (!result.cancelled) {
         setImage(result);
      }
   };
   const uploadTheImage = async () => {
      const formData = new FormData();
      formData.append("image", {
         name: "imageUpload",
         type: "image/*",
         uri: Platform.OS === "android" ? image.uri : image.uri.replace("file://", ""),
      });
      await uploadImage(token, taskId, formData);
   };
   return (
      <View style={styles.container}>
         {image && (
            <Image source={{ uri: image.uri }} style={{ width: 80, height: 80 }} />
         )}
         <TouchableOpacity style={styles.uploadButt} onPress={uploadTheImage}>
            <Text style={styles.uploadText}>Upload Image</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.uploadButt} onPress={pickImage}>
            <Text style={styles.uploadText}>Open Media Library</Text>
         </TouchableOpacity>
      </View>
   );
};
const styles = StyleSheet.create({
   container: {
      marginTop: 16,
   },
   uploadButt: {
      backgroundColor: "#3B3AC9",
      padding: 8,
      borderRadius: 8,
   },
   uploadText: {
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center",
   },
});
export default UploadImage;
