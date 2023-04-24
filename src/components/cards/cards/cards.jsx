import { Card, Col } from 'react-bootstrap';
import hero from "../../../images/hero.jpg"
import { AiFillStar } from 'react-icons/ai'
import { BsWifi } from 'react-icons/bs'
import { GiKnifeFork } from 'react-icons/gi'
import { MdPets } from 'react-icons/md'
import { AiFillCar } from 'react-icons/ai'

function Venue() {
  return (
    <Col> 
      <Card className='my-2'>
        <Card.Img variant="top" src={hero} />
        <Card.Body>
          <div className='card-title my-2 mx-1'>
            <Card.Title className='card-title'>Stryn, Norge</Card.Title>
            <div className='card-title-star'>
              <AiFillStar size={16} />
              <span className='card-title-rating ms-1'>
                4,9
              </span>
            </div>
          </div>
          <div className='card-text'>
            <div className='card-text-container'>
              <div className='card-text-date'>Sep 19-22 </div>
              <div className='card-text-icon ms-2'><BsWifi /></div>
              <div className='card-text-icon ms-1'><GiKnifeFork /></div>
              <div className='card-text-icon ms-1'><MdPets /></div>
              <div className='card-text-icon ms-1'><AiFillCar /></div>
            </div>
            <div className='card-text-prices mt-2'>
              <span className='card-text-prices-price'>$599</span> <span className='card-text-price-night mt-2'>/night</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Venue;