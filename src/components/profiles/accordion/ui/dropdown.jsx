import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DeleteVenuesModel from '../../../models/venue';
import { useModel } from '../../../../hooks/index';
import { SlOptions } from 'react-icons/sl';

function SettingsVenue({ id }) {
  const { handleOpenDelete, handleCloseDelete, showDeleteModel, deleteId } =
    useModel();
  return (
    <Dropdown className="d-inline venue-settings">
      <Dropdown.Toggle
        id="dropdown-autoclose-true"
        variant="Link"
        className="venueDropdown"
      >
        <SlOptions />
      </Dropdown.Toggle>
      <Dropdown.Menu className="venue-settings">
        <Dropdown.Item as={Link} to={`/update/${id}`}>
          Update Venue
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => handleOpenDelete(id)}>
          Delete Venue
        </Dropdown.Item>
        <DeleteVenuesModel
          show={showDeleteModel}
          onClose={handleCloseDelete}
          id={deleteId}
        />
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SettingsVenue;
