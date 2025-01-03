
import laptop from "./images/laptop.png"
import gamepad1 from "./images/gamepad1.png"
import jacket1 from "./images/jacket1.png"
import purse from "./images/purse.png"
import cooler from "./images/cooler.png"
import playstation from "./images/playstation.png"
import keyboard from "./images/keyboard.png"
import monitor from "./images/monitor.png"



const objectWishlist = [
    {img: purse,
                title: "Gucci duffle bag",
                price: "$960",
                rate: 65,
                id: 11,
    },
    {img: cooler,
                title: "RGB liquid CPU Cooler",
                price: "$160",
                rate: 65,
                id: 10,
    },
    {
        img: gamepad1,
        title: "Xbox Elite Wireless Controller Series 2",
        price: "$960",
        rate: 65,
        id: 5,
    },
    {
        img: jacket1,
                    title: "Quilted Satin Jacket",
                    price: "$660",
                    rate: 55,
                    id: 8,
    },

]




import { Link } from "react-router-dom"
import { Trash2 } from "lucide-react"


export const WishlistCards = () => {
    return(
        <div className="cardsWishlist">
            <div className="wishlist_text flex items-center justify-between px-28 my-24 flex-wrap">
                <h2 className="text-2xl">Wishlist(4)</h2>
                <a href="#" className="text-xl border-2 border-slate-600 rounded-md py-2 px-3">Move all To Bag</a>
            </div>
            <div className="cards flex flex-wrap gap-8 justify-center items-center mb-10 mt-10">
    {objectWishlist.map((card, index) => (
        <div key={index} className="card w-60 h-72 flex flex-col rounded-lg relative justify-between mt-5">
            <Link to={`/details/${card.id}`}>
            <div className="card_img group relative hover:scale-110 transition duration-500 bg-gray-200 w-full h-full overflow-hidden rounded-lg">
            <img src={card.img} alt={card.title} className="w-full h-full" />
            <button className="bg-black text-white w-full h-auto py-2 hidden group-hover:block bottom-0 transition duration-300 absolute">Add to cart</button> 
            </div></Link>
            <div>
            <h3 className="delete text-gray-500 text-lg absolute right-4 top-2 text-xl">
                <Trash2/>
            </h3>
            <h3 className="title font-semibold text-lg mt-2">{card.title}</h3>
            <div className="price flex items-center justify-start gap-2">
                <span className="price1 text-red-500 font-semibold">{card.price}</span>
            </div>
            <div className="rate flex items-center justify-start">
            <i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked mr-2"></i> ({card.rate})
            </div>
            </div>
        </div>
    ))}
</div>
</div>
)}




const objectWishlist1 = [
    {
        img: laptop,
        title: "Apple MacBook Pro 16-inch",
        price: "$160",
        rate: 65,
        id: 6,
    },
    {
        img: monitor,
        title: "IPS LCD Gaming Monitor",
        price: "$960",
        rate: 65,
        id: 7,
    },
    {
        img: playstation,
        title: "GP11 Shooter USB Gamepad",
        price: "$960",
        rate: 65,
        id: 9,
    },
    {
        img: keyboard,
        title: "Razer Blackwidow Elite",
        price: "$160",
        rate: 65,
        id: 8,
    },
]



export const WishlistCards1 = () => {
    return(
        <div className="cardsWishlist pb-20">
            <div className="wishlist_text flex items-center justify-between px-28 my-24 flex-wrap">
                <h2 className="text-2xl">Wishlist(4)</h2>
                <a href="#" className="text-xl border-2 border-slate-600 rounded-md py-2 px-3">See All</a>
            </div>
            <div className="cards flex flex-wrap gap-8 justify-center items-center mb-10 mt-10">
    {objectWishlist1.map((card, index) => (
        <div key={index} className="card w-60 h-72 flex flex-col rounded-lg relative justify-between mt-5">
            <Link to={`/details/${card.id}`}>
            <div className="card_img group relative hover:scale-110 transition duration-500 bg-gray-200 w-full h-full overflow-hidden rounded-lg">
            <img src={card.img} alt={card.title} className="w-full h-full" />
            <button className="bg-black text-white w-full h-auto py-2 hidden group-hover:block bottom-0 transition duration-300 absolute">Add to cart</button> 
            </div></Link>
            <div>
            <h3 className="like text-gray-500 text-lg absolute right-4 top-2 text-xl">
                <Trash2/>
            </h3>
            <h3 className="title font-semibold text-lg mt-2">{card.title}</h3>
            <div className="price flex items-center justify-start gap-2">
                <span className="price1 text-red-500 font-semibold">{card.price}</span>
            </div>
            <div className="rate flex items-center justify-start">
            <i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked"></i><i className="fas fa-star checked mr-2"></i> ({card.rate})
            </div>
            </div>
        </div>
    ))}
</div>
</div>
)}
