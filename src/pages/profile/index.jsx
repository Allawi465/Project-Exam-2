import { useHelmet } from '../../hooks';
import { Profiles } from '../../components';

/**
 * Component for rendering profile page
 * @component
 * @property {function} useHelmet A function to show the meta and title
 * @property {function} Profiles A function to display profile by name
 * @returns {JSX.ReactElement} Profile page component
 */

function Profile() {
  const ProfileMeta = useHelmet({
    title: `Your profile | Holidaze`,
    description: `View and manage your Holidaze profile. See your bookings, and rental properties all in one place.`,
    keywords: 'Holidaze, profile, bookings, rentals',
  });

  return (
    <>
      {ProfileMeta}
      <Profiles />
    </>
  );
}

export default Profile;
