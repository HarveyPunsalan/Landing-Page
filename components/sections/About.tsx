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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
