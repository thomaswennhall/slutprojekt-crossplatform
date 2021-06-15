import React, { useState } from "react";
import * as API from "../api/index";
const AuthContext = React.createContext();
import * as SecureStore from 'expo-secure-store'

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");


  const signIn = async (username, password) => {
    try {
      const token = await API.signIn(username, password);
      await saveToken('token', token)
      setToken(token);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const clearToken =  async () => {
    setToken("");
    await SecureStore.deleteItemAsync('token');
  }

  const saveToken = async (token, value) => {
    await SecureStore.setItemAsync(token, value)
  }

  const getValueForToken = async () => {
    const result = await SecureStore.getItemAsync('token');
    const validToken = await checkToken(result)
    if (result && validToken) {
      setToken(result)
    }
  }

  const checkToken = async (token) => {
      try {
        const result = await API.getUserProfile(token)
        return result
      } catch(err) {
        return null
      }
  }


  return (
    // skicka in sign in token => ? till alla barn
    // state i context eller sparar state & kolla om finns i secure finns
    // uppdatera secureStore i context
    // alla komponenter som använder token
    // ändra från token från state eller från secure store
    // onödigt drygt? ändra state i auth context så borde allt följa med
    // landing ska kolla om man är inloggad
    // kan man simulera att man stänger ner appen och sparar secureStore?
    <AuthContext.Provider value={{ getValueForToken, token, signIn, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
