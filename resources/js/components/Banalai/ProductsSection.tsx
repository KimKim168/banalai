import { usePage } from "@inertiajs/react";

const imgBgColors = [
    'bg-purple-500',
    'bg-green-500',
    'bg-yellow-400',
    'bg-blue-500'
];

export default function ProductsSection() {
    const { productData } = usePage<any>().props;

    return (
        <section className="px-4 pt-32 pb-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                        {productData?.name}
                    </h1>

                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        {productData?.short_description}
                    </p>
                </div>

                {/* Products */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {productData?.children?.map((item, index) => (
                        <div
                            key={item?.id}
                            className="rounded-xl border border-gray-100 bg-white p-8 shadow-md transition hover:shadow-xl"
                        >
                            {/* Icon */}
                            <div
                                className={`mb-4 flex h-16 w-16 items-center justify-center rounded-lg 
                                ${imgBgColors[index % imgBgColors.length]}`}
                            >
                                <img
                                    src={`/assets/images/pages/${item?.icon}`}
                                    alt={item?.name}
                                    className="h-10 w-10 object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                                {item?.name}
                            </h3>

                            {/* Short Description */}
                            <p className="mb-4 text-gray-600">
                                {item?.short_description}
                            </p>

                            {/* Long Description (CKEditor HTML) */}
                            {item?.long_description && (
                                <div
                                    className="prose max-w-none prose-p:my-0"
                                    dangerouslySetInnerHTML={{
                                        __html: item?.long_description
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
