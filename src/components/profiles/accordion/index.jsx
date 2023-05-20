import Accordion from 'react-bootstrap/Accordion';
import YourBookings from './itemOne';

function AccordionProfile({ bookings, venues, bookingsVenue, venueManager }) {
  return (
    <Accordion defaultActiveKey={['0']} flush alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Your bookings</Accordion.Header>
        <YourBookings bookings={bookings} />
      </Accordion.Item>
      {venueManager ? (
        <>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Your venues</Accordion.Header>
            <Accordion.Body>{/* Venue content */}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Bookings of your venues</Accordion.Header>
            <Accordion.Body>{/* Bookings content */}</Accordion.Body>
          </Accordion.Item>
        </>
      ) : null}
    </Accordion>
  );
}

export default AccordionProfile;
