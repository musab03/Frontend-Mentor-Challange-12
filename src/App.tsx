import sedan from "./images/icon-sedans.svg";
import suv from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

function App() {
  const Cars = [
    {
      model: "SEDANS",
      detail:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or an your next road trip.",
      bgcolor: "bg-[#e28525]",
      textcolor: "text-[#e28525]",
      icon: sedan,
    },
    {
      model: "SUVS",
      detail:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      bgcolor: "bg-[#016972]",
      textcolor: "text-[#016972]",
      icon: suv,
    },
    {
      model: "LUXURY",
      detail:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrice in style.",
      bgcolor: "bg-[#00403f]",
      textcolor: "text-[#00403f]",
      icon: luxury,
    },
  ];

  return (
    <>
      <div className="flex flex-row w-full max-w-4xl mx-auto mt-40 rounded-lg overflow-hidden ">
        {Cars.map((car) => (
        <div className={`${car.bgcolor} py-6 px-12 w-80` }>
          <img src={car.icon} alt="sedan-icon" />
          <h2 className="my-8 font-semibold text-3xl text-white" >{car.model}</h2>
          <p className=" text-white ">{car.detail}</p>
  <button className={`mt-16 bg-white rounded-full px-6 py-2 hover:bg-transparent hover:text-white hover:border-2 ${car.textcolor} border-2 border-white  mb-4`}>Learn More</button>
        </div>
        ))}
        
      </div>
    </>
  );
}

export default App;
