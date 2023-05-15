import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../api';
import { load } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import { useHelmet } from '../../hooks';

function Profile() {
  const { dataLogin } = useContext(AuthContext);
  const { name } = dataLogin ? dataLogin : load('user');

  const token = dataLogin ? dataLogin : load('token');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const ProfileMeta = useHelmet({
    title: `${name} profile | Holidaze`,
    description: `View and manage your Holidaze profile. See your bookings, reviews, and rental properties all in one place.`,
    keywords: 'Holidaze, profile, bookings, reviews, rentals',
  });

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    } else {
      navigate('/', { replace: true });
    }
  }, [navigate, token]);

  return (
    <>
      {ProfileMeta}
      {loggedIn && (
        <div className="text-black">Profile page content goes here</div>
      )}
    </>
  );
}

export default Profile;
