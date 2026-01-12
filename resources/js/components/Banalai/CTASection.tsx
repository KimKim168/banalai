const CTASection = () => {
    return (
        <section className="bg-blue-50 px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">Ready to Get Started?</h2>
                <p className="mb-8 text-xl leading-relaxed text-gray-600">
                    Explore our pricing plans or contact us to learn more about how Banalai can transform your digital library.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                        href="pricing.html"
                        className="transform rounded-lg bg-[linear-gradient(140deg,#facc15,#eab308)] px-8 py-4 font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(140deg,#eab308,#ca8a04)] hover:shadow-xl"
                    >
                        View Pricing
                    </a>
                    <a
                        href="support.html"
                        className="rounded-lg border-2 border-indigo-600 bg-white px-8 py-4 font-semibold text-indigo-600 shadow-lg transition-colors hover:bg-indigo-50 hover:shadow-xl"
                    >
                        Get Support
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
