import React from "react";
import { registerRootComponent } from "expo";
import Navigation from "./navigation/navigation";
import { AuthContextProvider } from "./store/authContext";
import { UserContextProvider } from "./store/userContext";
import Test from "@/test";
import Theme from "@/styles/theme";

const App = () => {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <Theme>
          <Navigation />
          {/* <Test color="blue" alignSelf="flex-end" /> */}
        </Theme>
      </UserContextProvider>
    </AuthContextProvider>
  );
};

export default registerRootComponent(App);
