import { features } from "@/data/features";
import { Leaf, Clock, Truck, Star } from "lucide-react";

const iconMap = {
  leaf: Leaf,
  clock: Clock,
  truck: Truck,
  star: Star,
};

const getIcon = (icon: string) => { 
  const IconComponent = iconMap[icon as keyof typeof iconMap]
  return <IconComponent size={20} className="text-[#8B5E3C]" />
}

const Features = () => {
  return (
    <section className="bg-[#FAF7F2] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Customers Love Us
          </h2>
          <p className="text-gray-500 mt-3">What makes every sip worth it.</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="w-10 h-10 bg-[#F0E6DC] rounded-lg flex items-center justify-center mb-4">
                {getIcon(feature.icon)}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
