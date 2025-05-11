'use client';
import { useEffect, useState } from 'react';

export default function Showroom() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const catRes = await fetch('/api/categories');
      const prodRes = await fetch('/api/products');
      setCategories(await catRes.json());
      setProducts(await prodRes.json());
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <div className="text-center py-16">Loading...</div>;

  return (
    <main className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase text-espresso mb-10 text-center">Showroom</h1>
      {/* Category Filter */}
      <nav className="w-full mb-8 overflow-x-auto" aria-label="Product Categories">
        <ul className="flex gap-6 md:gap-8 text-sm font-bold uppercase tracking-wider font-body whitespace-nowrap justify-center">
          {categories.map((cat: any) => (
            <li key={cat.slug}>
              <a href="#" className="px-2 py-1 border-b-2 border-transparent hover:border-brass hover:text-brass transition-colors duration-200">{cat.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {products.map((prod: any) => (
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
            {prod.featured && <span className="inline-block bg-brass text-white text-xs rounded px-2 py-0.5 uppercase font-bold">Featured</span>}
            {prod.status === 'sold' && <span className="inline-block bg-red-400 text-white text-xs rounded px-2 py-0.5 uppercase font-bold ml-2">Sold</span>}
          </div>
        ))}
      </section>
      {/* Pagination Controls */}
      <div className="flex justify-center gap-2">
        <button className="px-4 py-2 rounded border border-sand bg-ivory text-espresso font-bold hover:bg-sand transition-colors">Previous</button>
        <span className="px-4 py-2 font-body">Page 1 of 1</span>
        <button className="px-4 py-2 rounded border border-sand bg-ivory text-espresso font-bold hover:bg-sand transition-colors">Next</button>
      </div>
    </main>
  );
} 