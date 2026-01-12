import { Link } from '@inertiajs/react';

const HeroBanalai = () => {
    return (
        <section id="home" className="bg-white px-4 pt-24 pb-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                            Access Knowledge{' '}
                            <span className="bg-[linear-gradient(88deg,#155dfc,#1c59fb,#2454fb,#2b50fa,#324bf9,#3947f8,#4142f8,#483ef7,#4f39f6,#5834f7,#612ff7,#6a2af8,#7425f8,#7d1ff9,#861af9,#8f15fa,#9810fa)] bg-clip-text text-transparent">
                                Without Limits
                            </span>
                        </h1>

                        <p className="mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl">
                            Discover thousands of digital resources from expert libraries. Start your learning journey today and unlock your potential
                            with flexible digital library solutions.
                        </p>

                        <div className="mb-12 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/register"
                                className="w-full rounded-lg bg-[linear-gradient(88deg,#155dfc,#1c59fb,#2454fb,#2b50fa,#324bf9,#3947f8,#4142f8,#483ef7,#4f39f6,#5834f7,#612ff7,#6a2af8,#7425f8,#7d1ff9,#861af9,#8f15fa,#9810fa)] px-8 py-4 text-center font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
                            >
                                Get Started
                            </Link>

                            <Link
                                href="/support"
                                className="w-full rounded-lg border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-gray-700 shadow-md transition-colors hover:bg-gray-50 hover:shadow-lg sm:w-auto"
                            >
                                Request Demo
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            <div className="overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                                    alt="People collaborating with digital library resources"
                                    className="h-auto w-full object-cover"
                                />
                            </div>

                            <div className="absolute -right-4 -bottom-4 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 blur-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanalai;
