import React, { useState, useEffect, useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../../../store/authContext";
import { UserContext } from "../../../store/userContext";
const UploadImage = ({ taskId }) => {
   const { token } = useContext(AuthContext);
   const { uploadImage, user } = useContext(UserContext);
   const [image, setImage] = useState(null);
   useEffect(() => {
      ImagePicker.requestMediaLibraryPermissionsAsync().then((response) => {});
      ImagePicker.requestCameraPermissionsAsync();
   }, []);
   const pickImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({});
      if (!result.cancelled) {
         setImage(result);
      }
   };
   const openCamera = async () => {
      const openCamera = await ImagePicker.launchCameraAsync({});
      if (!openCamera.cancelled) {
         setImage(openCamera);
      }
   };
   const uploadTheImage = async () => {
      const formData = new FormData();
      formData.append("imageUpload", {
         name: "red.png",
         type: "image/*",
         uri: Platform.OS === "android" ? image.uri : image.uri.replace("file://", ""),
      });
      await uploadImage(token, taskId, formData);
      setImage(null);
   };
   return (
      <View style={styles.container}>
         <View style={styles.gallery}>
            {image && <Image source={{ uri: image.uri }} style={styles.img} />}
            {user.role === "worker" && (
               <View style={styles.buttonContainer}>
                  <TouchableOpacity
                     style={[styles.uploadButt, styles.openLibrary]}
                     onPress={pickImage}
                  >
                     <Text style={styles.uploadText}>Open Library</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     style={[styles.uploadButt, styles.openLibrary]}
                     onPress={openCamera}
                  >
                     <Text style={styles.uploadText}>Open Camera</Text>
                  </TouchableOpacity>
               </View>
            )}
         </View>
         {image && (
            <TouchableOpacity style={styles.uploadButt} onPress={uploadTheImage}>
               <Text style={styles.uploadText}>Upload Image</Text>
            </TouchableOpacity>
         )}
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
   gallery: {
      marginBottom: 8,
   },
   img: {
      width: "100%",
      height: 120,
      borderRadius: 8,
      marginBottom: 8,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.9,
      shadowRadius: 4,
   },
   openLibrary: {
      width: "48%",
      backgroundColor: "#091832",
   },
   buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
   },
});
export default UploadImage;
