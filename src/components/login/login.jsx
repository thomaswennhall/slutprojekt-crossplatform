import React from 'react'
import { View } from 'react-native'

import Input from '../input/input'
import Button from '../button/button'

const Login = () => {
  const inputs = [
    {
      label: 'Username',
      //placeholder: 'username...'
    },
    {
      label: 'Password',
      //placeholder: 'password...',
      secureInput: true
    }
  ]
  return (
    <View>
      {
        inputs.map(input => <Input {...input} />)
      }
      <Button text="SIGN IN" />
    </View>
  )
}

module.exports = Login
