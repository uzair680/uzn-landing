import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Instagram, Mail } from "lucide-react";

export default function UZNLanding() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const [products, setProducts] = React.useState([
    { id: 1, name: "UZN Hoodie - Black", price: "₹1,499", img: "https://via.placeholder.com/400x400?text=UZN+Hoodie+1", stock: 5 },
    { id: 2, name: "UZN Tee - White", price: "₹799", img: "https://via.placeholder.com/400x400?text=UZN+Tee", stock: 8 },
    { id: 3, name: "UZN Cap - Dark", price: "₹499", img: "https://via.placeholder.com/400x400?text=UZN+Cap", stock: 12 },
    { id: 4, name: "UZN Jacket - Limited", price: "₹2,999", img: "https://via.placeholder.com/400x400?text=UZN+Jacket", stock: 3 },
  ]);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white antialiased">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-xl font-bold tracking-widest">UZN</div>
        <nav className="hidden md:flex gap-6 text-sm opacity-90">
          <a href="#products" className="hover:underline">Products</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="cart" className="hidden md:flex items-center gap-2 px-3 py-2 bg-white/8 rounded-md">
            <ShoppingCart size={16} /> <span className="text-sm">Cart</span>
          </button>
        </div>
      </header>

      <section className="flex flex-col items-center text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-extrabold tracking-widest"
        >
          UZN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-4 text-lg md:text-2xl uppercase opacity-80"
        >
          BIG DEALS&nbsp;—&nbsp;GRAB HERE
        </motion.p>

        <div className="mt-8 flex gap-4">
          <a href="#products" className="px-6 py-3 bg-white text-black rounded-lg font-semibold">Shop Now</a>
          <a href="#about" className="px-6 py-3 border border-white/10 rounded-lg">Learn More</a>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          className="mt-8 w-full md:w-64 px-3 py-2 rounded border border-white/10 bg-transparent text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      <section id="products" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <article key={p.id} className="bg-white/3 rounded-lg overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm opacity-80">{p.price}</p>
                <p className="text-sm opacity-70">{p.stock} left in stock</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-white text-black rounded">Buy</button>
                  <button className="px-3 py-2 border border-white/10 rounded">Details</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">About UZN</h2>
            <p className="mt-4 text-sm opacity-90">UZN is a minimalist streetwear brand focused on clean silhouettes, bold text, and premium fabric. Designed for everyday wear with an attitude.
            </p>
            <ul className="mt-4 text-sm opacity-80 list-disc list-inside">
              <li>Premium fabrics</li>
              <li>Limited runs</li>
              <li>Easy returns &amp; fast shipping</li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <img src="https://via.placeholder.com/600x400?text=UZN+Lookbook" alt="UZN lookbook" className="w-full h-48 object-cover rounded" />
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        <div className="bg-white/4 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <form className="space-y-4">
            <input className="w-full bg-transparent border border-white/10 rounded px-3 py-2" placeholder="Your name" />
            <input className="w-full bg-transparent border border-white/10 rounded px-3 py-2" placeholder="Email" />
            <textarea className="w-full bg-transparent border border-white/10 rounded px-3 py-2 h-28" placeholder="Message"></textarea>
            <div className="flex gap-2">
              <button type="button" className="px-4 py-2 bg-white text-black rounded font-medium">Send</button>
              <button type="button" className="px-4 py-2 border border-white/10 rounded">Clear</button>
            </div>
          </form>

          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex items-center gap-2">
              <Instagram size={18} /> <span className="text-sm">@uzn.official</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} /> <span className="text-sm">hello@uzn.com</span>
            </div>
            <p className="mt-2 text-sm opacity-80">Want product photos or model shoots? We do small-batch lookbooks — DM on Instagram.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/6 mt-12 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">© {new Date().getFullYear()} UZN — All rights reserved</div>
          <div className="text-sm opacity-80">Made with care • Minimal streetwear</div>
        </div>
      </footer>
    </div>
  );
}
