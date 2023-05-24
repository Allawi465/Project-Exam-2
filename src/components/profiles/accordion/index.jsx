import Accordion from 'react-bootstrap/Accordion';
import { YourBookings, YourVenues } from './ui';

function AccordionProfile({ bookings, venues, venueManager, name, isLogName }) {
  return (
    <Accordion defaultActiveKey={['0']} flush alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Your bookings</Accordion.Header>
        <YourBookings bookings={bookings} name={name} isLogName={isLogName} />
      </Accordion.Item>
      {venueManager === true && (
        <>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Your venues</Accordion.Header>
            <YourVenues venues={venues} name={name} isLogName={isLogName} />
          </Accordion.Item>
        </>
      )}
    </Accordion>
  );
}

export default AccordionProfile;
