import { BookBtn } from '../../../../style/buttons';
/**
 * A component that render the rental price of a venue and provides a button to rent it
 * @component
 * @param {Object} props The component props
 * @param {number} props.price The price of the venue rental
 * @returns {React.ReactElement} return venue price and a button to rent it as a component
 * @example
 * <Rent price={props.price} />
 */

function Rent({ price }) {
  return (
    <div className="venue-prices mt-4 mb-2">
      <div className="venue-prices-container">
        <p className="venue-prices-container-price">
          ${price}
          <span className="venue-prices-container-price-night">/Night</span>
        </p>
        <span>Payment estimation</span>
      </div>
      <BookBtn className="mt-2">Rent</BookBtn>
    </div>
  );
}

export default Rent;
