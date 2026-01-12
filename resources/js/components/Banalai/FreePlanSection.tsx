export default function FreePlanSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(330deg,#e5eeff,#f0fff0)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Start Free, Upgrade When Ready
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Our Free Digital Library plan offers essential features to get you started. Experience the power of Banalai with limited features, then upgrade seamlessly when you're ready for more advanced capabilities.
        </p>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Free Plan Includes:
          </h3>
          <ul className="text-left max-w-md mx-auto space-y-3 text-gray-600">
            {[
              "Basic digital library access",
              "Limited collection size",
              "Community support",
              "Standard templates",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="/register"
          className="inline-block px-8 py-4 bg-[linear-gradient(88deg,#22c55e,#21c15c,#1fbd59,#1eb857,#1cb454,#1bb052,#19ac4f,#18a74d,#16a34a)] text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Get Started Free
        </a>
      </div>
    </section>
  );
}
