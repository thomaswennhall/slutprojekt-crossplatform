import React from 'react'
import { registerRootComponent } from 'expo'
import Test from '@/test'
import Theme from '@/styles/theme'

const App = () => {
  return (
    <Theme>
      <Test color="blue" alignSelf="flex-end" />
    </Theme>
  )
}

export default registerRootComponent(App)
