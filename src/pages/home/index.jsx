import { Container, Row } from 'react-bootstrap';
import { Venues, Hero, SearchUi } from '../../components';
import { useHelmet } from '../../hooks';

function Home() {
  const homeMeta = useHelmet({
    title: 'Home | Holidaze plan your next adventure with ease',
    description:
      'Holidaze makes vacation planning stress-free. Find, book, and manage your rental with ease and enjoy your trip without worries.',
    keywords:
      'travel, vacation, holiday, rental, book, rent out, host, homes, apartments, bookings',
  });
  return (
    <>
      {homeMeta}
      <Hero />
      <SearchUi />
      <Container className="cards">
        <Row>
          <Venues />
        </Row>
      </Container>
    </>
  );
}

export default Home;
