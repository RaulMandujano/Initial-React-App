import "./CarsCard.css";

const CarsCard = (props) => {
  const { name, model, manufacturer } = props;

  return (
    <div className="container">
      <div className="coupon">
        {name}
        <br />
        {model}
        <br />
        {manufacturer}
      </div>
    </div>
  );
};

export default CarsCard;
