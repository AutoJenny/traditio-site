export default function ProductDetail() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 text-center">
      <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase text-espresso mb-6">Product Title</h1>
      <div className="w-full h-64 bg-sand rounded mb-6 flex items-center justify-center">
        <span className="text-6xl text-espresso">🪑</span>
      </div>
      <p className="font-body text-lg text-sand mb-4">This is a boilerplate Product Detail page. Add your product gallery, info, and related products here when ready.</p>
      <button className="bg-sand text-espresso font-bold rounded px-8 py-3 border-2 border-brass transition-colors duration-200 hover:bg-espresso hover:text-ivory">Add to Cart</button>
    </main>
  );
} 