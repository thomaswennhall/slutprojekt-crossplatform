import React, { useState } from 'react' 
import { View, StyleSheet } from 'react-native' 
import Input from '@/components/input/input.component'
import Button from '@/components/button/button.component'

const Profile = () => {
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
      <View >
        {inputs.map(input => <Input key={input.label} {...input} />)}
      </View>
      <Button text='SAVE CHANGES' pressHandler={saveChanges} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%'
  }
})

export default Profile
