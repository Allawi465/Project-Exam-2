import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookBtn, DeletingBtn, UpdateBtn } from '../../../../style/buttons';
import { AuthContext } from '../../../../api';
import { load } from '../../../../utils/localStorage';
import { useModel } from '../../../../hooks';
import DeleteVenuesModel from '../../../models/venue';
/**
 * A component that render the rental price of a venue and provides a button to rent it
 * @component
 * @param {Object} props The component props
 * @param {number} props.price The price of the venue rental
 * @returns {React.ReactElement} return venue price and a button to rent it as a component
 * @example
 * <Rent price={props.price} />
 */

function Rent({ price, id, ownerName }) {
  const { dataLogin } = useContext(AuthContext);
  const { handleOpenDelete, handleCloseDelete, showDeleteModel, deleteId } =
    useModel();
  const name = (dataLogin && dataLogin.name) || load('user')?.name || '';

  const navigate = useNavigate();

  const handleDeleteVenue = () => {
    handleCloseDelete();
    navigate(`/profile/${ownerName}`);
  };

  return (
    <div className="venue-prices mb-2">
      <div className="venue-prices-container">
        <p className="venue-prices-container-price">
          ${price}
          <span className="venue-prices-container-price-night">/Night</span>
        </p>
        <span>Payment estimation</span>
      </div>
      {ownerName === name ? (
        <div className="d-flex gap-2 mt-3">
          <div>
            <DeletingBtn className="mt-2" onClick={() => handleOpenDelete(id)}>
              Delete
            </DeletingBtn>
          </div>
          <div>
            <UpdateBtn className="mt-2" as={Link} to={`/update/${id}`}>
              Update venue
            </UpdateBtn>
            <DeleteVenuesModel
              show={showDeleteModel}
              onClose={handleDeleteVenue}
              id={deleteId}
            />
          </div>
        </div>
      ) : (
        <div className="mt-2">
          <BookBtn className="mt-2" as={Link} to={`/booking/${id}`}>
            Rent
          </BookBtn>
        </div>
      )}
    </div>
  );
}

export default Rent;
