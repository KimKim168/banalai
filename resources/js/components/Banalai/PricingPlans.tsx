const PricingPlans = () => {
    return (
        <section className="background: linear-gradient(79deg, #f9fafb,#f8fafc,#f7f9fc,#f5f9fd,#f4f8fd,#f3f8fe,#f2f7fe,#f0f7ff,#eff6ff); px-4 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Pricing Plans</h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">Choose the plan that works best for your organization</p>
                </div>

                <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Free Plan */}
                    <div className="rounded-xl border-2 border-gray-200 bg-white p-8 shadow-md">
                        <div className="mb-8 text-center">
                            <h3 className="mb-2 text-2xl font-semibold text-gray-900">Free Plan</h3>
                            <div className="mb-2 text-4xl font-bold text-gray-900">$0</div>
                            <p className="text-gray-600">Forever free</p>
                        </div>

                        <ul className="mb-8 space-y-4">
                            {['Limited digital library features', 'Up to 1,000 resources', 'Community support', 'Standard templates'].map(
                                (item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckIcon className="text-green-500" />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ),
                            )}
                            <li className="flex items-start">
                                <CheckIcon className="text-green-500" />
                                <span className="text-gray-600">
                                    <a
                                        href="https://www.bookcambo.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-indigo-600 hover:text-indigo-700"
                                    >
                                        Bookcambo
                                    </a>{' '}
                                    integrated
                                </span>
                            </li>
                        </ul>

                        <a
                            href="register.html"
                            className="block w-full rounded-lg bg-gray-100 px-6 py-3 text-center font-semibold text-gray-900 transition-colors hover:bg-gray-200"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Cloud Subscription */}
                    <div className="relative scale-105 transform rounded-xl border-2 border-indigo-600 bg-white p-8 shadow-xl">
                        <div className="absolute top-0 right-0 rounded-tr-xl rounded-bl-lg bg-[linear-gradient(79deg,#facc15,#f8c913,#f6c612,#f4c310,#f2c00f,#f0bc0d,#eeb90b,#ecb60a,#eab308)] px-4 py-1 text-sm font-semibold text-gray-900">
                            Recommended
                        </div>

                        <div className="mb-8 text-center">
                            <h3 className="mb-2 text-2xl font-semibold text-gray-900">Cloud Subscription</h3>
                            <div className="mb-2 text-4xl font-bold text-gray-900">
                                $299
                                <span className="text-lg font-normal text-gray-600">/year</span>
                            </div>
                        </div>

                        <ul className="mb-8 space-y-4">
                            {[
                                'Full digital library features',
                                'Unlimited resources',
                                'Catalog',
                                'Classification',
                                'Circulation',
                                'Full Report',
                                'Cloud hosting included',
                                'Automatic updates',
                                'Priority support',
                                'Advanced analytics',
                                'Custom Domain (Your own domain name)',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon className="text-indigo-600" />
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                            <li className="flex items-start">
                                <CheckIcon className="text-indigo-600" />
                                <span className="text-gray-600">
                                    <a
                                        href="https://www.bookcambo.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-indigo-600 hover:text-indigo-700"
                                    >
                                        Bookcambo
                                    </a>{' '}
                                    integrated
                                </span>
                            </li>
                        </ul>

                        <a
                            href="register.html"
                            className="block w-full transform rounded-lg bg-[linear-gradient(79deg,#22c55e,#21c15c,#1fbd59,#1eb857,#1cb454,#1bb052,#19ac4f,#18a74d,#16a34a)] px-6 py-3 text-center font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[linear-gradient(79deg,#17a64b,#16a249,#159d46,#139944,#129442,#11903f,#108b3d,#0e873a,#0d8238)] hover:shadow-xl"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Local Server */}
                    <div className="rounded-xl border-2 border-gray-200 bg-white p-8 shadow-md">
                        <div className="mb-8 text-center">
                            <h3 className="mb-2 text-2xl font-semibold text-gray-900">Local Server License</h3>
                            <p className="text-gray-600">Price to be discussed</p>
                        </div>

                        <ul className="mb-8 space-y-4">
                            {[
                                'Full digital library features',
                                'Unlimited resources',
                                'On-premise installation',
                                'Setup & training included',
                                '1 year support included',
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon className="text-green-500" />
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="support.html"
                            className="block w-full rounded-lg bg-gray-100 px-6 py-3 text-center font-semibold text-gray-900 transition-colors hover:bg-gray-200"
                        >
                            Contact for Pricing
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CheckIcon = ({ className }) => (
    <svg className={`mt-0.5 mr-2 h-5 w-5 flex-shrink-0 ${className}`} fill="currentColor" viewBox="0 0 20 20">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        />
    </svg>
);

export default PricingPlans;
