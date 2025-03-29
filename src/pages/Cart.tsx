import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Trash2, CreditCard, Wallet, Banknote, Plus, Minus } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    // Here you would typically integrate with a payment gateway
    setIsOrderPlaced(true);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#1a0f07] text-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          <p className="text-lg">Your cart is empty. Add some items from the menu!</p>
        </div>
      </div>
    );
  }

  if (isOrderPlaced) {
    return (
      <div className="min-h-screen bg-[#1a0f07] text-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4 text-[#d4a574]">Order Placed Successfully!</h1>
            <p className="text-lg mb-8">Thank you for your order. We'll prepare it right away.</p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-[#d4a574] text-white px-6 py-3 rounded-full hover:bg-[#c39464] transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a0f07] text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-[#2a1f17] p-4 rounded-lg"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-[#d4a574]">₹{item.price}</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3a2a21] hover:bg-[#4a3a31] transition-colors"
                    title="Decrease quantity"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3a2a21] hover:bg-[#4a3a31] transition-colors"
                    title="Increase quantity"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-400 transition"
                  title="Remove item"
                  aria-label="Remove item"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          <div className="bg-[#2a1f17] p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-lg">Total:</span>
              <span className="text-2xl font-bold text-[#d4a574]">₹{total}</span>
            </div>
          </div>

          <div className="bg-[#2a1f17] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setPaymentMethod("card")}
                className={`flex items-center justify-center space-x-2 p-4 rounded-lg border-2 transition-colors ${
                  paymentMethod === "card"
                    ? "border-[#d4a574] bg-[#d4a574]/10"
                    : "border-gray-600 hover:border-[#d4a574]"
                }`}
              >
                <CreditCard className="h-6 w-6" />
                <span>Card</span>
              </button>
              <button
                onClick={() => setPaymentMethod("upi")}
                className={`flex items-center justify-center space-x-2 p-4 rounded-lg border-2 transition-colors ${
                  paymentMethod === "upi"
                    ? "border-[#d4a574] bg-[#d4a574]/10"
                    : "border-gray-600 hover:border-[#d4a574]"
                }`}
              >
                <Wallet className="h-6 w-6" />
                <span>UPI</span>
              </button>
              <button
                onClick={() => setPaymentMethod("cash")}
                className={`flex items-center justify-center space-x-2 p-4 rounded-lg border-2 transition-colors ${
                  paymentMethod === "cash"
                    ? "border-[#d4a574] bg-[#d4a574]/10"
                    : "border-gray-600 hover:border-[#d4a574]"
                }`}
              >
                <Banknote className="h-6 w-6" />
                <span>Cash</span>
              </button>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-[#d4a574] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#c39464] transition-colors"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart; 