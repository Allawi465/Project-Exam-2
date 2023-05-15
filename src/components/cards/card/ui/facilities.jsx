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
 * @returns {React.ReactElement} return VenueFacilities component
 * @example
 * <VenueFacilities breakfast={props.breakfast} wifi={props.wifi} pets={props.pets} parking={props.parking} />
 */

function VenueFacilities({ breakfast, wifi, pets, parking }) {
  return (
    <div className="venue-facilities">
      <h5>Home facilities</h5>
      <div className="mt-3 d-flex gap-2" style={{ flexDirection: 'column' }}>
        {breakfast ? (
          <div className="d-flex gap-2">
            <div className="card-text-icon">
              <GiKnifeFork />
            </div>
            <p>Breakfast</p>
          </div>
        ) : (
          <div className="d-flex gap-2">
            <div className="card-text-icon">
              <GiKnifeFork />
            </div>
            <p>Breakfast not included</p>
          </div>
        )}
        {wifi ? (
          <div className="d-flex gap-2">
            <div className="card-text-icon">
              <BsWifi />
            </div>
            <p>Free WiFi</p>
          </div>
        ) : (
          <div className="d-flex gap-2">
            <div className="card-text-icon">
              <BsWifi />
            </div>
            <p>WiFi is not available for free</p>
          </div>
        )}
        {pets ? (
          <div className="d-flex gap-2">
            <div className="card-text-icon">
              <MdPets />
            </div>
            <p>Pets allowed</p>
          </div>
        ) : (
          <div className="d-flex gap-2">
            <div className="card-text-icon">
              <MdPets />
            </div>
            <p>Pets not allowed</p>
          </div>
        )}
        {parking ? (
          <div className="d-flex gap-2">
            <div className="card-text-icon">
              <AiFillCar />
            </div>
            <p>Free Parking</p>
          </div>
        ) : (
          <div className="d-flex gap-2">
            <div className="card-text-icon">
              <AiFillCar />
            </div>
            <p>No free parking available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VenueFacilities;
