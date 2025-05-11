import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 bg-ivory">
      <section className="w-full max-w-2xl mx-auto text-center">
        <h1 className="font-heading text-5xl md:text-6xl font-bold uppercase text-espresso mb-6 animate-fadein">French Antiques & Vintage</h1>
        <p className="font-body text-lg md:text-xl text-sand mb-8">Curated interiors inspired by timeless design and contemporary aesthetics.</p>
        <a href="/showroom" className="inline-block bg-sand text-espresso font-bold font-body rounded px-8 py-4 border-2 border-brass transition-colors duration-200 hover:bg-espresso hover:text-ivory text-lg shadow-card">Shop Collection</a>
      </section>
      {/* Category Navigation */}
      <nav className="w-full max-w-4xl mx-auto mt-16 mb-8 overflow-x-auto" aria-label="Product Categories">
        <ul className="flex gap-6 md:gap-8 text-sm font-bold uppercase tracking-wider font-body whitespace-nowrap">
          {['All','Decorative','Garden','Lighting','Mirrors','Rugs','Seating','Storage','Tables'].map(cat => (
            <li key={cat}>
              <a href="#" className="px-2 py-1 border-b-2 border-transparent hover:border-brass hover:text-brass transition-colors duration-200">{cat}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Featured Product Grid */}
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="bg-sand rounded-card shadow-card p-4 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <div className="w-full h-48 bg-ivory rounded mb-4 flex items-center justify-center">
              <span className="text-4xl text-sand">🪑</span>
            </div>
            <h2 className="font-heading text-xl text-espresso mb-1">Product Title {i}</h2>
            <p className="font-body text-brass font-bold mb-2">€1,200</p>
            <span className="inline-block bg-brass text-white text-xs rounded px-2 py-0.5 uppercase font-bold">Featured</span>
          </div>
        ))}
      </section>
      {/* Newsletter Signup */}
      <section className="w-full max-w-md mx-auto mb-24 text-center">
        <h3 className="font-heading text-2xl mb-4 uppercase tracking-wider">Newsletter</h3>
        <form className="flex flex-col sm:flex-row gap-2 justify-center items-center">
          <input type="email" placeholder="Your email" className="border border-sand rounded px-4 py-2 w-full sm:w-auto" aria-label="Email address" />
          <button type="submit" className="bg-sand text-espresso font-bold rounded px-6 py-2 border-2 border-brass transition-colors duration-200 hover:bg-espresso hover:text-ivory">Subscribe</button>
        </form>
        <span className="text-xs text-sand mt-1 block">We respect your privacy.</span>
      </section>
    </main>
  );
}
