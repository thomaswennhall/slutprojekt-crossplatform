import React, { useState } from 'react' 
import { View, Text, StyleSheet } from 'react-native' 
import Input from '@/components/input/input.component'
import Button from '@/components/base/button.component'
import {SectionHeader} from '@/styles/header/header.styling'

const UpdateProfile = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const inputs = [
    {
      label: 'Username',
      //placeholder: 'username...',
      inputHandler: (input) => {
        setUsername(input)
      }
    },
    {
      label: 'Password',
      //placeholder: 'password...',
      secureInput: true,
      inputHandler: (input) => {
        setPassword(input)
      }
    }
  ]

  const saveChanges = () => {
    console.log('username: ', username)
    console.log('password: ', password)
  }

  return (
    <View style={styles.container}>
      <SectionHeader >Profile</SectionHeader>
      <View >
        {inputs.map(input => <Input key={input.label} {...input} />)}
      </View>
      <Button text='SAVE CHANGES' color='blue' width='100%' pressHandler={saveChanges} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '80%'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  }
})

export default UpdateProfile
