import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DeleteVenuesModel from '../../../models/venue';
import { useModel } from '../../../../hooks/index';
import { SlOptions } from 'react-icons/sl';

/**
 * A component that renders the settings for a venue
 * @component
 * @param {Object} props The component props
 * @param {string} props.id The ID of the venue
 * @property {function} useModel A custom hook that provides the functionality for showing the setting avatar model
 * @property {function} handleOpenSettings A function to handle showing the setting model
 * @property {function} handleCloseSettings A function to handle closing setting model
 * @returns {React.ReactElement} The settings venue component
 * @example
 * <SettingsVenue id={id} />
 */

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
