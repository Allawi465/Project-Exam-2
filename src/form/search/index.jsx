import React, { useState } from 'react';
import isSameDay from 'date-fns/isSameDay';
import { FormSearchFilter } from './form';

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
