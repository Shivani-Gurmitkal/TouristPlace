import TouristPlace from "./components/TouristPlace";
import Card from "./components/Card";

const touristPlaces = [
    {
      placeName: "Goa",
      desc: "Famous for its beaches, nightlife, and Portuguese heritage.",
      img: "https://i.pinimg.com/474x/3f/f0/c1/3ff0c11047b4604d42e99cc432436d6b.jpg",
      whenToVisit: "Winter",
      ratings: 4.5,
      price: 15000
    },
    {
      placeName: "Manali",
      desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
      img: "https://i.pinimg.com/474x/50/f7/38/50f7383477fb468a19bc277b6840287e.jpg",
      whenToVisit: "Summer",
      ratings: 4.7,
      price: 10000
    },
    {
      placeName: "Kerala",
      desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
      img: "https://i.pinimg.com/474x/14/eb/fc/14ebfc7a8513757e9665a02b399baceb.jpg",
      whenToVisit: "Winter",
      ratings: 4.8,
      price: 20000
    },
    {
      placeName: "Jaipur",
      desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
      img: "https://i.pinimg.com/474x/76/06/77/760677bab500b9e8d77c674bbbeee46e.jpg",
      whenToVisit: "Winter",
      ratings: 4.6,
      price: 12000
    }
  ];
  

function App(){
    return (
        <>
        <TouristPlace/>
        <div className="flex gap-4 mt-20 justify-center mb-20">
            {
        touristPlaces.map(places=><Card img={places.img} name={places.placeName} desc={places.desc} visit={places.whenToVisit} price={places.price} rating={places.ratings}/> )
            }
        </div>
        </>
    )
}
export default App;

