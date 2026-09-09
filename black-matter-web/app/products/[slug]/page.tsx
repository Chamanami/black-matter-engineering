import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";
import { products } from "../../products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const images = [
  "/products/toro-gt3/1.jpg",
  "/products/toro-gt3/2.jpg",
  "/products/toro-gt3/3.jpg",
  "/products/toro-gt3/4.jpg",
  "/products/toro-gt3/5.jpg",
  "/products/toro-gt3/6.jpg",
];

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products[slug as keyof typeof products];
  if (!product) {
  return <div>Product not found</div>;
}
 
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-7xl">
          <p className="text-sm tracking-[0.3em] text-neutral-500 uppercase mb-6">
            Black Matter Engineering
          </p>

          <h1 className="text-[15vw] leading-[0.8] font-black italic tracking-[-0.06em] uppercase">
            {slug === "toro-gt3" ? product.name : slug}
          </h1>

          <div className="mt-12 flex justify-between items-end border-t border-neutral-800 pt-6">
            <p className="text-sm text-neutral-500 uppercase tracking-widest">
              {product.category}
            </p>

            <p className="text-sm text-neutral-500 uppercase tracking-widest">
              Scroll to explore
            </p>
          </div>
        </div>
      </section>

              <section className="min-h-screen px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT: GALLERY */}
          <div>
             <ProductGallery images={product.images}/>
</div>


          {/* RIGHT: PRODUCT INFO */}
          <div className="flex flex-col justify-center">
            <p className="text-sm tracking-[0.3em] text-neutral-500 uppercase mb-4">
              {product.category}
            </p>

            <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight uppercase">
              {product.name}
            </h2>

            <p className="text-2xl text-white mt-6">
              {product.price}
            </p>

            <div className="mt-6">
              <span className="inline-block border border-neutral-700 px-3 py-1 text-xs tracking-widest text-neutral-400 uppercase">
                {product.availability}
              </span>
            </div>

            <p className="mt-8 text-neutral-400 leading-relaxed max-w-xl">
             {product.description}
            </p>

            <button
              className="mt-10 w-full bg-white text-black py-4 px-6 text-sm font-bold tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors"
            >
              Add to Cart
            </button>

            <ProductDetails
            specifications={product.specifications}
            features={product.features}
          />
          </div>

        </div>
      </section>

    </main>
  );
}