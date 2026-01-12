import BanalaiLayout from './Layout';

const supportServices = [
  {
    title: 'Technical Support',
    description:
      'Get expert help when you need it. Our technical support team is available to assist with any issues or questions you may have.',
    image: '/assets/icon1.png',
    long_description: `
      <ul class="space-y-2 text-gray-600 mt-4">
        <li class="flex items-start">
          <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          24/7 email support
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Priority support for subscribers
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Remote assistance available
        </li>
      </ul>
    `,
  },
  {
    title: 'System Setup & Training',
    description:
      'Get your team up and running quickly with our comprehensive setup and training services.',
    image: '/assets/icon1.png',
    long_description: `
      <ul class="space-y-2 text-gray-600 mt-4">
        <li class="flex items-start">
          <svg class="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Custom installation assistance
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Staff training sessions
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Best practices guidance
        </li>
      </ul>
    `,
  },
  {
    title: 'Documentation & Knowledge Base',
    description:
      'Access comprehensive guides, tutorials, and resources to help you make the most of your digital library.',
    image: '/assets/icon3.png',
    long_description: `
      <ul class="space-y-2 text-gray-600 mt-4">
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Comprehensive user guides
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          Video tutorials
        </li>
        <li class="flex items-start">
          <svg class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          FAQ and troubleshooting
        </li>
      </ul>
    `,
  },
];

const imgBgColors = [
  '#4f46e5',
  'linear-gradient(141deg,#facc15,#f8c913,#f6c612,#f4c310,#f2c00f)',
  'linear-gradient(141deg,#22c55e,#21c15c,#1fbd59,#1eb857,#1cb454)',
];

const Support = () => {
  return (
    <BanalaiLayout>
      <section className="bg-white px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Support & Services
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              We're here to help you succeed with your digital library
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {supportServices.map((service, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-100 p-8 shadow-md transition-shadow hover:shadow-xl"
              >
                {/* Icon Image */}
                <div
                  className="w-16 h-16 mb-4 rounded-lg flex items-center justify-center"
                  style={{ background: imgBgColors[index % imgBgColors.length] }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>

                {/* Long description */}
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: service.long_description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </BanalaiLayout>
  );
};


export default Support;
