import { products } from "@/data/products";
import Image from "next/image";

const Menu = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Bestsellers</h2>
          <p className="text-gray-500 mt-3">
            Handcrafted drinks you will actually come back for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {product.description}
                </p>
                <p className="text-[#8B5E3C] font-bold mt-3">₱{product.price}</p>
                <button className="mt-4 w-full bg-[#8B5E3C] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#7a5235] transition-colors">
                  Add to Order
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
