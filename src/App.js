<<<<<<< HEAD
import React from "react";
import { registerRootComponent } from "expo";
import Navigation from "./navigation/navigation";
import { AuthContextProvider } from "./store/authContext";
const App = () => {
   return (
      <AuthContextProvider>
         <Navigation />
      </AuthContextProvider>
   );
};
=======
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
>>>>>>> style-test

export default registerRootComponent(App)
