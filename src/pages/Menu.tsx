import React, { useState } from "react";
import { useCart } from "./CartContext";

const menuItems = {
  coffee: [
    {
      id: "coffee-1",
      name: "Espresso",
      price: 249,
      image: "/images/coffee/espresso.png",
      description: "A strong and bold shot of coffee.",
    },
    {
      id: "coffee-2",
      name: "Cappuccino",
      price: 299,
      image: "/images/coffee/cappuccino.png",
      description: "Rich espresso with steamed milk and a thick layer of foam.",
    },
    {
      id: "coffee-3",
      name: "Latte",
      price: 355,
      image: "/images/coffee/latte.jpg",
      description: "Smooth espresso with creamy steamed milk.",
    },
    {
      id: "coffee-4",
      name: "Americano",
      price: 375,
      image: "/images/coffee/americano.jpg",
      description: "Espresso mixed with hot water for a milder taste.",
    },
    {
      id: "coffee-5",
      name: "Java Chip Frappuccino",
      price: 420,
      image: "/images/coffee/java-chip.jpg",
      description: "Blended coffee with chocolate chips and whipped cream.",
    },
    {
      id: "coffee-6",
      name: "Double Chocolate Chip Frappuccino",
      price: 450,
      image: "/images/coffee/double_choco_chip.png",
      description: "Rich chocolatey blended coffee with extra chocolate chips.",
    },
    {
      id: "coffee-7",
      name: "Caffe Americano",
      price: 485,
      image: "/images/coffee/macarons.jpg",
      description: "A robust espresso diluted with hot water.",
    },
    {
      id: "coffee-8",
      name: "Cold coffee",
      price: 249,
      image: "/images/coffee/cold-coffee.jpg",
      description: "Chilled coffee blended with milk and ice.",
    },
    {
      id: "coffee-9",
      name: "Classic Iced Coffee",
      price: 299,
      image: "/images/coffee/classic_iced.png",
      description: "Refreshing iced coffee with a smooth taste.",
    },
    {
      id: "coffee-10",
      name: "Classic Hot Coffee",
      price: 255,
      image: "/images/coffee/classic_hot.png",
      description: "A traditional hot brewed coffee.",
    },
    {
      id: "coffee-11",
      name: "Honey Almond Flat White",
      price: 375,
      image: "/images/coffee/honey_almond.png",
      description: "Espresso with steamed almond milk and honey.",
    },
    {
      id: "coffee-12",
      name: "Doppio Espresso",
      price: 365,
      image: "/images/coffee/doppio.jpg",
      description:
        "Our smooth signature Espresso Roast and its caramelly sweetn.",
    },
    {
      id: "coffee-13",
      name: "Caramel Macchiato",
      description: "Rich espresso with steamed milk and caramel drizzle.",
      price: 249,
      image: "/images/coffee/Macchiato.png",
    },
    {
      id: "coffee-14",
      name: "Classic Cappuccino",
      description: "A perfect balance of espresso, milk, and foam.",
      price: 301,
      image: "/images/coffee/cappuccino.png",
    },
    {
      id: "coffee-15",
      name: "Mocha Delight",
      description: "Espresso mixed with chocolate and topped with whipped cream.",
      price: 269,
      image: "/images/coffee/mocha.png",
    },
    {
      id: "coffee-16",
      name: "Vanilla Latte",
      description: "Smooth vanilla-infused espresso and creamy milk.",
      price: 399,
      image: "/images/coffee/vanila-latte.png",
    },
  ],
  desserts: [
    {
      id: "dessert-1",
      name: "Red Velvet Cake",
      price: 350,
      image: "/images/desserts/red_velvet.png",
      description: "Moist red velvet cake with cream cheese frosting.",
    },
    {
      id: "dessert-2",
      name: "Blueberry Cheesecake",
      price: 400,
      image: "/images/desserts/blueberry-cheesecake.png",
      description: "Creamy cheesecake topped with fresh blueberries.",
    },
    {
      id: "dessert-3",
      name: "Chocolate Lava Cake",
      price: 375,
      image: "/images/desserts/chocolate_lava.png",
      description: "Warm chocolate cake with a gooey molten center.",
    },
    {
      id: "dessert-4",
      name: "Black Forest Cake",
      price: 360,
      image: "/images/desserts/black_forest.png",
      description: "Layered chocolate cake with cherries and whipped cream.",
    },
    {
      id: "dessert-5",
      name: "Carrot Cake",
      price: 340,
      image: "/images/desserts/carrot_cake.png",
      description:
        "Moist spiced cake with grated carrots and cream cheese frosting.",
    },
    {
      id: "dessert-6",
      name: "Strawberry Cake",
      price: 400,
      image: "/images/desserts/carrot_cake.png",
      description:
        "Soft vanilla sponge with strawberry compote and fresh cream.",
    },
  ],
  bagels: [
    {
      id: "bagel-1",
      name: "Classic Plain Bagel",
      price: 150,
      image: "/images/bagels/plain_bagel.png",
      description: "Simple and classic plain bagel.",
    },
    {
      id: "bagel-2",
      name: "Classic Cheese Bagel",
      price: 180,
      image: "/images/bagels/cheese_bagel.png",
      description: "Bagel topped with melted cheese for a rich flavor.",
    },
    {
      id: "bagel-3",
      name: "Sesame Seed Bagel",
      price: 170,
      image: "/images/bagels/sesame_bagel.png",
      description: "Bagel topped with nutty sesame seeds.",
    },
    {
      id: "bagel-4",
      name: "Poppy Seed Bagel",
      price: 175,
      image: "/images/bagels/poppy_bagel.png",
      description: "A flavorful bagel covered in crunchy poppy seeds.",
    },
    {
      id: "bagel-5",
      name: "Garlic Bagel",
      price: 185,
      image: "/images/bagels/garlic_bagel.png",
      description: "Savory bagel infused with garlic flavor.",
    },
    {
      id: "bagel-6",
      name: "Whole Wheat Bagel",
      price: 185,
      image: "/images/bagels/wheat.jpg",
      description:
        "A hearty, nutty-flavored bagel made with whole wheat flour for a wholesome bite.",
    },
  ],
};

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  return (
    <div className="pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-gray-400">
            Carefully selected and expertly prepared
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md px-4 py-2 mb-8">
            <svg
              className="w-5 h-5 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Looking for something specific?"
              className="w-full text-gray-600 outline-none bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold text-[#d4a574] mb-6 capitalize">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items
                  .filter((item) =>
                    item.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center h-full transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-full mb-4 object-cover"
                      />
                      <h3 className="text-lg font-bold text-black">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>

                      <div className="flex-grow"></div>

                      <div className="mt-auto flex justify-between items-center w-full px-4">
                        <span className="text-lg font-semibold text-black">
                          ₹{item.price}
                        </span>
                        <button
                          onClick={() => addToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            quantity: 1
                          })}
                          className="bg-[#1a0f07]/90 text-white px-4 py-2 rounded-full hover:bg-[#c39464] transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
