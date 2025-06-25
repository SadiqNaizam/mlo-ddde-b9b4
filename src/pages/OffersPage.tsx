import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OfferBanner from '@/components/OfferBanner';
import PackageCard from '@/components/PackageCard';

// Placeholder data for the offers
const mainOffer = {
  title: "Monsoon Magic in Kerala",
  description: "Experience the lush greenery of God's Own Country during the monsoon. Unbeatable prices on houseboats and resort stays. Limited time offer!",
  imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc68f946?q=80&w=2070&auto=format&fit=crop",
  ctaText: "Explore Kerala Deals",
  ctaLink: "/packages-search-results?destination=kerala"
};

const packageOffers = [
  {
    slug: "himalayan-summer-escape",
    imageUrl: "https://images.unsplash.com/photo-1616563332224-a1dfa0385542?q=80&w=1974&auto=format&fit=crop",
    title: "Himalayan Summer Escape",
    description: "Beat the heat with our exclusive summer packages to Shimla and Manali. Includes comfortable stays, scenic sightseeing, and adventure activities.",
    price: 24999,
    highlights: ["4-Star Hotel Stay", "Daily Breakfast", "Guided Trekking"]
  },
  {
    slug: "royal-rajasthan-offseason",
    imageUrl: "https://images.unsplash.com/photo-1594008137329-1a7250133a88?q=80&w=2071&auto=format&fit=crop",
    title: "Royal Rajasthan Off-Season Deal",
    description: "Explore the majestic forts and palaces of Jaipur and Udaipur at a fraction of the cost. A truly royal experience without the premium price tag.",
    price: 19999,
    highlights: ["Heritage Hotel Stay", "Cultural Evening Show", "Jaipur City Tour"]
  },
  {
    slug: "goa-beach-bonanza",
    imageUrl: "https://images.unsplash.com/photo-1590374504364-0d4e9e358384?q=80&w=1974&auto=format&fit=crop",
    title: "Goa Beach Bonanza",
    description: "Get your dose of sun, sand, and sea with our all-inclusive Goa packages. Perfect for a quick, rejuvenating getaway with friends or family.",
    price: 15999,
    highlights: ["Beachfront Resort", "Watersports Included", "Airport Transfers"]
  }
];


const OffersPage = () => {
  console.log('OffersPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12">
          
          {/* Main Offer Banner */}
          <section className="mb-12">
            <OfferBanner
              title={mainOffer.title}
              description={mainOffer.description}
              imageUrl={mainOffer.imageUrl}
              ctaText={mainOffer.ctaText}
              ctaLink={mainOffer.ctaLink}
            />
          </section>

          {/* Section for other deals */}
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">More Amazing Deals</h2>
            <p className="text-center text-muted-foreground mb-8">Grab these limited-time offers before they're gone!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packageOffers.map((pkg) => (
                <PackageCard
                  key={pkg.slug}
                  slug={pkg.slug}
                  imageUrl={pkg.imageUrl}
                  title={pkg.title}
                  description={pkg.description}
                  price={pkg.price}
                  highlights={pkg.highlights}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OffersPage;