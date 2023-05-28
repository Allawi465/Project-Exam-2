import { BsWifi } from 'react-icons/bs';
import { GiKnifeFork } from 'react-icons/gi';
import { MdPets } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';

/**
 * Component that render the home facilities of venues, including breakfast, WiFi, pets, and parking information
 * @component
 * @param {Object} props The component props
 * @param {boolean} props.breakfast Indicates if the venue provides breakfast
 * @param {boolean} props.wifi Indicates if the venue provides free WiFi
 * @param {boolean} props.pets Indicates if pets are allowed in the venue
 * @param {boolean} props.parking Indicates if free parking is available at the venue
 * @returns {React.ReactElement} return VenuesFacilities component
 * @example
 * <VenuesFacilities breakfast={breakfast} wifi={wifi} pets={pets} parking={parking} />
 */

function VenuesFacilities({ breakfast, wifi, pets, parking }) {
  return (
    <div>
      {breakfast && (
        <div className="card-text-icon">
          <GiKnifeFork />
        </div>
      )}
      {wifi && (
        <div className="card-text-icon ms-1">
          <BsWifi />
        </div>
      )}
      {pets && (
        <div className="card-text-icon ms-1">
          <MdPets />
        </div>
      )}
      {parking && (
        <div className="card-text-icon ms-1">
          <AiFillCar />
        </div>
      )}
    </div>
  );
}

export default VenuesFacilities;
