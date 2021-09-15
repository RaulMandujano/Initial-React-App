import Cars from "../data/Cars";
import CarsCard from "../components/CarsCard";

const CarsContainer = () => {
  return (
    <div>
      {Cars.map((Car) => {
        return (
          <CarsCard
            name={Car.name}
            model={Car.model}
            manufacturer={Car.manufacturer}
          />
        );
      })}
    </div>
  );
};

export default CarsContainer;
