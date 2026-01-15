import { usePage } from '@inertiajs/react';
import BanalaiLayout from './Layout';

const Show = () => {
    const { showData } = usePage<any>().props;
    return (
        <BanalaiLayout>
            <div className="mx-auto max-w-7xl px-4 pt-20 pb-20 sm:px-6 lg:px-8">
                <div className={`mb-4 flex h-20 w-20 items-center justify-center rounded-lg`}>
                    <img src={`/assets/images/pages/${showData?.icon}`} alt={showData?.name} className="h-full w-full object-contain rounded-lg" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">{showData?.name}</h3>

                {/* Short Description */}
                <p className="mb-4 text-gray-600">{showData?.short_description}</p>
                <div dangerouslySetInnerHTML={{ __html: showData?.long_description }} className="prose max-w-none prose-img:w-full"></div>
            </div>
        </BanalaiLayout>
    );
};

export default Show;
