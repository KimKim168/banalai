import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { router } from '@inertiajs/react';

const NavLanguage = ({ buttonClassName = '' }) => {
    const { currentLocale } = useTranslation();

    // ✅ frontend safety fallback
    const locale = currentLocale || 'kh';

    const switchLang = (lang: string) => {
        router.visit(`/lang/${lang}`, {
            replace: true,
            preserveScroll: false,
            preserveState: false,
            onSuccess: () => window.location.reload(),
        });
    };

    return (
        <div className="flex items-center gap-2">
            <Button
                size="icon"
                variant="outline"
                onClick={() => switchLang('kh')}
                className={cn(
                    `h-9 overflow-hidden dark:border-white ${
                        locale === 'kh' && 'ring-1 ring-primary/40'
                    }`,
                    buttonClassName,
                )}
            >
                <img
                    src="/assets/icons/flags/kh.png"
                    alt="KH"
                    className="h-full w-full object-cover"
                />
            </Button>

            <Button
                size="icon"
                variant="outline"
                onClick={() => switchLang('en')}
                className={cn(
                    `h-9 overflow-hidden dark:border-white ${
                        locale === 'en' && 'ring-1 ring-primary/40'
                    }`,
                    buttonClassName,
                )}
            >
                <img
                    src="/assets/icons/flags/uk.png"
                    alt="EN"
                    className="h-full w-full object-cover"
                />
            </Button>
        </div>
    );
};

export default NavLanguage;
