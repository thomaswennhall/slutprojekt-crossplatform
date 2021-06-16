import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Action = ({
  text,
  color,
  pressHandler,
  dashboardButton,
  logoutButton,
  saveButton
}) => {
  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={[
        styles.button,
        styles[color],
        styles.button,
        dashboardButton ? styles.dashboardButton : "",
        logoutButton ? styles.logoutButton : "",
        saveButton ? styles.saveButton : "",
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "flex-end",
    marginTop: 10,
  },
  alignCenter: {
    alignSelf: "center",
  },
  blue: {
    backgroundColor: "#0F55DF",
  },
  red: {
    backgroundColor: "#EB5757",
  },
  lightRed: {
    backgroundColor: "#EB5757",
  },
  black: {
    backgroundColor: "#091832",
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "center",
  },
  dashboardButton: {
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    minWidth: "50%",
  },
  logoutButton: {
    alignSelf: "center",
    borderRadius: 10,
    padding: 20,
    minWidth: "50%",
  },
  saveButton: {
    alignSelf: "center",
    width: "100%",
  }
});

export default Action;
