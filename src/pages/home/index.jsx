import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Venues, Hero, SearchUi } from '../../components';
import { useHelmet } from '../../hooks';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import format from 'date-fns/format';

/**
 * Component for rendering the home page
 * @component
 * @property {function} useHelmet A function to show the meta and title
 * @property {function} handleSelectDates A The function to add dates
 * @property {function} handleSelectGuests A The function to add guests
 * @property {function} handleClearDates A The function to clear dates
 * @property {function} handleClearGuests A The function to clear guests
 * @property {function} Hero A function to display Hero component
 * @property {function} Venues A function to render venues component
 * @property {function} SearchUi A function to search and filter the venues
 * @returns {JSX.ReactElement} Home page component
 */

function Home() {
  const [selectedDates, setSelectedDates] = useState(null);
  const [guests, setGuests] = useState(null);
  const [search, setSearch] = useState('');

  const handleSelectDates = (dates) => {
    setSelectedDates(dates);
  };

  const handleSelectGuests = (numGuests) => {
    setGuests(numGuests);
  };

  const handleClearDates = () => {
    setSelectedDates(null);
  };

  const handleClearGuests = () => {
    setGuests(null);
  };

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
      <SearchUi
        onSelectDates={handleSelectDates}
        onSelectGuests={handleSelectGuests}
        onChangeSearch={setSearch}
      />
      <Container>
        <div className="d-flex flex-wrap gap-2 mb-2">
          {selectedDates && (
            <div className="selected-dates" onClick={handleClearDates}>
              <p className="mb-0">
                Dates: {format(selectedDates[0], 'dd.MM.yy')} -{' '}
                {format(selectedDates[1], 'dd.MM.yy')}
              </p>
              <AiOutlineCloseCircle size={20} />
            </div>
          )}

          {guests && (
            <div className="selected-dates" onClick={handleClearGuests}>
              <p className="mb-0">Guests: {guests}</p>
              <AiOutlineCloseCircle size={20} />
            </div>
          )}
        </div>
      </Container>
      <Container className="cards">
        <Row>
          <Venues
            selectedDates={selectedDates}
            guests={guests}
            search={search}
          />
        </Row>
      </Container>
    </>
  );
}

export default Home;
