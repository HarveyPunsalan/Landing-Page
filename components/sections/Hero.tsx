import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#FAF7F2] min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 py-20">
        {/* Left — Text Content */}
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <span className="text-xs font-medium text-[#8B5E3C] border border-[#8B5E3C] rounded-full px-4 py-1 w-fit">
              Artisanal Filipino Brewing
            </span>

            {/* Headline */}
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Every Sip <span className="text-[#8B5E3C]">Tells a Story</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Experience the warmth of traditional tea craft infused with modern
              Filipino soul. Hand-picked ingredients meet artisanal precision in
              every cup.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-[#8B5E3C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#7a5235] transition-colors">
                Explore Menu
              </button>
              <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Right — Image */}
        <div className="flex-1">
          <div className="relative flex justify-center items-center">
            <div className="absolute w-[400px] h-[400px] bg-[#D4E4D4] rounded-full -z-10" />
            <Image
              src="/images/brown-sugar.png"
              alt="Sip & Bloom Milk Tea"
              width={400}
              height={500}
              className="rounded-2xl object-cover relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
