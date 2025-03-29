import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "./CartContext";

const Home = () => {
  const { addToCart } = useCart();

  const bestsellers = [
    {
      id: "home-1",
      name: "Caramel Macchiato",
      description: "Rich espresso with steamed milk and caramel drizzle.",
      price: 199,
      image: "/images/coffee/Macchiato.png",
    },
    {
      id: "home-2",
      name: "Classic Cappuccino",
      description: "A perfect balance of espresso, milk, and foam.",
      price: 249,
      image: "/images/coffee/cappuccino.png",
    },
    {
      id: "home-3",
      name: "Mocha Delight",
      description: "Espresso mixed with chocolate and topped with whipped cream.",
      price: 201,
      image: "/images/coffee/mocha.png",
    },
    {
      id: "home-4",
      name: "Vanilla Latte",
      description: "Smooth vanilla-infused espresso and creamy milk.",
      price: 249,
      image: "/images/coffee/vanila-latte.png",
    },
  ];

  return (
    <div>
      <section className="relative h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="/images/hero.png"
            alt="Coffee shop"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Experience Coffee Like Never Before
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-gray-200 mb-8"
            >
              Discover our artisanal coffee selection, crafted with passion and
              expertise.
            </motion.p>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/menu"
                className="inline-flex items-center px-6 py-3 bg-[#1a0f07]/90 text-white rounded-full hover:bg-white hover:text-[#1a0f07] transition"
              >
                View Menu <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-[#1a0f07]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Brewscape",
                subtitle: "Sourced from the finest coffee regions worldwide.",
                image: "/images/1.png",
              },
              {
                title: "Aromatica",
                subtitle:
                  "Crafting the perfect cup with passion and precision.",
                image: "/images/2.png",
              },
              {
                title: "The Daily Drip",
                subtitle: "A perfect space to relax, work, or meet friends.",
                image: "/images/3.png",
              },
              {
                title: "Roastery",
                subtitle: "Mastering the art of coffee craftsmanship.",
                image: "/images/4.png",
              },
              {
                title: "Velvett",
                subtitle: "Smooth brews, refined flavors.",
                image: "/images/5.png",
              },
              {
                title: "Perkville",
                subtitle: "Elevating every cup with handpicked beans.",
                image: "/images/6.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-[#2a1f17] p-6 rounded-lg shadow-lg"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-[#2a1f17]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Bestsellers & Today's Offers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {bestsellers.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#3a2a21] p-6 rounded-lg shadow-lg text-center flex flex-col h-full"
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-400 mb-2 flex-grow">
                  {item.description}
                </p>

                <div className="mt-auto flex justify-between items-center w-full px-4">
                  <span className="text-lg font-semibold text-white">
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
