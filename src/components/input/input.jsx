import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { baseStyles } from '@/styles/global'

const Input = ({ label, secureInput, placeholder }) => {
  return (
    <View>
      {
        label && <Text style={styles.header}>{label}</Text>
      }
      <TextInput secureTextEntry={secureInput} style={styles.textBox} placeholder={placeholder} />
    </View>
  )
}

const styles = StyleSheet.create(Object.assign({
 
  textBox: {
    color: 'black',
    backgroundColor: '#eee',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: 319,
    height: 50
  }
}, baseStyles)
)

module.exports = Input
