import React from "react";

const AboutBanalai = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Banalai
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering libraries and organizations with innovative digital solutions
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              At Banalai, we believe that knowledge should be accessible to everyone,
              everywhere. Our mission is to empower libraries, schools, universities,
              and organizations with flexible, modern digital library solutions that
              break down barriers to information access.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We combine cutting-edge technology with user-friendly design to create
              platforms that not only store and organize digital resources but also
              make them easily discoverable and accessible to users around the world.
            </p>
          </div>

          <div className="bg-[linear-gradient(123deg,#eff6ff,#eff6ff,#eff6ff,#eff6ff,#eff6ff,#eff6ff,#eff6ff,#eff6ff,#eff6ff,#f0f6ff,#f2f6ff,#f3f6ff,#f5f6ff,#f6f5ff,#f7f5ff,#f9f5ff,#faf5ff)] p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">

              {/* Innovation */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[linear-gradient(123deg,#6366f1,#6160f2,#5e5bf2,#5c55f3,#5950f4,#574af4,#5444f5,#523ff5,#4f39f6)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Constantly evolving our technology to meet the changing needs of modern libraries.
                  </p>
                </div>
              </div>

              {/* Accessibility */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[linear-gradient(123deg,#22c55e,#21c15c,#1fbd59,#1eb857,#1cb454,#1bb052,#19ac4f,#18a74d,#16a34a)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
                  <p className="text-gray-600">
                    Making knowledge accessible to everyone, regardless of location or resources.
                  </p>
                </div>
              </div>

              {/* Reliability */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[linear-gradient(123deg,#facc15,#f8c913,#f6c612,#f4c310,#f2c00f,#f0bc0d,#eeb90b,#ecb60a,#eab308)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h3>
                  <p className="text-gray-600">
                    Providing robust, secure, and dependable solutions you can trust.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>   
        </div>
    </section>
  );
};

export default AboutBanalai;
