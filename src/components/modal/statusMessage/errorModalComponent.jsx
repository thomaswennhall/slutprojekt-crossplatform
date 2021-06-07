import React, { useState } from "react";
import {
   Modal,
   StyleSheet,
   Text,
   Pressable,
   View,
   Image,
   TouchableOpacity,
} from "react-native";

const popUp = ({ modalVisible, toggleModalPop, str }) => {
   //    const [modalVisible, setModalVisible] = useState(true);
   return (
      <TouchableOpacity
         style={styles.centeredView}
         onPress={() => toggleModalPop(!modalVisible)}
      >
         <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
               toggleModalPop(!modalVisible);
            }}
         >
            <View style={styles.centeredView}>
               <View style={styles.modalView}>
                  <Image
                     source={require("../../../../assets/img/red-cicrle.png")}
                     style={styles.modalImg}
                  />
                  <Text style={styles.modalHeader}>Something went wrong</Text>
                  <Text style={styles.modalText}>
                     porttitor eget dolor morbi non arcu risus quis varius quam quisque id
                     diam vel quam{" "}
                  </Text>
                  <TouchableOpacity
                     style={[styles.button, styles.buttonClose]}
                     onPress={() => toggleModalPop(!modalVisible)}
                  >
                     <Text style={styles.textStyle}>Try again</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      backgroundColor: "rgba(52, 52, 52, 0.8)",
   },
   modalView: {
      width: 300,
      backgroundColor: "white",
      borderRadius: 20,
      paddingTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 50,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
   },
   modalImg: {
      width: "100%",
      marginTop: -10,
      marginBottom: -10,
      padding: 0,
   },
   button: {
      maxWidth: 80,
      marginTop: 20,
      alignSelf: "center",
      borderRadius: 8,
      padding: 12,
      elevation: 2,
   },
   buttonOpen: {
      backgroundColor: "#F194FF",
   },
   buttonClose: {
      backgroundColor: "#091832",
   },
   textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 12,
   },
   modalHeader: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
   },
   modalText: {
      fontSize: 12,
      color: "#BABABA",
      marginBottom: 30,
      textAlign: "center",
   },
});

export default popUp;
