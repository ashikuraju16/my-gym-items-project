const PriceOption = (option) => {
  const { name, price, features } = option;
  return (
    <div className="card  my-8   text-black  font-semibold text-center space-y-3 bg-slate-700 shadow-xl">
      <h2 className="text-4xl font-extrabold w-1/4 mx-auto text-sky-400 hover:text-white">
        {name}
      </h2>
      <h3 className="text-3xl font-extrabold  w-3/4 mx-auto text-blue-500 hover:text-white">
        Price: <span className="text-7xl hover:text-red-800">${price}</span>/mon
      </h3>
      <h6 className="text-xl font-extrabold w-3/4 mx-auto text-green-500 hover:text-white">
        Features: {features}
      </h6>
      <button className="text-xl bg-slate-800 p-4 w-2/6 mx-auto rounded-xl text-white hover:bg-slate-500 ">Get Started</button>
    </div>
  );
};

export default PriceOption;
