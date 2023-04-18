import React from 'react';
import { Helmet } from 'react-helmet-async';


function Profile() {
    return (
        <div>
            <Helmet>
                <title>Your Profile | Holidaze</title>
                <meta name="description" content="View and manage your Holidaze profile. See your bookings, reviews, and rental properties all in one place." />
                <meta name="keywords" content="Holidaze, profile, bookings, reviews, rentals" />
            </Helmet>
            <div>
            hei
            </div>
        </div>
    );
}

export default Profile;