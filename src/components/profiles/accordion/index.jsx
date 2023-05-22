import Accordion from 'react-bootstrap/Accordion';
import { YourBookings, YourVenues } from './ui';

function AccordionProfile({ bookings, venues, venueManager }) {
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
            <YourVenues venues={venues} />
          </Accordion.Item>
        </>
      ) : null}
    </Accordion>
  );
}

export default AccordionProfile;
