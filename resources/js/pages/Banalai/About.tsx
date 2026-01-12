import FeaturesSection from '@/components/Banalai/FeaturesSection';
import AboutBanalai from './AboutBanalai';
import BanalaiLayout from './Layout';
import StorySection from './StorySection';

const About = () => {
    const featuresData = {
        title: 'Our Core Values',
        children: [
            {
                title: 'Digital Library Subscription',
                short_description: 'Comprehensive subscription management for digital collections and resources.',
                image: '/assets/icon1.png',
            },
            {
                title: 'Library Operation Management',
                short_description: 'Streamline daily operations with powerful management tools and automation.',
                image: '/assets/icon2.png',
            },
            {
                title: 'Resource Subscription Services',
                short_description: 'Manage and distribute digital resources with flexible subscription models.',
                image: '/assets/icon3.png',
            },
            {
                title: 'Cloud & Local Server Deployment',
                short_description: 'Choose between cloud hosting or on-premise deployment based on your needs.',
                image: '/assets/icon4.png',
            },
        ],
    };

    return (
        <BanalaiLayout>
            <AboutBanalai />
            <StorySection />
            <FeaturesSection features={featuresData} />
            {/* CTA */}
            <div className='px-4 sm:px-6 lg:px-8 mx-auto mb-20 max-w-7xl'>
                <div className="rounded-2xl mt-20 bg-[linear-gradient(92deg,#4f46e5,#4a4ae6,#454de7,#3f51e7,#3a55e8,#3558e9,#305cea,#2a5fea,#2563eb,#335deb,#4157eb,#4e51eb,#5c4beb,#6a45ea,#783fea,#8539ea,#9333ea)] p-8 text-center text-white sm:p-12">
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Join Us on Our Mission</h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-indigo-100">
                    Whether you're a library looking to modernize your digital services or an organization seeking better resource management, we're
                    here to help.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                        href="/support"
                        className="rounded-lg bg-white px-8 py-4 font-semibold text-indigo-600 shadow-lg transition-colors hover:bg-gray-100 hover:shadow-xl"
                    >
                        Get in Touch
                    </a>
                    <a
                        href="/pricing"
                        className="rounded-lg border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
                    >
                        View Pricing
                    </a>
                </div>
            </div>
            </div>
            
        </BanalaiLayout>
    );
};

export default About;
