import axios from 'axios';
import React, { useEffect } from 'react';
import DashboardWrapper from '../../layouts/dashboard'
import TabPills from './TabPills'

const ProfilePage = () => {
  
  return (

   <DashboardWrapper>
       <TabPills/>
   </DashboardWrapper>
  )
}

export default ProfilePage