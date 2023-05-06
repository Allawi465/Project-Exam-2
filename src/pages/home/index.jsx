import { Container, Row } from 'react-bootstrap';
import { Venues, Hero, SearchUi } from '../../components';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>Holidaze: plan your next adventure with ease</title>
        <meta
          name="description"
          content="Holidaze makes vacation planning stress-free. Find, book, and manage your rental with ease and enjoy your trip without worries."
        />
        <meta
          name="keywords"
          content="travel, vacation, holiday, rental, book, rent out, host, homes, apartments, bookings, reviews"
        />
      </Helmet>
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
