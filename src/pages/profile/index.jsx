import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../api';
import { load } from '../../utils/localStorage';
import { useHelmet } from '../../hooks';
import { Profiles } from '../../components';

function Profile() {
  const ProfileMeta = useHelmet({
    title: `Your profile | Holidaze`,
    description: `View and manage your Holidaze profile. See your bookings, reviews, and rental properties all in one place.`,
    keywords: 'Holidaze, profile, bookings, reviews, rentals',
  });

  return (
    <div>
      {ProfileMeta}
      <Profiles />
    </div>
  );
}

export default Profile;
