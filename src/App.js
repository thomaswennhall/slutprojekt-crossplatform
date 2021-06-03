import React from 'react'
import { registerRootComponent } from 'expo'
import Navigation from './navigation/navigation'
import { AuthContextProvider } from './store/authContext'
import Theme from '@/styles/theme'

const App = () => {
  return (
    <AuthContextProvider>
      <Theme>
        <Navigation />
      </Theme>
    </AuthContextProvider>
  )
}

export default registerRootComponent(App)
