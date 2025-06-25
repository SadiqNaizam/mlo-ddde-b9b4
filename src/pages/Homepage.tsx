import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DestinationSearchBar from '@/components/DestinationSearchBar';
import PackageCard from '@/components/PackageCard';
import OfferBanner from '@/components/OfferBanner';

// Shadcn/ui Components
import { Button } from '@/components/ui/button';

const popularPackages = [
  {
    slug: 'golden-triangle-delight',
    imageUrl: 'https://images.pexels.com/photos/3577366/pexels-photo-3577366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Golden Triangle Delight',
    description: 'Explore the iconic cities of Delhi, Agra, and Jaipur. Witness the majestic Taj Mahal and the royal forts of Rajasthan.',
    price: 25000,
    highlights: ['Taj Mahal Sunrise Tour', 'Amber Fort, Jaipur', '4-Star Hotels Included'],
  },
  {
    slug: 'kerala-backwater-bliss',
    imageUrl: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Kerala Backwater Bliss',
    description: 'Relax and unwind on a traditional houseboat as you glide through the serene backwaters of Alleppey. A truly tranquil escape.',
    price: 35000,
    highlights: ['Private Houseboat Stay', 'Authentic Keralan Cuisine', 'Village Tours'],
  },
  {
    slug: 'himalayan-adventure-rishikesh',
    imageUrl: 'https://images.pexels.com/photos/7919692/pexels-photo-7919692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Himalayan Adventure',
    description: 'Experience the thrill of the Himalayas with white-water rafting in Rishikesh and serene treks with breathtaking mountain views.',
    price: 28000,
    highlights: ['Ganges River Rafting', 'Yoga & Meditation Sessions', 'Scenic Mountain Treks'],
  },
];

const Homepage = () => {
  console.log('Homepage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Kerala backwaters"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 drop-shadow-lg">
              Incredible India Awaits
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
              Discover breathtaking destinations and create unforgettable memories. Your journey begins here.
            </p>
            <DestinationSearchBar />
          </div>
        </section>

        {/* Popular Packages Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Popular Travel Packages
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Handpicked journeys to India's most cherished destinations, designed for the modern traveler.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularPackages.map((pkg) => (
                <PackageCard key={pkg.slug} {...pkg} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/packages-search-results">
                  View All Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Offer Banner Section */}
        <section className="py-16 md:py-24 bg-muted/40">
           <div className="container mx-auto px-4">
              <OfferBanner 
                title="Festive Season Specials"
                description="Book your holiday trip now and get up to 20% off on hotel stays and exclusive deals on flights. Don't miss out!"
                imageUrl="https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                ctaText="Explore Offers"
                ctaLink="/offers"
              />
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;