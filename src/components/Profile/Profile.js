import React from 'react';
import ProfileMod from './Profile.module.css';
import { WrappedProfilePopup } from './ProfilePopup/ProfilePopup';

const Profile = () => {
   // console.log('Profile props: ', props);
   console.log('rendered Profile');
   return (
      <div className={ ProfileMod.profile }>
         <div>
            <WrappedProfilePopup />
         </div>
      </div>
   );
};

export default Profile;