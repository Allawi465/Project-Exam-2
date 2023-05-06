import { BsWifi } from 'react-icons/bs';
import { GiKnifeFork } from 'react-icons/gi';
import { MdPets } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';

function VenuesFacilities({ breakfast, wifi, pets, parking }) {
  return (
    <div>
      {breakfast && (
        <div className="card-text-icon ms-1">
          <GiKnifeFork />
        </div>
      )}
      {wifi && (
        <div className="card-text-icon ms-2">
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
