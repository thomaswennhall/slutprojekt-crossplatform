import React from "react";
import {
   View,
   Modal,
   TouchableOpacity,
   StyleSheet,
   Text,
   SafeAreaView,
} from "react-native";

const confirmModal = ({ confirmModal, toggleConfirmModal }) => {
   return (
      <TouchableOpacity
         onPress={() => toggleConfirmModal(!confirmModal)}
         style={styles.confirmCenteredView}
      >
         <Modal animationType="slide" transparent={true} visible={confirmModal}>
            <View>
               <View style={styles.modalView}>
                  <View style={styles.confirmBody}>
                     <Text>Are you sure ?</Text>
                  </View>
                  <TouchableOpacity onPress={() => toggleConfirmModal(!confirmModal)}>
                     <Text>Discard</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   confirmCenteredView: {
      padding: 24,
      backgroundColor: "rgba(52, 52, 52, 0.8)",
   },
   modalView: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 32,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
   },
});

export default confirmModal;
