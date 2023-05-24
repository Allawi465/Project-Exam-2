import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useHelmet } from '../../hooks';
import { UpdateBtn } from '../../style/buttons';
import { BsChevronRight } from 'react-icons/bs';

function RouteNotFound() {
  const notFoundMeta = useHelmet({
    title: ` 404 page | Holidaze`,
    description: `Oops! The page you are looking for could not be found. Try get to the home page`,
    keywords:
      'Holidaze, venue bookings, rentals, venue availability, venue location, 404 page',
  });
  return (
    <>
      {notFoundMeta}
      <Container className="text-black">
        <div style={{ margin: '30px auto', maxWidth: '500px' }}>
          <h1 className="h2">Oops! Page not found.</h1>
          <p className="my-3">
            We're sorry, but the page you are looking for could not be found.
            Please check the URL or go back to the homepage.
          </p>
          <div className="mt-1 d-flex">
            <UpdateBtn as={Link} to={'/'}>
              Return Home <BsChevronRight className="mt-1 ms-2" />
            </UpdateBtn>
          </div>
        </div>
      </Container>
    </>
  );
}

export default RouteNotFound;
