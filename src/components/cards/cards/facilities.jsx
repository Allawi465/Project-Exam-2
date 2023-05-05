import { BsWifi } from 'react-icons/bs';
import { GiKnifeFork } from 'react-icons/gi';
import { MdPets } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';

function VenuesFacilities(props) {
  return (
    <div>
      {props.breakfast && (
        <div className="card-text-icon ms-1">
          <GiKnifeFork />
        </div>
      )}
      {props.wifi && (
        <div className="card-text-icon ms-2">
          <BsWifi />
        </div>
      )}
      {props.pets && (
        <div className="card-text-icon ms-1">
          <MdPets />
        </div>
      )}
      {props.parking && (
        <div className="card-text-icon ms-1">
          <AiFillCar />
        </div>
      )}
    </div>
  );
}

export default VenuesFacilities;
