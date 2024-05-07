import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const PriceOptions = [
    {
      id: 1,
      name: "Silver",
      price: 9.99,
      features: ["1.Limited Hours: 6 AM-9 AM", " 2.Access to Locker Room"],
    },
    {
      id: 2,
      name: "Gold",
      price: 15.99,
      features: [
        "1.Live Gym",
        "2. Limited Hours: 9:01AM-12PM",
        " 3.Access to Locker Room",
        " 4.Personal Trainer",
      ],
    },
    {
      id: 3,
      name: "Diamond",
      price: 35.49,
      features: [
        "   1.Live Gym",
        "   2.Limited Hours: 12:01 PM-5 PM",
        "   3.Access to Locker Room",
        "   4.Personal Trainer",
        "   5.Stem Bath",
      ],
    },
    {
      id: 4,
      name: "Students",
      price: 5.99,
      features: [" 1.Limited Hours: 5:01 PM-7 PM ", " 2. Access to Locker Room"],
    },
    {
      id: 5,
      name: "Family",
      price: 20.99,
      features: [" 1.Limited Hours: 7:01 AM-9 PM", "  2.Access to Locker Room"],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl text-center mt-6 bg-sky-300 font-semibold p-6 rounded-2xl mx-auto w-1/2 text-black">
        Best{" "}
        <span className="text-7xl font-extrabold bg-green-500 p-2 hover:text-white hover:bg-green-700 text-red-800 rounded-tr-3xl rounded-bl-3xl">
          Price Options
        </span>{" "}
        in The{" "}
        <span className="text-7xl font-extrabold bg-green-500 p-2 text-white hover:text-red-800 hover:bg-green-700 rounded-tr-3xl rounded-bl-3xl">
          Town
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto ">
        {PriceOptions.map((option) => (
         <PriceOption key={option.id} {...option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
