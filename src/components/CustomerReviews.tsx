'use client';

import { useTranslations } from 'next-intl';

interface Review {
  id: string;
  name: string;
  company: string;
  rating: number;
  review: string;
  category: 'durability' | 'effectiveness' | 'energy_saving' | 'production' | 'service' | 'global';
}

export default function CustomerReviews() {
  const t = useTranslations('reviews');

  const reviews: Review[] = [
    {
      id: '1',
      name: 'FanDi Production Base',
      company: t('farms.production'),
      rating: 5,
      review: t('production.review'),
      category: 'production'
    },
    {
      id: '2',
      name: 'Large Scale Farm',
      company: t('farms.largeFarm'),
      rating: 5,
      review: t('largeFarm.review'),
      category: 'service'
    },
    {
      id: '3',
      name: 'International Sales',
      company: t('farms.international'),
      rating: 5,
      review: t('international.review'),
      category: 'global'
    }
  ];


  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 section-light">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
        </div>

        {/* Flat layout with first card large in middle */}
        <div className="max-w-6xl mx-auto">
          {/* Large center card */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-[500px] text-center">
              <h3 className="font-semibold text-gray-900 text-2xl mb-4">{reviews[0].company}</h3>
              
              <div className="mb-6 flex justify-center">
                {renderStars(reviews[0].rating)}
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed text-lg">
                &ldquo;{reviews[0].review}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Smaller side cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.slice(1).map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <h3 className="font-semibold text-gray-900 text-lg mb-3">{review.company}</h3>
                
                <div className="mb-4 flex justify-center">
                  {renderStars(review.rating)}
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed">
                  &ldquo;{review.review}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}