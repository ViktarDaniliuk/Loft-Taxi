import React from 'react';
import ProfileMod from './Profile.module.css';
import { WrappedProfilePopup } from './ProfilePopup/ProfilePopup';

const Profile = () => {
   console.log('Profile rendered: ', new Date().getHours(), ':', new Date().getMinutes(), ':', new Date().getSeconds(), ':', new Date().getMilliseconds());
   return (
      <div className={ ProfileMod.profile }>
         <div>
            <WrappedProfilePopup />
         </div>
      </div>
   );
};

export default Profile;