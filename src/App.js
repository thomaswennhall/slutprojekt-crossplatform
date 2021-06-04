import React from 'react'
import { registerRootComponent } from 'expo'
import Navigation from './navigation/navigation'
import { AuthContextProvider } from './store/authContext'
import Theme from '@/styles/theme'
import { View, Text } from 'react-native'
import {
  useFonts,
  NotoSansJP_100Thin,
  NotoSansJP_300Light,
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
  NotoSansJP_700Bold,
  NotoSansJP_900Black
} from '@expo-google-fonts/dev'

const App = () => {
  let [fontsLoaded] = useFonts({
    NotoSansJP_100Thin,
    NotoSansJP_300Light,
    NotoSansJP_400Regular,
    NotoSansJP_500Medium,
    NotoSansJP_700Bold,
    NotoSansJP_900Black
  })
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>loading...</Text>
      </View>
    )
  } else {
    return (
      <AuthContextProvider>
        <Theme>
          <Navigation />
        </Theme>
      </AuthContextProvider>
    )
  }
}

export default registerRootComponent(App)
