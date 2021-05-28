import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Action = ({ text, color }) => {
  return (
    <TouchableOpacity style={[styles.button, color === 'red' ? styles.buttonRed : styles.buttonBlue ]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginTop: 10
  },
  buttonBlue: {
    backgroundColor: '#0F55DF'
  },
  buttonRed: {
    backgroundColor: '#EB5757'
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center'
  }
})

module.exports = Action
