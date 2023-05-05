import { BookBtn } from '../../../../style/buttons';

function Rent({ price }) {
  return (
    <div className="venue-prices my-4">
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
