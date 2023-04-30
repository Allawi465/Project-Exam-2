import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import SearchUi from '../../components/search';
import Venue from '../../components/cards/cards/cards';
import Hero from '../../components/hero';

function Home() {

    return (
        <div>
            <Helmet>
                <title>Holidaze: plan your next adventure with ease</title>
                <meta
                    name="description" content="Holidaze makes vacation planning stress-free. Find, book, and manage your rental with ease and enjoy your trip without worries." />
                <meta name="keywords" content="travel, vacation, holiday, rental, book, rent out, host, homes, apartments, bookings, reviews" />
            </Helmet>
            <Hero />
            <SearchUi />
            <Container className='cards'>
                <Row className='g-3'>
                    <Venue />
                </Row>
            </Container>
        </div>
    );
}

export default Home;