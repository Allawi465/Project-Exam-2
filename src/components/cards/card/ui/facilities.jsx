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
    <div className="venue-facilities mt-4">
      <h5>Home facilities</h5>
      <div className="venue-facilities-container mt-3">
        {breakfast ? (
          <div className="venue-facilities-icon">
            <div className="card-text-icon">
              <GiKnifeFork />
            </div>
            <p className="text-break">Breakfast included</p>
          </div>
        ) : (
          <div className="venue-facilities-icon">
            <div className="card-text-icon">
              <GiKnifeFork />
            </div>
            <p className="text-break">Breakfast not included</p>
          </div>
        )}
        {wifi ? (
          <div className="venue-facilities-icon">
            <div className="card-text-icon">
              <BsWifi />
            </div>
            <p className="text-break">Free WiFi</p>
          </div>
        ) : (
          <div className="venue-facilities-icon">
            <div className="card-text-icon">
              <BsWifi />
            </div>
            <p className="text-break">WiFi is not available</p>
          </div>
        )}
        {pets ? (
          <div className="venue-facilities-icon">
            <div className="card-text-icon">
              <MdPets />
            </div>
            <p className="text-break">Pets allowed</p>
          </div>
        ) : (
          <div className="venue-facilities-icon">
            <div className="card-text-icon">
              <MdPets />
            </div>
            <p className="text-break">Pets not allowed</p>
          </div>
        )}
        {parking ? (
          <div className="venue-facilities-icon">
            <div className="card-text-icon">
              <AiFillCar />
            </div>
            <p className="text-break">Free Parking</p>
          </div>
        ) : (
          <div className="venue-facilities-icon">
            <div className="card-text-icon">
              <AiFillCar />
            </div>
            <p className="text-break">No free parking available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VenueFacilities;
