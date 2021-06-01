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

export default registerRootComponent(App);
