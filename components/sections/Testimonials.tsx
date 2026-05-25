import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-[#FAF7F2] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <div className="w-12 h-1 bg-[#8B5E3C] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic mb-4">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              <p className="font-bold text-gray-900">{testimonial.name}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
