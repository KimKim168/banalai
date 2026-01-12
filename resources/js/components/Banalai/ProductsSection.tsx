const products = [
    {
        title: 'Digital Library Platform',
        description: 'A comprehensive platform for managing digital collections, e-books, journals, and multimedia resources.',
        long_description: `
      <ul class="space-y-2 text-gray-600 mt-4">
        <li class="flex items-start"><svg class="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">Advanced search and filtering</li>
        <li class="flex items-start">                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>Multi-format support</li>
        <li class="flex items-start">                            </svg>User access management</li>
      </ul>
    `,
        iconBg: 'bg-indigo-600',
        image: '/assets/icon1.png',
    },
    {
        title: 'Library Operation Management System',
        description: 'Streamline daily operations with automated workflows and powerful reporting tools.',
        long_description: `
      <ul class="space-y-2 text-gray-600 mt-4">
        <li class="flex items-start"><svg class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>Automated workflows</li>
        <li class="flex items-start"><svg class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>Inventory tracking</li>
        <li class="flex items-start"><svg class="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>Analytics and reporting</li>
      </ul>
    `,
        iconBg: 'bg-green-600',
        image: '/assets/icon2.png',
    },
    {
        title: 'Resource Subscription Service',
        description: 'Manage subscriptions with flexible pricing models and automated renewals.',
        long_description: `
      <ul class="space-y-2 text-gray-600 mt-4">
        <li class="flex items-start"><svg class="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>Flexible pricing models</li>
        <li class="flex items-start"><svg class="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>Automated billing</li>
        <li class="flex items-start"><svg class="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>Usage analytics</li>
      </ul>
    `,
        iconBg: 'bg-yellow-500',
        image: '/assets/icon3.png',
    },
    {
        title: 'Cloud & On-Premise Deployment',
        description: 'Deploy on cloud, on-premise, or hybrid environments based on your needs.',
        long_description: `
      <ul class="space-y-2 text-gray-600 mt-4">
        <li class="flex items-start"><svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>Cloud deployment</li>
        <li class="flex items-start"><svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>On-premise installation</li>
        <li class="flex items-start"><svg class="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>Hybrid infrastructure</li>
      </ul>
    `,
        iconBg: 'bg-blue-600',
        image: '/assets/icon4.png',
    },
];
const imgBgColors = ['bg-purple-500', 'bg-green-500', 'bg-yellow-400', 'bg-blue-500'];

export default function ProductsSection() {
    return (
        <section className="px-4 pt-32 pb-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Our Products</h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">Comprehensive solutions for modern digital libraries</p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {products.map((item, index) => (
                        <div key={index} className="rounded-xl border border-gray-100 bg-blue-50 bg-white p-8 shadow-md transition hover:shadow-xl">
                            <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-lg ${imgBgColors[index]}`}>
                                <img src={item.image} alt={item.title} className="h-10 w-10 object-contain" />
                            </div>

                            <h3 className="mb-3 text-2xl font-semibold text-gray-900">{item.title}</h3>

                            <p className="text-gray-600">{item.description}</p>

                            <div dangerouslySetInnerHTML={{ __html: item.long_description }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
