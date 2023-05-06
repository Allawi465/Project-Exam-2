import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../api';
import { load } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Profile() {
  const { dataLogin } = useContext(AuthContext);
  const token = dataLogin ? dataLogin : load('token');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    } else {
      navigate('/', { replace: true });
    }
  }, [navigate, token]);

  return (
    <>
      <Helmet>
        <title>Your Profile | Holidaze</title>
        <meta
          name="description"
          content="View and manage your Holidaze profile. See your bookings, reviews, and rental properties all in one place."
        />
        <meta
          name="keywords"
          content="Holidaze, profile, bookings, reviews, rentals"
        />
      </Helmet>
      {loggedIn && (
        <div className="text-black">Profile page content goes here</div>
      )}
    </>
  );
}

export default Profile;
