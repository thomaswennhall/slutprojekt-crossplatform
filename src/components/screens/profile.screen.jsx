import React from 'react' 
import {SafeAreaView, StyleSheet} from 'react-native' 
import UpdateProfile from '@/components/updateProfile/update-profile.component'
import DashboardProfile from '@/components/dashboard/profile/profile.component'

const ProfileScreen = () => {
  const user = {
    username: 'thomas',
    role: 'admin'
  }

  return (
    <SafeAreaView style={styles.container}>
      <DashboardProfile {...user} />
      <UpdateProfile />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column', 
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%'
  }
})

export default ProfileScreen
