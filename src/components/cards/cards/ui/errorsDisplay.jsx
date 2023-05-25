const errorMessageDisplay = (search, guests, selectedDates) => {
  let errorMessage = 'No matching venues found';
  if (search) {
    errorMessage += ` for "${search}"`;
  }
  if (guests) {
    errorMessage += ` with ${guests} guest${guests > 1 ? 's' : ''}`;
  }
  if (selectedDates) {
    const startDate = selectedDates[0].toLocaleDateString();
    const endDate = selectedDates[1].toLocaleDateString();
    errorMessage += ` from ${startDate} to ${endDate}`;
  }
  errorMessage += '. Please try again.';
  return errorMessage;
};

export default errorMessageDisplay;
