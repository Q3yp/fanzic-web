'use client';

import {useTranslations, useLocale} from 'next-intl';
import {useRouter, usePathname} from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container-width section-padding py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="h-12 w-40 relative">
              {locale === 'zh' ? (
                <Image
                  src="/梵帝logo新（中文版）.png"
                  alt="梵帝风机"
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <Image
                  src="/梵帝风机英文Logo（透明底）.png"
                  alt="FanDi Fan"
                  fill
                  className="object-contain"
                  priority
                />
              )}
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-gray-700 hover:text-blue-600 font-medium">
              {t('home')}
            </Link>
            <Link href={`/${locale}/products`} className="text-gray-700 hover:text-blue-600 font-medium">
              {t('products')}
            </Link>
            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-blue-600 font-medium">
              {t('about')}
            </Link>
            <Link href={`/${locale}/research`} className="text-gray-700 hover:text-blue-600 font-medium">
              {t('research')}
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-700 hover:text-blue-600 font-medium">
              {t('contact')}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  locale === 'en' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLocale('zh')}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  locale === 'zh' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}