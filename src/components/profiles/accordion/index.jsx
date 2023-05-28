import Accordion from 'react-bootstrap/Accordion';
import { YourBookings, YourVenues } from './ui';

/**
 * A component that displays the users bookings and venues in an accordion layout
 * @component
 * @param {Object} props The component props
 * @param {Array} props.bookings The array of bookings
 * @param {Array} props.venues The array of venues
 * @param {boolean} props.venueManager Indicates if the user is a venue manager
 * @param {string} props.name The name of the user
 * @param {string} props.isLogName the name of the login user
 * @returns {React.ReactElement} The AccordionProfile component
 * @example
 * <AccordionProfile
 *  venues={venues}
 *  name={name}
 *  venueManager={venueManager}
 *  isLogName={isLogName}
 *  bookings={bookings} />
 */

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
