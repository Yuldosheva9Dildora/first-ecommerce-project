import { useParams } from "react-router-dom";
import { Heart, Star } from "lucide-react";

const corn = "./assets/corn.png";
const camera1 = "./assets/camera1.png";
const laptop = "./assets/laptop.png";
const cream = "./assets/cream.png";
const car = "./assets/car.png";
const shoes = "./assets/shoes.png";
const gamepad1 = "./assets/gamepad1.png";
const jacket1 = "./assets/jacket1.png";
const jacket = "./assets/jacket.png";
const purse = "./assets/purse.png";
const cooler = "./assets/cooler.png";
const bookshelf = "./assets/bookshelf.png";
const playstation = "./assets/playstation.png";
const keyboard = "./assets/keyboard.png";
const monitor = "./assets/monitor.png";
const chair = "./assets/chair.png";

const cards = [
  {
    img: corn,
    title: "Breed Dry Dog Food",
    price: "$100",
    rate: 35,
    id: 1,
    paragraph:
      "Breed Dry Dog Food is a premium dog food designed to meet the specific nutritional needs of your furry friend.",
  },
  {
    img: camera1,
    title: "CANON EOS DSLR Camera",
    price: "$360",
    rate: 95,
    id: 2,
    paragraph:
      "The Canon EOS DSLR Camera is a powerful and versatile camera designed for both amateur photographers and professionals. Known for its exceptional image quality, it features a high-resolution sensor that captures sharp, vibrant photos and videos.",
  },
  {
    img: laptop,
    title: "ASUS FHD Gaming Laptop",
    price: "$700",
    rate: 325,
    id: 3,
    paragraph:
      "The ASUS FHD Gaming Laptop is a high-performance machine designed for an immersive gaming experience. Featuring a Full HD display with vibrant colors and crisp detail, it ensures sharp visuals for even the most fast-paced games.",
  },
  {
    img: cream,
    title: "Curology Product Set",
    price: "$500",
    rate: 145,
    id: 4,
    paragraph:
      "The Curology Product Set is a complete skincare regimen designed to treat acne, hyperpigmentation, and other common skin concerns.",
  },
  {
    img: car,
    title: "Kids Electric Car",
    price: "$960",
    rate: 65,
    id: 5,
    paragraph:
      "The Kids Electric Car is a fun and exciting toy that will keep your child entertained for hours. With its realistic design and working headlights, this car is sure to be a hit with kids of all ages.",
  },
  {
    img: shoes,
    title: "Jr. Zoom Soccer Cleats",
    price: "$1160",
    rate: 35,
    id: 6,
    paragraph:
      "The Jr. Zoom Soccer Cleats are designed for young athletes who want to take their game to the next level. Featuring a lightweight design and responsive cushioning, these cleats provide the support and comfort needed to perform at your best.",
  },
  {
    img: gamepad1,
    title: "GP11 Shooter USB Gamepad",
    price: "$660",
    rate: 55,
    id: 7,
    paragraph:
      "The GP11 Shooter USB Gamepad is a high-performance controller designed for serious gamers. Featuring a comfortable grip and responsive buttons, this gamepad provides precise control and accuracy for a wide range of games.",
  },
  {
    img: jacket1,
    title: "Quilted Satin Jacket",
    price: "$660",
    rate: 55,
    id: 8,
    paragraph:
      "The Quilted Satin Jacket is a stylish and versatile addition to any wardrobe. Made from high-quality satin fabric, this jacket is lightweight and comfortable, making it perfect for everyday wear. ",
  },
  {
    img: bookshelf,
    title: "Small BookSelf",
    price: "$360",
    rate: 65,
    id: 9,
    paragraph:
      "The Small Bookshelf is a versatile and stylish storage solution for your home. Featuring a compact design, this bookshelf is perfect for small spaces and can be used to display books, photos, and other decorative items.",
  },
  {
    img: cooler,
    title: "RGB liquid CPU Cooler",
    price: "$160",
    rate: 65,
    id: 10,
    paragraph:
      "The RGB Liquid CPU Cooler is a high-performance cooling solution designed to keep your CPU running at optimal temperatures. Featuring a sleek design and customizable RGB lighting, this cooler not only keeps your system cool but also adds a touch of style to your build. ",
  },
  {
    img: purse,
    title: "Gucci duffle bag",
    price: "$960",
    rate: 65,
    id: 11,
    paragraph:
      "The Gucci Duffle Bag is a luxurious and stylish accessory that is perfect for travel or everyday use. Made from high-quality materials, this bag is durable and built to last.",
  },
  {
    img: jacket,
    title: "The north coat",
    price: "$260",
    rate: 65,
    id: 12,
    paragraph:
      "The North Coat is a versatile and stylish jacket that is perfect for all your outdoor adventures. Made from high-quality materials, this jacket is durable and built to last.",
  },
  {
    img: chair,
    discount: "-25%",
    title: "S-Series Comfort Chair ",
    price: "$375",
    rate: 99,
    id: 13,
    paragraph:
      "The S-Series Comfort Chair is a premium gaming chair designed for maximum comfort and support. Featuring a high backrest, adjustable armrests, and a reclining seat, this chair is perfect for long gaming sessions.",
  },
  {
    img: monitor,
    discount: "-30%",
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    rate: 99,
    id: 14,
    paragraph:
      "The IPS LCD Gaming Monitor is a high-performance display designed for serious gamers. Featuring a fast refresh rate and low response time, this monitor delivers smooth, lag-free gameplay with crisp, vibrant visuals.",
  },
  {
    img: keyboard,
    discount: "-35%",
    title: "AK-900 Wired Keyboard",
    price: "$960",
    rate: 75,
    id: 15,
    paragraph:
      "The AK-900 Wired Keyboard is a high-performance keyboard designed for gamers and typists. Featuring a durable construction and responsive keys, this keyboard provides a comfortable typing experience with minimal noise.",
  },
  {
    img: playstation,
    discount: "-40%",
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    rate: 88,
    id: 16,
    paragraph:
      "The HAVIT HV-G92 Gamepad is a versatile controller designed for PC and console gaming. Featuring a comfortable grip and responsive buttons, this gamepad provides precise control and accuracy for a wide range of games.",
  },
];

const Return = "./assets/return.png";
const delivery = "./assets/delivery.png";
import { Link } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();

  const card = cards.find((card) => card.id === Number(id));

  return (
    <div className="detailsBox flex items-center justify-center mt-24">
      <div className="box7 flex flex-col lg:flex-row gap-5 w-auto items-center justify-center">
        <div className="left flex lg:flex-row-reverse gap-5 items-center justify-center flex-col">
          <img
            className=" lg:w-[550px] lg:h-auto  w-full h-full bg-gray-300 rounded-xl flex-wrap"
            src={card.img}
            alt=""
          />
          <div className="image flex lg:flex-col flex-row gap-5 flex-wrap items-center justify-center">
            <img className="bg-gray-300 rounded-xl" src={card.img} alt="" />
            <img className="bg-gray-300 rounded-xl" src={card.img} alt="" />
            <img className="bg-gray-300 rounded-xl" src={card.img} alt="" />
            <img className="bg-gray-300 rounded-xl" src={card.img} alt="" />
          </div>
        </div>
        <div className="right flex flex-col sm:w-[400px] sm:p-0 px-5 gap-5">
          <h3 className="text-3xl font-semibold">{card.title}</h3>
          <div className="icons flex">
            <Star size="24" fill="gold" color="gold" />
            <Star size="24" fill="gold" color="gold" />
            <Star size="24" fill="gold" color="gold" />
            <Star size="24" fill="gold" color="gold" />
            <Star size="24" fill="gold" color="gold" />
            <h3 className="pr-2">({card.rate} Reviews)</h3>
            <h3 className="text-green-500 font-semibold border-l-2 border-gray-400 pl-2">
              In Stock
            </h3>
          </div>
          <div className="price">
            <h3 className="text-2xl">{card.price}</h3>
            <p>{card.paragraph}</p>
          </div>
          <form className="border-t-2 border-gray-400 w-full pt-5 flex flex-col gap-3">
            <div className="color flex gap-1 items-center justify-start">
              <label htmlFor="color1" className="text-xl">
                Colors
              </label>
              <input
                name="color"
                className="accent-green-500 border-none"
                id="color1"
                type="radio"
              />
              <input
                name="color"
                className="accent-red-500"
                id="color2"
                type="radio"
              />
            </div>
            <div className="size flex gap-1">
              <label className="text-2xl">Size</label>
              <button
                className="border-2 w-8 h-8 hover:bg-red-600 hover:text-white border-gray-400 rounded text-sm"
                id="xs"
                type="radio"
                name="size"
              >
                XS
              </button>
              <button
                className="border-2 w-8 h-8 hover:bg-red-600 hover:text-white border-gray-400 rounded text-sm"
                id="s"
                type="radio"
                name="size"
              >
                S
              </button>
              <button
                className="border-2 w-8 h-8 hover:bg-red-600 hover:text-white border-gray-400 rounded text-sm"
                id="m"
                type="radio"
                name="size"
              >
                M
              </button>
              <button
                className="border-2 w-8 h-8 hover:hover:bg-red-600 hover:text-white border-gray-400 rounded text-sm"
                id="l"
                type="radio"
                name="size"
              >
                L
              </button>
              <button
                className="border-2 w-8 h-8 hover:hover:bg-red-600 hover:text-white border-gray-400 rounded text-sm"
                id="xl"
                type="radio"
                name="size"
              >
                XL
              </button>
            </div>
            <div className="div flex items-center gap-1">
              <h3 className="bg-red-500 text-white w-auto h-auto pb-1 px-2 text-xl rounded-sm">
                +
              </h3>
              <input
                type="number"
                className="border-2 outline-none border-gray-400 w-20 pl-7 h-8"
              />
              <h3 className="bg-red-500 text-white w-auto h-auto bg-red-500 text-white w-auto h-auto pb-1 px-2 text-xl rounded-sm">
                -
              </h3>
              <button className="bg-red-500 text-white px-4 py-1 rounded-sm">
                <Link to="/cart">Buy Now</Link>
              </button>
              <h3 className=" border-2 border-gray-600">
                <Heart fill="white" className="hover:bg-red-500" />
              </h3>
            </div>
            <div className="desc">
              <div className="flex gap-2 border-2 border-gray-800 w-auto px-1 py-3">
                <img src={delivery} className="w-12 h-12" alt="" />
                <div>
                  <h3>Free Delivery</h3>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="flex gap-2 border-x-2 border-b-2 border-gray-800 w-auto px-1 py-3">
                <img src={Return} className="w-12 h-12" alt="" />
                <div>
                  <h3>Return Delivery</h3>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const Details1 = () => {
  return (
    <div className="box8 mb-28">
      <div className="text5 flex items-center justify-start ml-10 mt-10 mb-10 gap-3">
        <span className="bg-red-500 h-10 w-5 rounded"></span>
        <span className="text-red-500 text-3xl font-semibold">
          Related Item
        </span>
      </div>

      <div className="box9 flex items-center justify-center gap-7 flex-wrap px-1">
        <div className="card1 w-56 flex flex-col gap-3">
          <div className="card_img overflow-hidden group relative hover:scale-110 transition duration-500 overflow-hidden rounded-lg">
            <button className="bg-black text-white w-full h-auto py-2 hidden group-hover:block bottom-0 transition duration-300 absolute z-10">
              Add to cart
            </button>
            <img
              className="bg-gray-300 rounded-xl w-full h-auto group  hover:scale-110 transition duration-500 relative"
              src={playstation}
              alt=""
            />
            <h3 className="like text-gray-500 text-lg absolute top-5 right-5 text-xl">
              <i className="fa-regular fa-heart"></i>
            </h3>
            <h3 className="discount absolute top-12 right-4 text-gray-600 py-1 px-1 rounded">
              <i className="fa-regular fa-eye"></i>
            </h3>
            <h3 className="discount absolute top-3 left-3 bg-red-500 text-white py-1 px-1 rounded">
              40%
            </h3>
          </div>
          <div className="details_card_text">
            <h2 className="text-xl">HAVIT HV-G92 Gamepad</h2>
            <div className="price flex gap-2">
              <h3 className="text-lg text-red-600">$120</h3>
              <h3 className="text-lg text-gray-600 line-through">$160</h3>
            </div>
            <div className="details_icons flex">
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <h3>(88)</h3>
            </div>
          </div>
        </div>
        <div className="card1 w-56 flex flex-col gap-3">
          <div className="card_img overflow-hidden group relative hover:scale-110 transition duration-500 overflow-hidden rounded-lg">
            <button className="bg-black text-white w-full h-auto py-2 hidden group-hover:block bottom-0 transition duration-300 absolute z-10">
              Add to cart
            </button>
            <img
              className="relative bg-gray-300 rounded-xl w-full h-auto group  hover:scale-110 transition duration-500"
              src={keyboard}
              alt=""
            />
            <h3 className="like text-gray-500 text-lg absolute top-5 right-5 text-xl">
              <i className="fa-regular fa-heart"></i>
            </h3>
            <h3 className="discount absolute top-12 right-4 text-gray-600 py-1 px-1 rounded">
              <i className="fa-regular fa-eye"></i>
            </h3>
            <h3 className="discount absolute top-3 left-3 bg-red-500 text-white py-1 px-1 rounded">
              35%
            </h3>
          </div>
          <div className="details_card_text">
            <h2 className="text-xl">AK-900 Wired Keyboard</h2>
            <div className="price flex gap-2">
              <h3 className="text-lg text-red-600">$960</h3>
              <h3 className="text-lg text-gray-600 line-through">$1160</h3>
            </div>
            <div className="details_icons flex">
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <h3>(75)</h3>
            </div>
          </div>
        </div>
        <div className="card1 w-56 flex flex-col gap-3">
          <div className="card_img overflow-hidden group relative hover:scale-110 transition duration-500 overflow-hidden rounded-lg">
            <button className="bg-black text-white w-full h-auto py-2 hidden group-hover:block bottom-0 transition duration-300 absolute z-10">
              Add to cart
            </button>
            <img
              className="bg-gray-300 rounded-xl w-full h-auto group  hover:scale-110 transition duration-500 relative"
              src={monitor}
              alt=""
            />
            <h3 className="like text-gray-500 text-lg absolute top-5 right-5 text-xl">
              <i className="fa-regular fa-heart"></i>
            </h3>
            <h3 className="discount absolute top-12 right-4 text-gray-600 py-1 px-1 rounded">
              <i className="fa-regular fa-eye"></i>
            </h3>
            <h3 className="discount absolute top-3 left-3 bg-red-500 text-white py-1 px-1 rounded">
              30%
            </h3>
          </div>
          <div className="details_card_text">
            <h2 className="text-xl">IPS LCD Gaming Monitor</h2>
            <div className="price flex gap-2">
              <h3 className="text-lg text-red-600">$370</h3>
              <h3 className="text-lg text-gray-600 line-through">$400</h3>
            </div>
            <div className="details_icons flex">
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <h3>(99)</h3>
            </div>
          </div>
        </div>
        <div className="card1 w-56 flex flex-col gap-3">
          <div className="card_img overflow-hidden group relative hover:scale-110 transition duration-500 overflow-hidden rounded-lg">
            <button className="bg-black text-white w-full h-auto py-2 hidden group-hover:block bottom-0 transition duration-300 absolute z-10">
              Add to cart
            </button>
            <img
              className="bg-gray-300 rounded-xl w-full h-auto group  hover:scale-110 transition duration-500 relative"
              src={cooler}
              alt=""
            />
            <h3 className="like text-gray-500 text-lg absolute top-5 right-5 text-xl">
              <i className="fa-regular fa-heart"></i>
            </h3>
            <h3 className="discount absolute top-12 right-4 text-gray-600 py-1 px-1 rounded">
              <i className="fa-regular fa-eye"></i>
            </h3>
          </div>
          <div className="details_card_text">
            <h2 className="text-xl">RGB liquid CPU Cooler</h2>
            <div className="price flex gap-2">
              <h3 className="text-lg text-red-600">$160</h3>
              <h3 className="text-lg text-gray-600 line-through">$170</h3>
            </div>
            <div className="details_icons flex">
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <Star size="24" fill="gold" color="gold" />
              <h3>(65)</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
