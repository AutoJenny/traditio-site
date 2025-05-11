import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/products?slug=${slug}`);
      const data = await res.json();
      setProduct(data.product);
      setRelated(data.related || []);
      setLoading(false);
    }
    fetchProduct();
  }, [slug]);

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (!product) return <div className="text-center py-16">Product not found.</div>;

  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      {/* Image Gallery */}
      <section className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full h-80 bg-sand rounded mb-4 flex items-center justify-center overflow-hidden">
            {product.images && product.images[0] ? (
              <img src={product.images[0].url} alt={product.images[0].alt || product.title} className="object-contain h-full max-h-80 w-auto mx-auto" />
            ) : (
              <span className="text-6xl text-espresso">🪑</span>
            )}
          </div>
          <div className="flex gap-2 justify-center">
            {product.images && product.images.map((img: any, i: number) => (
              <div key={i} className="w-16 h-16 bg-ivory rounded flex items-center justify-center border border-sand overflow-hidden">
                <img src={img.url} alt={img.alt || product.title} className="object-contain h-full w-auto mx-auto" />
              </div>
            ))}
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold uppercase text-espresso mb-2">{product.title}</h1>
          <p className="font-body text-lg text-brass font-bold mb-2">£{product.price}</p>
          {product.status === 'sold' && <span className="inline-block bg-red-400 text-white text-xs rounded px-2 py-0.5 uppercase font-bold mb-4">SOLD</span>}
          <p className="font-body text-base text-sand mb-4">{product.description}</p>
          <ul className="text-sm text-sand mb-4">
            {product.dimensions && <li><b>Dimensions:</b> {product.dimensions}</li>}
            {product.condition && <li><b>Condition:</b> {product.condition}</li>}
            {product.origin && <li><b>Origin:</b> {product.origin}</li>}
            {product.period && <li><b>Period:</b> {product.period}</li>}
          </ul>
          {/* Expandable Delivery Info */}
          <details className="mb-4">
            <summary className="cursor-pointer font-bold text-espresso">Delivery Information</summary>
            <div className="mt-2 text-sand text-sm">Delivery details and options will be shown here.</div>
          </details>
          {/* Social Share */}
          <div className="flex gap-4 mb-4">
            <a href="#" aria-label="Share on Facebook" className="hover:text-brass"><svg width="24" height="24" fill="currentColor"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/></svg></a>
            <a href="#" aria-label="Share on Twitter" className="hover:text-brass"><svg width="24" height="24" fill="currentColor"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.485 0-4.5 2.015-4.5 4.5 0 .353.04.697.116 1.026C7.728 9.37 4.1 7.575 1.67 4.905c-.387.664-.61 1.437-.61 2.26 0 1.56.794 2.936 2.003 3.744-.737-.023-1.43-.226-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.417-.377.103-.775.158-1.185.158-.29 0-.568-.028-.84-.08.568 1.772 2.217 3.062 4.175 3.096A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.253 0 12.77-6.833 12.77-12.76 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.94 8.94 0 0 1-2.54.697z"/></svg></a>
            <a href="#" aria-label="Share on Pinterest" className="hover:text-brass"><svg width="24" height="24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.084 2.438 7.563 5.938 8.938-.082-.76-.156-1.926.033-2.755.17-.73 1.09-4.646 1.09-4.646s-.277-.555-.277-1.375c0-1.29.748-2.254 1.68-2.254.793 0 1.176.596 1.176 1.312 0 .8-.51 1.995-.773 3.106-.22.93.468 1.688 1.39 1.688 1.668 0 2.953-1.76 2.953-4.297 0-2.25-1.62-3.825-3.936-3.825-2.684 0-4.26 2.012-4.26 4.09 0 .81.312 1.68.702 2.15.078.094.09.176.066.27-.072.293-.23.93-.26 1.06-.04.17-.13.207-.3.125-1.12-.52-1.82-2.15-1.82-3.463 0-2.82 2.05-6.06 6.11-6.06 3.21 0 5.7 2.29 5.7 5.35 0 3.18-1.99 5.74-4.76 5.74-1.01 0-1.96-.53-2.28-1.14l-.62 2.36c-.18.7-.67 1.58-1 2.12.75.23 1.54.36 2.37.36 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg></a>
          </div>
          <button className="bg-sand text-espresso font-bold rounded px-8 py-3 border-2 border-brass transition-colors duration-200 hover:bg-espresso hover:text-ivory">Add to Cart</button>
        </div>
      </section>
      {/* Related Products */}
      <section className="mt-12">
        <h2 className="font-heading text-2xl mb-6 text-espresso">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {related.map((prod: any) => (
            <div key={prod.id} className="bg-sand rounded-card shadow-card p-4 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
              <div className="w-full h-32 bg-ivory rounded mb-4 flex items-center justify-center overflow-hidden">
                {prod.images && prod.images[0] ? (
                  <img src={prod.images[0].url} alt={prod.images[0].alt || prod.title} className="object-contain h-full max-h-32 w-auto mx-auto" />
                ) : (
                  <span className="text-2xl text-sand">🪑</span>
                )}
              </div>
              <h3 className="font-heading text-lg text-espresso mb-1">{prod.title}</h3>
              <p className="font-body text-brass font-bold mb-2">£{prod.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 