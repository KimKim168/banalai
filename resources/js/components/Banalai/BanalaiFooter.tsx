const BanalaiFooter = () => {
    return (
        <footer className="bg-[linear-gradient(140deg,#101828,#1e2939,#101828)] text-gray-300">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="mb-6 flex items-center space-x-3">
                            <img src="/assets/logo.png" alt="Banalai Logo" className="h-10 w-auto" />
                            <span className="text-2xl font-bold text-white">Banalai</span>
                        </div>
                        <p className="mb-6 max-w-md leading-relaxed text-gray-400">
                            Empowering libraries, schools, and organizations with flexible digital library solutions. We believe in making knowledge
                            accessible to everyone through innovative technology.
                        </p>
                        <div className="flex gap-2">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 transition-colors hover:bg-indigo-600"
                            >
                                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 transition-colors hover:bg-yellow-500"
                            >
                                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 transition-colors hover:bg-green-600"
                            >
                                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-6 text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: 'index.html', color: 'bg-yellow-400', hover: 'hover:text-yellow-400' },
                                { name: 'Products', href: 'products.html', color: 'bg-indigo-600', hover: 'hover:text-indigo-400' },
                                { name: 'Pricing', href: 'pricing.html', color: 'bg-green-500', hover: 'hover:text-green-400' },
                                { name: 'About', href: 'about.html', color: 'bg-indigo-600', hover: 'hover:text-indigo-400' },
                                { name: 'Support', href: 'support.html', color: 'bg-indigo-600', hover: 'hover:text-indigo-400' },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <a className={`text-gray-400 ${link.hover} group flex items-center transition-colors`} href={link.href}>
                                        <span
                                            className={`h-1.5 w-1.5 ${link.color} mr-2 rounded-full opacity-0 transition-opacity group-hover:opacity-100`}
                                        ></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-6 text-lg font-semibold text-white">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-500">
                                    <svg className="h-5 w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <a href="mailto:info@banalai.com" className="text-white transition-colors hover:text-indigo-400">
                                        info@banalai.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-600">
                                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <a href="tel:+1234567890" className="text-white transition-colors hover:text-indigo-400">
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                            <p className="text-sm text-gray-400">&copy; 2026 Banalai. All rights reserved.</p>
                            <p className="text-sm text-gray-500">
                                Powered By:{' '}
                                <a
                                    href="https://www.alphalib.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-yellow-400 transition-colors hover:text-yellow-300"
                                >
                                    Alphalib
                                </a>
                            </p>
                        </div>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-400 transition-colors hover:text-green-400">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 transition-colors hover:text-yellow-400">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 transition-colors hover:text-indigo-400">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default BanalaiFooter;
