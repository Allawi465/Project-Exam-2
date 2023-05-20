import { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useGetApi } from '../../hooks/index';
import { Loading, ErrorMessage } from '../index';
import { AuthContext } from '../../api';
import { load } from '../../utils/localStorage';
import AccordionProfile from './accordion';
import SettingsAvatarBtn from './accordion/overlay';

function Profiles() {
  const { dataLogin, viewBookings, setBookings } = useContext(AuthContext);
  const { name } = load('user') || [];
  const token = dataLogin?.token || load('token');
  const avatar = load('avatar') || dataLogin;
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const { data, isLoading, isError } = useGetApi(
    `/profiles/${name}?_owner=true&_bookings=true`
  );

  const { name: userName, email, bookings, venueManager } = data;

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
      setBookings(bookings);
    } else {
      navigate('/', { replace: true });
      setLoggedIn(false);
    }
  }, [navigate, token, bookings, setBookings]);

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
                <div className="profile-avatar-container">
                  <img
                    src={avatar}
                    alt={userName}
                    width={100}
                    height={100}
                    className="rounded-circle"
                  />
                  <SettingsAvatarBtn />
                </div>
                <h1 className="profile-name">{userName}</h1>
              </div>
            </div>
            <span className="profile-email">{email}</span>
          </div>
          <AccordionProfile
            bookings={viewBookings}
            venueManager={venueManager}
          />
        </Container>
      )}
    </>
  );
}

export default Profiles;
