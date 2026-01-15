const imgBgColors = ['bg-purple-500', 'bg-green-500', 'bg-yellow-400', 'bg-blue-500'];

export default function FeaturesSection({ features }) {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 mt-4">
            <div className="mx-auto max-w-7xl">
                <p className="font-semibold mb-4 text-gray-900">One search. Unlimited knowledge.</p>

                <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8">
                    {features.children.map((item, index) => (
                        <a
                            key={index}
                            href={item?.link ? item?.link : item?.conrect}
                            className="flex flex-col items-center rounded-xl border border-gray-100 p-2 shadow-md transition-shadow hover:shadow-xl"
                        >
                            <div className={`mb-1 flex h-16 w-16 items-center justify-center rounded-lg`}>
                                <img src={`/assets/images/pages/${item?.icon}`} alt={item.title} className="h-full w-full object-cover" />
                            </div>

                            <h3 className="mb-2 text-center text-xs font-semibold text-gray-900 line-clamp-3">{item?.name}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
