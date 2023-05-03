import StarRatings from 'react-star-ratings';

function Rating(props) {
  const { rating } = props;

  return (
    <StarRatings
      rating={rating}
      starRatedColor="#000000"
      numberOfStars={5}
      starDimension="20px"
      starSpacing="2px"
    />
  );
}

export default Rating;
