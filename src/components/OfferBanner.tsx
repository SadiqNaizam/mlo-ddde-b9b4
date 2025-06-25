import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OfferBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const OfferBanner: React.FC<OfferBannerProps> = ({
  title,
  description,
  imageUrl,
  ctaText,
  ctaLink,
}) => {
  console.log('OfferBanner loaded:', title);

  return (
    <div className="relative w-full rounded-xl overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative min-h-[300px] p-8 md:p-12 flex flex-col justify-center items-start text-white">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-lg">
            {title}
          </h2>
          <p className="max-w-lg text-lg text-gray-200 drop-shadow-md">
            {description}
          </p>
          <Button asChild size="lg" className="mt-4 bg-amber-500 hover:bg-amber-600 text-black font-bold shadow-md transition-transform duration-200 group-hover:scale-105">
            <Link to={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Subtle Border Glow on Hover */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-amber-400 group-hover:ring-2 transition-all duration-300 pointer-events-none" />
    </div>
  );
};

export default OfferBanner;