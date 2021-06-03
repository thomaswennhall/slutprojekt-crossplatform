import React from "react";
import { registerRootComponent } from "expo";
import Navigation from "./navigation/navigation";
import { AuthContextProvider } from "./store/authContext";
import Test from '@/test'
import Theme from '@/styles/theme'
const App = () => {
   return (
      <AuthContextProvider>
         <Navigation />
    <Theme>
      <Test color="blue" alignSelf="flex-end" />
    </Theme>
      </AuthContextProvider>
   );
};


export default registerRootComponent(App)
