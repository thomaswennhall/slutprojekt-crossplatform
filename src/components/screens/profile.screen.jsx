import React from 'react' 
import {SafeAreaView, StyleSheet} from 'react-native' 
import Profile from '@/components/profile/profile.component'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Profile />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column', 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%'
  }
})

export default ProfileScreen
