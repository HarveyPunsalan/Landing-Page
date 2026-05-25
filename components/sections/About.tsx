import Image from "next/image";

const About = () => {
  return (
    <section className="bg-[#FAF7F2] py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left — Image */}
        <div className="flex-1">
          <div className="flex-1">
            <Image
              src="/images/brown-sugar.png"
              alt="Our Story"
              width={600}
              height={350}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Right — Text */}
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold tracking-widest text-[#7A9E7E] uppercase">
              Our Story
            </span>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Born in Small Kitchen, Built for Every Sip.
            </h2>

            <p className="text-gray-600 leading-relaxed">
              What started as a personal quest for the perfect afternoon brew in
              a humble Manila kitchen has blossomed into Sip & Bloom.
            </p>

            <blockquote className="border-l-4 border-[#8B5E3C] pl-4 italic text-[#8B5E3C]">
              &ldquo;We don&apos;t just make drinks. We make moments.&rdquo;
            </blockquote>

            <p className="text-gray-600 leading-relaxed">
              Today, we continue to hand-brew every batch with the same passion we started with, using local Filipino inspirations to create flavors that bloom with every sip.
            </p>

            <button className="bg-gray-900 text-white px-6 py-3 rounded-full w-fit font-medium hover:bg-gray-700 transition-color md:mx-0 mx-auto block">
              Learn More About Us
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
