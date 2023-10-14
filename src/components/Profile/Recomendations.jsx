import Card from "./Card";

const recomendations = [
  {
    name: "Michael Jackson",
    fees: "₹4,370",
    rating: "4.8",
    reviews: "89",
  },
  {
    name: "Stevie Wonder",
    fees: "₹4,263",
    rating: "5.0",
    reviews: "62",
  },
  {
    name: "Ray Charles",
    fees: "₹2,586",
    rating: "4.3",
    reviews: "189",
  },
];

const Recomendations = () => {
  return (
    <div className="mt-28 px-10">
      <h1 className="text-3xl font-bold text-center lg:text-start">
        Recommended for you
      </h1>
      <div className="mt-10 flex gap-8 items-center justify-center flex-wrap">
        {recomendations.map((ele, i) => (
          <Card
            key={i}
            name={ele.name}
            fees={ele.fees}
            rating={ele.rating}
            reviews={ele.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default Recomendations;
