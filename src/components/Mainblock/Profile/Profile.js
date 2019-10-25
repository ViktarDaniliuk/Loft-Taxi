import React from 'react';
import ProfileMod from './Profile.module.css';
import ProfilePopup from './ProfilePopup/ProfilePopup';

const Profile = (props) => {
   // console.log('Profile props: ', props);
   return (
      <div className={ ProfileMod.profile }>
         <div>
            <ProfilePopup handleChangeCurrentTab={ props.handleChangeCurrentTab } handleChangePaymentData={ props.handleChangePaymentData } />
         </div>
      </div>
   );
}

export default Profile;