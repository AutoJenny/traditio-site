import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 bg-ivory">
      <section className="w-full max-w-2xl mx-auto text-center">
        <h1 className="font-heading text-5xl md:text-6xl font-bold uppercase text-espresso mb-6 animate-fadein">French Antiques & Vintage</h1>
        <p className="font-body text-lg md:text-xl text-sand mb-8">Curated interiors inspired by timeless design and contemporary aesthetics.</p>
        <a href="/showroom" className="inline-block bg-sand text-espresso font-bold font-body rounded px-8 py-4 border-2 border-brass transition-colors duration-200 hover:bg-espresso hover:text-ivory text-lg shadow-card">Shop Collection</a>
      </section>
    </main>
  );
}
