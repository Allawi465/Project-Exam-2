import { Card, Col } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai'
import { BsWifi } from 'react-icons/bs'
import { GiKnifeFork } from 'react-icons/gi'
import { MdPets } from 'react-icons/md'
import { AiFillCar } from 'react-icons/ai'
import Loading from '../../spinner';
import ErrorMessage from '../../alert';
import { Link } from 'react-router-dom';
import useGetApi from '../../../hooks/api/useGetApi';

function Venue() {
  
  const { data, isLoading, isError } = useGetApi('/venues?_owner=true&_bookings=true');

  if (isLoading) {
    return <div className='d-flex justify-content-center mt-4'><Loading /></div>;
  }

  if (isError) {
    return <div style={{ textAlign: 'center' }}><ErrorMessage variant="danger" text="we are aware of the issues with accessing Holidaze, our team is actively working on it." /></div>;
  }

  return (
    <>
      {data && data.length > 0 && data.map((venue) => (
        <Col xs={12} sm={6} md={4} lg={4}  key={venue.id}>
          <Card className='mt-2 mb-4'>
            <Card.Img
              variant="top"
              src={venue.media[0]}
            />
            <Card.Body>
              <div className='card-title mt-1'>
                <h5 className='card-title-title'>{venue.name}</h5>
                <div className='card-title-star'>
                  <AiFillStar size={18} />
                  <span className='card-title-rating ms-1'>
                    {venue.rating}
                  </span>
                </div>
              </div>
              <div className='card-text'>
                <div className='card-text-container'>
                  <div className='card-text-date'>Sep 10-10</div>
                  <div className='card-text-icon ms-2'><BsWifi /></div>
                  <div className='card-text-icon ms-1'><GiKnifeFork /></div>
                  <div className='card-text-icon ms-1'><MdPets /></div>
                  <div className='card-text-icon ms-1'><AiFillCar /></div>
                </div>
                <div className='card-text-prices'>
                  <div className='card-text-prices-container d-flex'>
                    <p className='card-text-prices-price'>${venue.price}</p>
                    <p className='card-text-prices-night'>/night</p>
                  </div>
                  <Link to={`/venue/${venue.id}`} className='card-text-prices-link mt-2 stretched-link'>View</Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default Venue;
