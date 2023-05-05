import { BsWifi } from 'react-icons/bs';
import { GiKnifeFork } from 'react-icons/gi';
import { MdPets } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';

function VenueFacilities(props) {
  return (
    <div className="venue-facilities">
      <h5>Home facilities</h5>
      <div className="mt-3 d-flex gap-2" style={{ flexDirection: 'column' }}>
        {props.breakfast ? (
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
        {props.wifi ? (
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
        {props.pets ? (
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
        {props.parking ? (
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
