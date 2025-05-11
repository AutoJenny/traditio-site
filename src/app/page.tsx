import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-sand min-h-screen w-full">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <section className="bg-white rounded-card shadow-card p-10 text-center border-4 border-brass mb-12">
          <h1 className="text-5xl font-heading font-bold mb-4 text-brass">Welcome to Traditio Interiors</h1>
          <p className="text-lg text-espresso mb-6 font-body">
            Inspired by timeless design and contemporary aesthetics, we offer interiors that tell stories.
          </p>
          {/* Logo placeholder if missing */}
          <div className="flex justify-center items-center h-24 w-24 mx-auto mt-6 bg-sand rounded-full">
            <Image src="/traditio_logo.png" alt="Traditio Logo" width={96} height={96} className="object-contain" />
          </div>
        </section>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          {/* Sample Card */}
          <div className="bg-sand rounded-card shadow-card p-6 w-full md:w-1/2">
            <h2 className="font-heading text-2xl text-espresso mb-2">Sample Card</h2>
            <p className="font-body text-espresso mb-4">This card demonstrates the Traditio card style: sand background, rounded corners, subtle shadow, espresso text.</p>
            {/* Sample Button */}
            <button className="bg-sand text-espresso font-bold font-body rounded-button px-6 py-3 border-2 border-brass transition-colors duration-200 hover:bg-espresso hover:text-ivory">Sample Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
