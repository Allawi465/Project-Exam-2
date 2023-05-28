import { useState } from 'react';
import {
  eachDayOfInterval,
  differenceInCalendarDays,
  isSameDay,
} from 'date-fns';

/**
 * @typedef {Object} useBookingCalendar return
 * @property {Function} unavailableDays The function used to check if a tile date should be disabled
 * @property {Function} handleSelect The function to handle Calender input change
 * @property {Function} calculatePrice A function to handle calculate Price
 * @property {Function} addGuests A function to handle add guest
 * @property {Function} removeGuests A function to handle remove guest
 * @property {Function} validateForm A function to handle validate the form errors
 * @property {Function} handleShowForm A function to handle showing the form
 * @property {Function} handleCloseForm A function to handle closing the form
 */

/**
 *  Custom hook for managing booking calendar functionality
 *  @param {Object} bookings Array of existing bookings
 *  @param {number} maxGuest Maximum number of guests allowed
 *  @param {string} id ID for the venue
 *  @param {number} price Price per day for the venue
 *  @returns {useBookingCalendar}
 *  @example
 * const {
 *  date,
 *  handleSelect,
 *  unavailableDays,
 *  formError,
 *  calculatePrice,
 *  handleShowForm,
 *  handleCloseForm,
 *  removeGuests,
 *  validateForm,
 *  addGuests,
 *  guests,
 *  isFormSubmitted,
 *  } = useBookingCalendar(bookings, maxGuest, id, price);
 */

const useBookingCalendar = (bookings, maxGuest, id, price) => {
  const [date, setDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const unavailableDays = ({ date }) => {
    if (bookings) {
      return bookings.some((booking) => {
        const bookingDate = new Date(booking.dateFrom);
        const bookingEndDate = new Date(booking.dateTo);
        return date >= bookingDate && date <= bookingEndDate;
      });
    }
  };

  const handleSelect = (date) => {
    const startDate = date[0];
    const endDate = date[1];

    if (isSameDay(startDate, endDate)) {
      setDate(null);
      setFormError('Please select different start and end dates');
    } else {
      const dates = eachDayOfInterval({ start: startDate, end: endDate });
      const isDisabled = dates.some((day) => unavailableDays({ date: day }));

      if (isDisabled) {
        setDate(null);
      } else {
        setFormError('');
        setDate(date);
      }
    }
  };

  const calculatePrice = () => {
    const basePrice = 200;
    const startDate = date[0];
    const endDate = date[1];
    const numberOfDays = differenceInCalendarDays(endDate, startDate) + 1;
    const totalPrice = basePrice + price * numberOfDays;
    return totalPrice;
  };

  const addGuests = () => {
    if (guests < maxGuest) {
      setGuests((prevGuests) => prevGuests + 1);
    } else {
      setFormError(`Venues maximum guest is ${maxGuest}`);
    }
  };

  const removeGuests = () => {
    setFormError(false);
    if (guests > 1) {
      setGuests((prevGuests) => prevGuests - 1);
    }
  };

  const validateForm = () => {
    if (!date || !date[0] || !date[1]) {
      setFormError('Please select start and end dates');
      return false;
    }
    return true;
  };

  const handleShowForm = () => {
    setIsFormSubmitted(false);
  };

  const handleCloseForm = () => {
    if (validateForm()) {
      setIsFormSubmitted(true);
    }
  };

  return {
    date,
    handleSelect,
    unavailableDays,
    formError,
    setFormError,
    calculatePrice,
    handleShowForm,
    handleCloseForm,
    removeGuests,
    validateForm,
    addGuests,
    guests,
    isFormSubmitted,
  };
};

export default useBookingCalendar;
