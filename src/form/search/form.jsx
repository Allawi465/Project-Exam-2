import { Form, InputGroup } from 'react-bootstrap';
import { GoSettings } from 'react-icons/go';
import { RiSearchLine } from 'react-icons/ri';
import { Calender } from '../../components/index';

/**
 * A component for displaying a search form with filters
 * @component
 * @param {object} props Component props
 * @param {Function} props.onFormSubmit Handler for form submission
 * @param {Function} props.handleSearchChange Handler for search input change
 * @param {Function} props.handleFilter Handler displaying the filer calender
 * @param {boolean} props.showContent indicating whether to show the content of the form
 * @param {Function} props.handleSelect Handler for date selection in the calendar
 * @param {Date} props.selectedDates Array of selected dates in the calendar
 * @param {string} props.formError Error message to display in the form
 * @param {Function} props.removeGuests Handler for removing guests
 * @param {number} props.guests Number of guests
 * @param {Function} props.addGuests Handler for adding guests
 * @param {Function} props.handleCloseForm Handler for closing the form
 * @returns {JSX.ReactElement} The FormSearchFilter component
 * @example
 * <FormSearchFilter
 *  onFormSubmit={onFormSubmit}
 *  handleSearchChange={handleSearchChange}
 *  handleFilter={handleFilter}
 *  showContent={showContent}
 *  handleSelect={handleSelect}
 *  selectedDates={selectedDates}
 *  formError={formError}
 *  removeGuests={removeGuests}
 *  guests={guests}
 *  addGuests={addGuests}
 *  handleCloseForm={handleCloseForm}
 *  />
 */

export function FormSearchFilter({
  onFormSubmit,
  handleSearchChange,
  handleFilter,
  showContent,
  handleSelect,
  selectedDates,
  formError,
  removeGuests,
  guests,
  addGuests,
  handleCloseForm,
}) {
  return (
    <>
      <form className="searchForm mb-0" onSubmit={onFormSubmit}>
        <div style={{ width: '100%' }}>
          <InputGroup>
            <InputGroup.Text>
              <RiSearchLine size={24} />
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Search by name or address"
              aria-label="Search"
              onChange={handleSearchChange}
            />
            <InputGroup.Text
              className="searchForm-filter"
              onClick={handleFilter}
            >
              <GoSettings size={24} />
            </InputGroup.Text>
          </InputGroup>
        </div>
        {showContent && (
          <div className="searchForm-calender">
            <Calender
              className="searchForm-calender-calender"
              onChange={handleSelect}
              value={selectedDates}
              onSelectDates={selectedDates}
            />
            {formError && (
              <p className="mx-2 my-2" style={{ color: 'var(--color-red)' }}>
                {formError}
              </p>
            )}
            <div className="guests me-2">
              <p className="my-0 mx-2">Number of Guests:</p>
              <div className="guests-content">
                <button className="guests-content-btn" onClick={removeGuests}>
                  -
                </button>
                <p className="guests-content-numberOfGuest mt-1 mx-2">
                  {guests}
                </p>
                <button className="guests-content-btn" onClick={addGuests}>
                  +
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                className="mb-2 mx-2 booking-btn"
                type="submit"
                onClick={handleCloseForm}
              >
                Filter
              </button>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
