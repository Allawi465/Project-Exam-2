import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useGetApi } from '../../hooks/index';
import { Loading, ErrorMessage } from '../index';
import { AuthContext } from '../../api';
import { load } from '../../utils/localStorage';
import AccordionProfile from './accordion';
import { SettingsAvatarBtn } from './accordion/ui';
import defaultAvatar from '../../images/defaultAvatar.jpg';

/**
 * A component that displays user profiles, including their avatar, name, email, bookings, and venues
 * @component
 * @param {Object} props The component props
 * @param {String} props.name The name of the profile
 * @param {String} props.email The email of the profile user
 * @param {string} props.avatar The URL of the profile user avatar image
 * @param {boolean} props.venueManager state of the profile venue manager
 * @param {Array} props.bookings The array of profile bookings
 * @param {Array} props.venues The array of profile venues
 * @property {function} AuthContext getting the authentication state from AuthContext
 * @property {function} load authentication state from local Storage
 * @property {function} useGetApi A hook for get API
 * @property {function} ErrorMessage A function to display error message if api return error
 * @property {function} Loading A function to display spinner when api load
 * @returns {React.ReactElement} The Profiles component
 * @example
 * <Profile />
 */

function Profiles() {
  let { name } = useParams();
  const { dataLogin, viewBookings, setBookings, viewVenues, setVenues } =
    useContext(AuthContext);
  const token = dataLogin?.token || load('token');
  const avatar = load('avatar') || dataLogin;
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const isLogName = (dataLogin && dataLogin.name) || load('user')?.name;

  const { data, isLoading, isError } = useGetApi(
    `/profiles/${name}?_bookings=true&_venues=true`
  );

  const {
    name: userName,
    email,
    bookings,
    venues,
    avatar: userAvatar,
    venueManager,
  } = data;

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
      setBookings(bookings);
      setVenues(venues);
    } else {
      navigate('/', { replace: true });
      setLoggedIn(false);
    }
  }, [navigate, token, bookings, setBookings, setVenues, venues]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center mt-4">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="errorMessage">
        <ErrorMessage
          variant="danger"
          text="we are aware of the issues with accessing Holidaze, our team is actively working on it."
        />
      </div>
    );
  }

  return (
    <>
      {loggedIn && (
        <Container>
          <div className="profile my-4">
            <div className="profile-container">
              <div className="profile-avatar">
                {isLogName === name ? (
                  <div className="profile-avatar-container">
                    <img
                      src={avatar || defaultAvatar}
                      alt={userName}
                      width={100}
                      height={100}
                      className="rounded-circle"
                      onError={(e) => {
                        e.target.src = defaultAvatar;
                      }}
                    />
                    <SettingsAvatarBtn />
                  </div>
                ) : (
                  <div className="profile-avatar-container">
                    <img
                      src={userAvatar || defaultAvatar}
                      alt={userName}
                      width={100}
                      height={100}
                      className="rounded-circle"
                      onError={(e) => {
                        e.target.src = defaultAvatar;
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <h1 className="profile-name h3 text-capitalize mb-0 mt-1">
              {userName}
            </h1>
            <span className="profile-email">{email}</span>
          </div>
          <AccordionProfile
            bookings={viewBookings}
            venueManager={venueManager}
            venues={viewVenues}
            name={name}
            isLogName={isLogName}
          />
        </Container>
      )}
    </>
  );
}

export default Profiles;
