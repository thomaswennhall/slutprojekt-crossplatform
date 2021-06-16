import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = () => {
   return <Image style={styles.logo} source={require("../../../assets/icon2.png")} />;
};

const styles = StyleSheet.create({
   logo: {
      height: 92,
      width: 92,
      borderRadius: 10,
   },
});

export default Logo;
