import React, { useState } from 'react';
import isSameDay from 'date-fns/isSameDay';
import { FormSearchFilter } from './form';

/**
 * SearchForm component for displaying a search form with calender and add guest
 * @component
 * @param {object}  props Component props
 * @param {Function} props.onSelectDates Handler for selecting dates
 * @param {Function} props.onSelectGuests Handler for selecting guests
 * @param {Function} props.onChangeSearch Handler for search input change
 * @property {Function} onFormSubmit Handler for form submission
 * @property {Function} handleSearchChange Handler for search input change
 * @property {Function} handleFilter Handler displaying the filer calender
 * @property {boolean} showContent indicating whether to show the content of the form
 * @property {Function} handleSelect Handler for date selection in the calendar
 * @property {Date} selectedDates Array of selected dates in the calendar
 * @property {string} formError Error message to display in the form
 * @property {Function} removeGuests Handler for removing guests
 * @property {number} guests Number of guests
 * @property {Function} addGuests Handler for adding guests
 * @property {Function} handleCloseForm Handler for closing the form
 * @property {Function} FormSearchFilter display the search anf filter form
 * @returns {JSX.ReactElement} The SearchForm component
 * @example
 * <SearchForm
 *  onSelectDates={onSelectDates}
 *  onSelectGuests={onSelectGuests}
 *  onChangeSearch={onChangeSearch}
 *  />
 */

function SearchForm({ onSelectDates, onSelectGuests, onChangeSearch }) {
  const [showContent, setShowContent] = useState(false);
  const [selectedDates, setSelectedDates] = useState(null);
  const [formError, setFormError] = useState('');
  const [guests, setGuests] = useState(1);
  const [search, setSearch] = useState('');

  const handleFilter = () => {
    setShowContent((prevShowContent) => !prevShowContent);
  };

  function handleSearchChange(e) {
    const trimmedValue = e.target.value.trim();
    setSearch(trimmedValue);
    onChangeSearch(trimmedValue);
  }

  const handleSelect = (selectedDates) => {
    const startDate = selectedDates[0];
    const endDate = selectedDates[1];

    if (isSameDay(startDate, endDate)) {
      setSelectedDates(null);
      setFormError('Please select different start and end dates');
    } else {
      setFormError('');
      setSelectedDates(selectedDates);
    }
  };

  const addGuests = () => {
    if (guests < 100) {
      setGuests((prevGuests) => prevGuests + 1);
    } else {
      setFormError(`Venues maximum guest is 100`);
    }
  };

  const removeGuests = () => {
    if (guests > 1) {
      setGuests((prevGuests) => prevGuests - 1);
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onChangeSearch(search);
  };

  const handleCloseForm = () => {
    onSelectDates(selectedDates);
    onSelectGuests(guests);
    setShowContent(false);
    setFormError('');
  };

  return (
    <>
      <FormSearchFilter
        onFormSubmit={onFormSubmit}
        handleSearchChange={handleSearchChange}
        handleFilter={handleFilter}
        showContent={showContent}
        handleSelect={handleSelect}
        selectedDates={selectedDates}
        formError={formError}
        removeGuests={removeGuests}
        guests={guests}
        addGuests={addGuests}
        handleCloseForm={handleCloseForm}
      />
    </>
  );
}

export default SearchForm;
