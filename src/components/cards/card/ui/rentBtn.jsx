import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
 * @param {id} props.price The id of the venue
 * @param {string} props.ownerName The name of the venue owner
 * @property {function} useModel A custom hook that provides the functionality for showing the login and sign up modals
 * @property {boolean} showDeleteModel A boolean that determines whether to show the venue delete modal
 * @property {function} handleOpenDelete A function to handle showing the delete modal
 * @property {function} handleCloseDelete A function to handle closing the delete modal
 * @property {function} deleteId A function to handle id for the delete venue
 * @returns {React.ReactElement} return venue price and a button to rent it as a component
 * @example
 * <Rent price={price} ownerName={ownerName} id={id} />
 */

function Rent({ price, id, ownerName }) {
  const { dataLogin } = useContext(AuthContext);
  const { handleOpenDelete, handleCloseDelete, showDeleteModel, deleteId } =
    useModel();
  const name = (dataLogin && dataLogin.name) || load('user')?.name || '';

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
        <div className="setting-btns d-flex gap-2 mt-2">
          <div className="update-btn">
            <UpdateBtn className="mt-2" as={Link} to={`/update/${id}`}>
              Update venue
            </UpdateBtn>
          </div>
          <div>
            <DeletingBtn className="mt-2" onClick={() => handleOpenDelete(id)}>
              Delete
            </DeletingBtn>
            <DeleteVenuesModel
              show={showDeleteModel}
              onClose={handleCloseDelete}
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
