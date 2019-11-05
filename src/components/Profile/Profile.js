import React from 'react';
import ProfileMod from './Profile.module.css';
import ProfilePopup from './ProfilePopup/ProfilePopup';
import PropTypes from 'prop-types';

const Profile = ({ handleChangePaymentData }) => {
   // console.log('Profile props: ', props);
   return (
      <div className={ ProfileMod.profile }>
         <div>
            <ProfilePopup handleChangePaymentData={ handleChangePaymentData } />
         </div>
      </div>
   );
};

Profile.propTypes = {
   handleChangePaymentData: PropTypes.func
};

export default Profile;