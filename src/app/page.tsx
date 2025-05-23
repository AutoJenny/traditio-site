'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const allProducts = await res.json();
        setProducts(allProducts.filter((p: any) => p.featured));
      } catch (e) {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 bg-ivory">
      <section className="w-full max-w-2xl mx-auto text-center">
        <h1 className="font-heading text-5xl md:text-6xl font-bold uppercase text-espresso mb-6 animate-fadein">Traditio Interiors</h1>
        <p className="font-body text-lg md:text-xl text-sand mb-8">Beautifully curated interiors and timeless pieces. Discover our collection.</p>
        <a href="/showroom" className="inline-block bg-sand text-espresso font-bold font-body rounded px-8 py-4 border-2 border-brass transition-colors duration-200 hover:bg-espresso hover:text-ivory text-lg shadow-card">Shop Collection</a>
      </section>
      {/* Category Navigation */}
      <nav className="w-full max-w-4xl mx-auto mt-16 mb-8 overflow-x-auto" aria-label="Product Categories">
        <ul className="flex gap-6 md:gap-8 text-sm font-bold uppercase tracking-wider font-body whitespace-nowrap">
          {["All","Decorative","Garden","Lighting","Mirrors","Rugs","Seating","Storage","Tables"].map(cat => (
            <li key={cat}>
              <a href="#" className="px-2 py-1 border-b-2 border-transparent hover:border-brass hover:text-brass transition-colors duration-200">{cat}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Featured Product Grid */}
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {loading ? (
          <div className="col-span-full text-center py-12">Loading...</div>
        ) : products.length === 0 ? (
          <div className="col-span-full text-center py-12 text-sand">No featured products found.</div>
        ) : (
          products.map(prod => (
            <div key={prod.id} className="bg-sand rounded-card shadow-card p-4 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <div className="w-full h-48 bg-ivory rounded mb-4 flex items-center justify-center overflow-hidden">
                {prod.images && prod.images[0] ? (
                  <img src={prod.images[0].url} alt={prod.images[0].alt || prod.title} className="object-contain h-full max-h-48 w-auto mx-auto" />
                ) : (
                  <span className="text-4xl text-sand">🪑</span>
                )}
              </div>
              <h2 className="font-heading text-xl text-espresso mb-1">{prod.title}</h2>
              <p className="font-body text-brass font-bold mb-2">£{prod.price}</p>
              <span className="inline-block bg-brass text-white text-xs rounded px-2 py-0.5 uppercase font-bold">Featured</span>
              {prod.status === 'sold' && <span className="inline-block bg-red-400 text-white text-xs rounded px-2 py-0.5 uppercase font-bold ml-2">Sold</span>}
            </div>
          ))
        )}
      </section>
    </main>
  );
}
