const showcase = "./assets/showcase.png";
const logo = "./assets/logo.png";
import "./showcase.css";

export const Showcase = () => {
  return (
    <div className="container flex lg:gap-12 lg:items-center lg:justify-center md:flex-row items-start flex-col w-auto h-auto pr-12 pt-20 w-auto">
      <label htmlFor="menu" className="label text-2xl lg:hidden">
        <i className="fa-solid fa-bars"></i>
      </label>
      <input type="checkbox" id="menu" className="hidden" />
      <label htmlFor="menu" className="label1">
        <div className="sidebar lg:flex flex-col lg:border-r-2 border-gray-700 pr-7 xl:pl-12 pl-9">
          <a href="#">Woman's Fashion</a>
          <a href="#">Men's Fashion</a>
          <a href="#">Electronics</a>
          <a href="#">Home & Lifestyle</a>
          <a href="#">Medicine</a>
          <a href="#">Sports & Outdoor</a>
          <a href="#">Baby's & Toys</a>
          <a href="#">Groceries & Pets</a>
          <a href="#">Health & Beauty</a>
        </div>
      </label>
      <div className="slider  bg-black flex items-center justify-center">
        <div className="slide flex w-9/12 h-auto items-center justify-center md:flex-row flex-col-reverse py-5">
          <div className="left text-white w-1/2 flex gap-3 flex-col items-start justify-between">
            <div className="logo flex items-center gap-3  sm:flex-row flex-col">
              <img src={logo} alt="" />
              <h3>iPhone 14 Series</h3>
            </div>
            <h1 className="2xl:text-6xl xl:text-4xl md:text-2xl">
              Up to 10% off Voucher
            </h1>
            <button
              type="submit"
              className="flex items-center gap-2 justify-center border-b-2 border-white"
            >
              Shop now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="right">
            <img src={showcase} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const playstation = "./assets/playstation.png";
const keyboard = "./assets/keyboard.png";
const monitor = "./assets/monitor.png";
const chair = "./assets/chair.png";

export const Card1 = () => {
  const cards = [
    {
      img: playstation,
      discount: "-40%",
      title: "HAVIT HV-G92 Gamepad",
      price1: "$120",
      price2: "$160",
      rate: 88,
      id: 16,
    },
    {
      img: keyboard,
      discount: "-35%",
      title: "AK-900 Wired Keyboard",
      price1: "$960",
      price2: "$1160",
      rate: 75,
      id: 15,
    },
    {
      img: monitor,
      discount: "-30%",
      title: "IPS LCD Gaming Monitor",
      price1: "$370",
      price2: "$400",
      rate: 99,
      id: 14,
    },
    {
      img: chair,
      discount: "-25%",
      title: "S-Series Comfort Chair ",
      price1: "$375",
      price2: "$400",
      rate: 99,
      id: 13,
    },
  ];

  return (
    <div className="box">
      <div className="text1 flex items-center justify-start ml-6 mt-6 gap-3">
        <span className="bg-red-500 h-10 w-5 rounded"></span>
        <span className="text-red-500 text-3xl font-semibold">Today's</span>
      </div>
      <div className="text2 flex items-center justify-around flex-wrap">
        <h2 className="text-black text-3xl font-semibold">Flash Sales</h2>
        <div className="date md:flex hidden gap-3">
          <div className="day flex flex-col items-center">
            <h5>Days</h5>
            <span className="day">03</span>
          </div>
          <div className="hour flex flex-col items-center">
            <h5>Hour</h5>
            <span className="hour">23</span>
          </div>
          <div className="minutes flex flex-col items-center">
            <h5>Minutes</h5>
            <span className="minutes">19</span>
          </div>
          <div className="seconds flex flex-col items-center">
            <h5>Seconds</h5>
            <span className="seconds">56</span>
          </div>
        </div>
        <div className="arrow flex items-center gap-3">
          <a
            href="#"
            className="w-12 h-auto border-2 border-gray-900 rounded-2xl py-1 px-3"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <a
            href="#"
            className="w-12 h-auto border-2 border-gray-900 rounded-2xl py-1 px-3"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <div className="box1 flex items-center justify-center flex-col">
        <div className="homepageCard flex flex-wrap gap-5 justify-center items-center mb-10 mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="homepageCard w-60 h-72 flex flex-col rounded-lg relative justify-between"
            >
              <Link to={`/details/${card.id}`}>
                <div className="card_img group relative hover:scale-110 transition duration-500 bg-gray-200 w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full"
                  />
                  <button className="bg-black text-white w-full h-auto py-2 hidden group-hover:block bottom-0 transition duration-300 absolute">
                    Add to cart
                  </button>
                </div>
              </Link>
              <div>
                <h3 className="discount absolute top-3 left-3 bg-red-500 text-white py-1 px-1 rounded">
                  {card.discount}
                </h3>
                <h3 className="like text-gray-500 text-lg absolute right-4 top-2 text-xl">
                  <i className="fa-regular fa-heart"></i>
                </h3>
                <h3 className="title font-semibold text-lg mt-2">
                  {card.title}
                </h3>
                <div className="price flex items-center justify-start gap-2">
                  <span className="price1 text-red-500 font-semibold">
                    {card.price1}
                  </span>
                  <span className="price2 text-gray-500 line-through">
                    {card.price2}
                  </span>
                </div>
                <div className="rate flex items-center justify-start">
                  <i className="fas fa-star checked"></i>
                  <i className="fas fa-star checked"></i>
                  <i className="fas fa-star checked"></i>
                  <i className="fas fa-star checked"></i>
                  <i className="fas fa-star checked mr-2"></i> ({card.rate})
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="bg-red-600 text-white rounded-md w-auto h-auto py-2 px-6 border-2 border-red-600 hover:bg-white hover:text-red-500 font-semibold text-xl transition duration-700"
        >
          View All Products
        </a>
      </div>
    </div>
  );
};

export const Line = () => {
  return (
    <div className="line flex items-center justify-center">
      <h3 className="border-b-2 border-gray-400 pt-16 w-4/5"></h3>
    </div>
  );
};

const phone = "./assets/phone.png";
const watch = "./assets/smartwatch.png";
const headphone = "./assets/headphone.png";
const camera = "./assets/camera.png";
const gamepad = "./assets/gamepad.png";
const computer = "./assets/computer.png";

export const Card2 = () => {
  return (
    <div className="box2">
      <div className="text2 flex items-center justify-start ml-6 mt-6 gap-3 pt-6 flex-wrap">
        <span className="bg-red-500 h-10 w-5 rounded"></span>
        <span className="text-red-500 text-3xl font-semibold">Categories</span>
      </div>
      <div className="text2 flex items-center justify-around flex-wrap">
        <h2 className="text-black text-3xl font-semibold">
          Browse By Category
        </h2>
        <div className="arrow flex items-center gap-3">
          <a
            href="#"
            className="w-12 h-auto border-2 border-gray-900 rounded-2xl py-1 px-3"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <a
            href="#"
            className="w-12 h-auto border-2 border-gray-900 rounded-2xl py-1 px-3"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="homePageCards1 flex items-center justify-center gap-8 mb-16 mt-16 flex-wrap">
        <div className="Pagecard flex flex-col items-center justify-center w-36 h-32 border-2 border-gray-900 rounded-lg hover:scale-110 transition duration-500 hover:bg-red-500">
          <img src={phone} alt="" />
          <h2>Phones</h2>
        </div>
        <div className="Pagecard flex flex-col items-center justify-center w-36 h-32 border-2 border-gray-900 rounded-lg hover:scale-110 transition duration-500 hover:bg-red-500">
          <img src={computer} alt="" />
          <h2>Computers</h2>
        </div>
        <div className="Pagecard flex flex-col items-center justify-center w-36 h-32 border-2 border-gray-900 rounded-lg hover:scale-110 transition duration-500 hover:bg-red-500">
          <img src={watch} alt="" />
          <h2>SmartWatch</h2>
        </div>
        <div className="Pagecard flex flex-col items-center justify-center w-36 h-32 border-2 border-gray-900 rounded-lg hover:scale-110 transition duration-500 hover:bg-red-500">
          <img src={camera} alt="" />
          <h2>Camera</h2>
        </div>
        <div className="Pagecard flex flex-col items-center justify-center w-36 h-32 border-2 border-gray-900 rounded-lg hover:scale-110 transition duration-500 hover:bg-red-500">
          <img src={headphone} alt="" />
          <h2>HeadPhones</h2>
        </div>
        <div className="Pagecard flex flex-col items-center justify-center w-36 h-32 border-2 border-gray-900 rounded-lg hover:scale-110 transition duration-500 hover:bg-red-500">
          <img src={gamepad} alt="" />
          <h2>Gaming</h2>
        </div>
      </div>
    </div>
  );
};

const jacket = "./assets/jacket.png";
const purse = "./assets/purse.png";
const cooler = "./assets/cooler.png";
const bookshelf = "./assets/bookshelf.png";

export const Card3 = () => {
  const cards = [
    {
      img: jacket,
      title: "The north coat",
      price1: "$260",
      price2: "$360",
      rate: 65,
      id: 12,
    },
    {
      img: purse,
      title: "Gucci duffle bag",
      price1: "$960",
      price2: "$1160",
      rate: 65,
      id: 11,
    },
    {
      img: cooler,
      title: "RGB liquid CPU Cooler",
      price1: "$160",
      price2: "$170",
      rate: 65,
      id: 10,
    },
    {
      img: bookshelf,
      title: "Small BookSelf",
      price1: "$360",
      price2: "$400",
      rate: 65,
      id: 9,
    },
  ];

  return (
    <div className="box3">
      <div className="text3 flex items-center justify-start ml-6 mt-6 gap-3 pt-6 flex-wrap">
        <span className="bg-red-500 h-10 w-5 rounded"></span>
        <span className="text-red-500 text-3xl font-semibold">This Month</span>
      </div>
      <div className="text2 flex items-center justify-around flex-wrap">
        <h2 className="text-black text-3xl font-semibold">
          Best Selling Products
        </h2>
        <div className="button flex items-center gap-3">
          <a
            href="#"
            className="bg-red-600 text-white rounded-md w-auto h-auto py-2 px-6 border-2 border-red-600 hover:bg-white hover:text-red-500 font-semibold text-xl transition duration-700"
          >
            View All
          </a>
        </div>
      </div>
      <div className="homePageCards3 flex flex-wrap gap-5 justify-center items-center mb-10 mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="PageCard2 w-60 h-72 flex flex-col rounded-lg relative justify-between"
          >
            <Link to={`/details/${card.id}`}>
              <div className="card_img group relative hover:scale-110 transition duration-500 bg-gray-200 w-full h-full overflow-hidden rounded-lg">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full"
                />
                <button className="bg-black text-white w-full h-auto py-2 hidden group-hover:block bottom-0 transition duration-300 absolute">
                  Add to cart
                </button>
              </div>
            </Link>
            <div>
              <h3 className="discount absolute top-10 right-3 py-1 px-1 rounded">
                <i className="fa-regular fa-eye"></i>
              </h3>
              <h3 className="like text-gray-500 text-lg absolute right-4 top-2 text-xl">
                <i className="fa-regular fa-heart"></i>
              </h3>
              <h3 className="title font-semibold text-lg mt-2">{card.title}</h3>
              <div className="price flex items-center justify-start gap-2">
                <span className="price1 text-red-500 font-semibold">
                  {card.price1}
                </span>
                <span className="price2 text-gray-500 line-through">
                  {card.price2}
                </span>
              </div>
              <div className="rate flex items-center justify-start">
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked mr-2"></i> ({card.rate})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const advertisementImg = "./assets/advertisement-img.png";

export const Advertisement = () => {
  return (
    <div className="box4 flex items-center justify-center mb-16 mt-16">
      <div className="advertisement bg-black text-white w-3/4 h-auto flex lg:items-center lg:justify-between lg:px-14 py-3 rounded-lg lg:flex-row flex-col-reverse items-center justify-center">
        <div className="left w-1/2 flex gap-5 flex-col lg:items-start lg:justify-center items-center">
          <h3 className="text-green-500 text-xl">Categories</h3>
          <h1 className="xl:text-5xl lg:text-3xl sm:text-xl text-base text-center lg:text-start">
            Enhance Your Music Experience
          </h1>
          <div className="date flex items-center justify-center gap-5 flex-wrap">
            <div className="day text-black bg-white rounded-full w-16 h-16 flex items-center justify-center flex-col">
              <span>05</span>
              <h5 className="text-sm">Days</h5>
            </div>
            <div className="hour text-black bg-white rounded-full w-16 h-16 flex items-center justify-center flex-col">
              <span>23</span>
              <h5 className="text-sm">Hour</h5>
            </div>
            <div className="minutes text-black bg-white rounded-full w-16 h-16 flex items-center justify-center flex-col">
              <span>59</span>
              <h5 className="text-sm">Minutes</h5>
            </div>
            <div className="seconds text-black bg-white rounded-full w-16 h-16 flex items-center justify-center flex-col">
              <span>35</span>
              <h5 className="text-sm">Seconds</h5>
            </div>
          </div>
          <a
            href="#"
            className="text-white bg-green-500 rounded-md w-40 h-auto py-3 px-10 text-xl"
          >
            Buy Now
          </a>
        </div>
        <div className="right w-1/2">
          <img src={advertisementImg} alt="" />
        </div>
      </div>
    </div>
  );
};

const corn = "./assets/corn.png";
const camera1 = "./assets/camera1.png";
const laptop = "./assets/laptop.png";
const cream = "./assets/cream.png";
const car = "./assets/car.png";
const shoes = "./assets/shoes.png";
const gamepad1 = "./assets/gamepad1.png";
const jacket1 = "./assets/jacket1.png";

import { Link } from "react-router-dom";

export const Card4 = () => {
  const cards = [
    {
      img: corn,
      title: "Breed Dry Dog Food",
      price: "$100",
      rate: 35,
      id: 1,
    },
    {
      img: camera1,
      title: "CANON EOS DSLR Camera",
      price: "$360",
      rate: 95,
      id: 2,
    },
    {
      img: laptop,
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      rate: 325,
      id: 3,
    },
    {
      img: cream,
      title: "Curology Product Set",
      price: "$500",
      rate: 145,
      id: 4,
    },
    {
      img: car,
      title: "Kids Electric Car",
      price: "$960",
      rate: 65,
      id: 5,
    },
    {
      img: shoes,
      title: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      rate: 35,
      id: 6,
    },
    {
      img: gamepad1,
      title: "GP11 Shooter USB Gamepad",
      price: "$660",
      rate: 55,
      id: 7,
    },
    {
      img: jacket1,
      title: "Quilted Satin Jacket",
      price: "$660",
      rate: 55,
      id: 8,
    },
  ];

  return (
    <div className="box4">
      <div className="text3 flex items-center justify-start ml-6 mt-6 gap-3 pt-6 flex-wrap">
        <span className="bg-red-500 h-10 w-5 rounded"></span>
        <span className="text-red-500 text-3xl font-semibold">
          Our Products
        </span>
      </div>
      <div className="text2 flex items-center justify-around flex-wrap">
        <h2 className="text-black text-3xl font-semibold">
          Explore Our Products
        </h2>
        <div className="arrow flex items-center gap-3">
          <a
            href="#"
            className="w-12 h-auto border-2 border-gray-900 rounded-2xl py-1 px-3"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <a
            href="#"
            className="w-12 h-auto border-2 border-gray-900 rounded-2xl py-1 px-3"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="cards_box flex items-center justify-center">
        <div className="cards w-3/4 flex flex-wrap gap-5 justify-center items-center mb-10 mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="PageCard4 w-60 h-72 flex flex-col rounded-lg relative justify-between"
            >
              <Link to={`/details/${card.id}`}>
                <div className="card_img group relative hover:scale-110 transition duration-500 bg-gray-200 w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full"
                  />
                  <button className="bg-black text-white w-full h-auto py-2 hidden group-hover:block bottom-0 transition duration-300 absolute">
                    Add to cart
                  </button>
                </div>
              </Link>
              <div>
                <h3 className="discount absolute top-10 right-3 py-1 px-1 rounded">
                  <i className="fa-regular fa-eye"></i>
                </h3>
                <h3 className="like text-gray-500 text-lg absolute right-4 top-2 text-xl">
                  <i className="fa-regular fa-heart"></i>
                </h3>
                <h3 className="title font-semibold text-lg mt-2">
                  {card.title}
                </h3>
                <div className="price flex items-center justify-start gap-2">
                  <span className="price1 text-red-500 font-semibold">
                    {card.price}
                  </span>
                  <div className="rate flex items-center justify-start">
                    <i className="fas fa-star checked"></i>
                    <i className="fas fa-star checked"></i>
                    <i className="fas fa-star checked"></i>
                    <i className="fas fa-star checked"></i>
                    <i className="fas fa-star checked mr-2"></i> ({card.rate})
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="button flex items-center justify-center mb-12">
        <a
          href="#"
          className="bg-red-600 text-white rounded-md w-auto h-auto py-2 px-6 border-2 border-red-600 hover:bg-white hover:text-red-500 font-semibold text-xl transition duration-700"
        >
          View All Products
        </a>
      </div>
    </div>
  );
};

const Img1 = "./assets/Img1.png";
const Img2 = "./assets/Img2.png";
const Img3 = "./assets/Img3.png";
const Img4 = "./assets/Img4.png";

export const Card5 = () => {
  return (
    <div className="card_text">
      <div className="ml-12 flex items-center justify-start gap-5">
        <span className="bg-red-500 h-10 w-5 rounded"></span>
        <h2 className="text-red-600 text-3xl font-bold">Featured</h2>
      </div>
      <h2 className="text-2xl font-bold sm:pl-36 pl-12 my-6">New Arrival</h2>
      <div className="box5 flex gap-5 justify-center flex-wrap">
        <div className="Left flex bg-black relative w-1/2 rounded-xl w-auto h-auto">
          <img src={Img1} alt="" />
          <div className="card_text text-white absolute bottom-12 left-10">
            <h3 className="text-3xl font-semibold">PlayStation 5</h3>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <div className="button flex gap-2 border-b-2 border-white w-24 items-center">
              <a href="#" className="">
                Shop Now
              </a>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="Right flex flex-col gap-5 w-auto">
          <div className="img2 relative">
            <img src={Img2} alt="" className="rounded-xl w-full" />
            <div className="card_text absolute bottom-10 text-white left-5 md:w-1/2 gap-5">
              <h3 className="text-3xl font-semibold">Women's Collections</h3>
              <p>Featured woman collections that give you another vibe.</p>
              <div className="button flex gap-2 border-b-2 border-white w-24 items-center">
                <a href="#" className="">
                  Shop Now
                </a>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="img3 bg-black rounded-xl text-white px-5 pt-8 relative">
              <img src={Img3} alt="" />
              <div className="card_text flex flex-col absolute bottom-5">
                <h3 className="text-2xl font-semibold">Speakers</h3>
                <p>Amazon wireless speakers</p>
                <div className="button flex gap-2 border-b-2 border-white w-24 items-center">
                  <a href="#" className="">
                    Shop Now
                  </a>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="img4 bg-black rounded-xl text-white px-5 py-6 h-auto relative items-center justify-center">
              <img src={Img4} alt="" />
              <div className="card_text absolute bottom-5 flex flex-col">
                <h3 className="text-2xl font-semibold">Perfume</h3>
                <p>GUCCI INTENSE OUD EDP</p>
                <div className="button flex gap-2 border-b-2 border-white w-24 items-center">
                  <a href="#" className="">
                    Shop Now
                  </a>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const service = "./assets/service.png";
const service1 = "./assets/service1.png";
const service2 = "./assets/service2.png";

export const Card6 = () => {
  const cards = [
    {
      img: service,
      title: "FREE AND FAST DELIVERY",
      paragraph: "Free delivery for all orders over $140",
    },
    {
      img: service1,
      title: "24/7 CUSTOMER SERVICE",
      paragraph: "Friendly 24/7 customer support",
    },
    {
      img: service2,
      title: "MONEY BACK GUARANTEE",
      paragraph: "We return money within 30 days",
    },
  ];

  return (
    <div className="box6 my-16">
      <div className="PageCard6 flex items-center justify-center gap-10 flex-wrap">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-60 py-3 border-2 border-black hover:bg-red-500 hover:text-white transition duration-500 rounded-md"
          >
            <img src={card.img} alt={card.title} />
            <h3 className="font-bold text-lg">{card.title}</h3>
            <p className="text-sm">{card.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
