import { Link, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useGetApi, useHelmet } from '../../hooks/index';
import { Venue, Loading, ErrorMessage } from '../../components';
import { BsChevronLeft } from 'react-icons/bs';

function VenueById() {
  let { id } = useParams();

  const { data, isLoading, isError } = useGetApi(
    `/venues/${id}?_owner=true&_bookings=true`
  );

  const title = data.name ? `${data.name} | Holidaze` : 'Venue | Holidaze';

  const VenueByIdMeta = useHelmet({
    title,
    description: `Explore and book ${data.name} on Holidaze. View photos, read reviews, and check availability to plan your next event.`,
    keywords: 'Holidaze, venue, bookings, reviews, rentals',
  });

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
      {VenueByIdMeta}
      <Container className="mt-3">
        <div>
          <Link className="return-Link" to={'/'}>
            <BsChevronLeft className="mb-1 me-2" /> Return Home
          </Link>
        </div>
        <Venue data={data} />
      </Container>
    </>
  );
}

export default VenueById;
