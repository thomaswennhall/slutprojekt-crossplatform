import React from 'react' 
import {KeyboardScreen} from '@/styles/screen/keyboardScreen'
import UpdateProfile from '@/components/updateProfile/update-profile.component'
import DashboardProfile from '@/components/dashboard/profile/profile.component'

const ProfileScreen = () => {
  const user = {
    username: 'thomas',
    role: 'admin'
  }

  return (
    <KeyboardScreen behavior="padding" >
      <DashboardProfile {...user} />
      <UpdateProfile />
    </KeyboardScreen>
  )
}

export default ProfileScreen
