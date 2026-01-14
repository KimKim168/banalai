import React from "react";
import LibrarySearch from "../Search/LibrarySearch";

const imgBgColors = [
  "bg-purple-500",
  "bg-green-500",
  "bg-yellow-400",
  "bg-blue-500",
];

export default function FeaturesSection({ features }) {
  return (
    <div>
      <section className="px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
          {features.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.children.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
            >
              <div
                className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${
                  imgBgColors[index % imgBgColors.length]
                }`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.short_description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
