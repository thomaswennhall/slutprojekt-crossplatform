import React, { useState } from 'react'
import { View } from 'react-native'

import Input from '../input/input'
import Button from '../button/button'

const Login = () => {

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

  const showIt = () => {
    console.log(username, password)
  }

  return (
    <View>
      {
        inputs.map(input => <Input key={input.label} {...input} />)
      }
      <Button text="SIGN IN" pressHandler={showIt}/>
    </View>
  )
}

module.exports = Login
