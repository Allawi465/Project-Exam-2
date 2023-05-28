import { eachDayOfInterval } from 'date-fns';

function FilterVenues(venues, selectedDates, guests, search) {
  const startDate = selectedDates ? new Date(selectedDates[0]) : null;
  const endDate = selectedDates ? new Date(selectedDates[1]) : null;
  const dates =
    startDate && endDate
      ? eachDayOfInterval({ start: startDate, end: endDate })
      : [];
  return venues.filter((venue) => {
    return (
      guests <= venue.maxGuests &&
      !venue.bookings.some((booking) => {
        const bookingStartDate = new Date(booking.dateFrom);
        const bookingEndDate = new Date(booking.dateTo);
        return dates.some((date) => {
          return date >= bookingStartDate && date <= bookingEndDate;
        });
      }) &&
      (venue.name.toLowerCase().includes(search.toLowerCase()) ||
        venue.location.address.toLowerCase().includes(search.toLowerCase()) ||
        venue.location.city.toLowerCase().includes(search.toLowerCase()) ||
        venue.location.country.toLowerCase().includes(search.toLowerCase()))
    );
  });
}

export default FilterVenues;
