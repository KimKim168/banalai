import FeaturesSection from '@/components/Banalai/FeaturesSection';
import FreePlanSection from '@/components/Banalai/FreePlanSection';
import HeroBanalai from '@/components/Banalai/HeroBanalai';
import BanalaiLayout from './Layout';

const Index = () => {
    const features = {
        title: '',
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
            <HeroBanalai />
            <FeaturesSection features={features} />
            <div className="mt-20">
                <FreePlanSection />
            </div>
        </BanalaiLayout>
    );
};
{
}
export default Index;
