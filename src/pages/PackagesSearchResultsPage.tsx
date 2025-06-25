import React, { useState } from 'react';

// Custom Layout and Page Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PackageCard from '@/components/PackageCard';

// shadcn/ui Components for Filtering and Layout
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

// Sample data for package cards
const samplePackages = [
  {
    slug: "serene-kerala-backwaters",
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b4046249a26?q=80&w=870&auto=format&fit=crop",
    title: "Serene Kerala Backwaters",
    description: "Float along the tranquil backwaters of Kerala in a traditional houseboat. Experience lush landscapes and local life.",
    price: 45000,
    highlights: ["Houseboat Stay", "Local Cuisine", "Village Tours"],
  },
  {
    slug: "majestic-rajasthan-forts",
    imageUrl: "https://images.unsplash.com/photo-1599661046283-702773ae7543?q=80&w=774&auto=format&fit=crop",
    title: "Majestic Rajasthan Forts",
    description: "Explore the grandeur of Rajasthan's royal history through its magnificent forts and palaces in Jaipur, Udaipur, and Jodhpur.",
    price: 65000,
    highlights: ["Amber Fort", "City Palace Udaipur", "Mehrangarh Fort"],
  },
  {
    slug: "himalayan-adventure-in-manali",
    imageUrl: "https://images.unsplash.com/photo-1626621341526-24a0fe1033b2?q=80&w=870&auto=format&fit=crop",
    title: "Himalayan Adventure in Manali",
    description: "Get your adrenaline pumping with trekking, paragliding, and rafting in the stunning landscapes of Manali.",
    price: 38000,
    highlights: ["Solang Valley", "Trekking", "River Rafting"],
  },
  {
    slug: "goa-beach-paradise",
    imageUrl: "https://images.unsplash.com/photo-1590372793661-a4bce965b32a?q=80&w=774&auto=format&fit=crop",
    title: "Goa Beach Paradise",
    description: "Relax on the sun-kissed beaches of Goa, enjoy vibrant nightlife, and savor delicious seafood.",
    price: 32000,
    highlights: ["Beach Hopping", "Water Sports", "Nightlife"],
  },
  {
    slug: "spiritual-journey-to-varanasi",
    imageUrl: "https://images.unsplash.com/photo-1582221295376-72d8e41416f1?q=80&w=774&auto=format&fit=crop",
    title: "Spiritual Journey to Varanasi",
    description: "Witness ancient rituals on the ghats of the Ganges and explore the spiritual heart of India.",
    price: 28000,
    highlights: ["Ganges Aarti", "Boat Ride", "Temple Visits"],
  },
  {
    slug: "wildlife-safari-at-jim-corbett",
    imageUrl: "https://images.unsplash.com/photo-1607542475149-a8c279a1f4aa?q=80&w=870&auto=format&fit=crop",
    title: "Wildlife Safari at Jim Corbett",
    description: "Embark on a thrilling jungle safari to spot the majestic Bengal tiger and other diverse wildlife.",
    price: 42000,
    highlights: ["Jeep Safari", "Tiger Spotting", "Nature Walks"],
  },
];

const PackagesSearchResultsPage = () => {
  console.log("Packages/Search Results Page loaded");
  const [priceRange, setPriceRange] = useState([75000]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Filter & Sort</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sort By */}
                <div className="space-y-2">
                  <Label htmlFor="sort-by">Sort By</Label>
                  <Select defaultValue="price-asc">
                    <SelectTrigger id="sort-by">
                      <SelectValue placeholder="Select sorting" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popularity">Popularity</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <Label htmlFor="price-range">Max Price (₹{priceRange[0].toLocaleString('en-IN')})</Label>
                  <Slider
                    id="price-range"
                    max={100000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                </div>

                {/* Categories */}
                <div className="space-y-3">
                  <Label>Interests</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="adventure" />
                    <Label htmlFor="adventure" className="font-normal">Adventure</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="relaxation" />
                    <Label htmlFor="relaxation" className="font-normal">Relaxation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="cultural" />
                    <Label htmlFor="cultural" className="font-normal">Cultural</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="wildlife" />
                    <Label htmlFor="wildlife" className="font-normal">Wildlife</Label>
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </aside>

          {/* Packages Grid */}
          <main className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6">
              Showing {samplePackages.length} Holiday Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {samplePackages.map((pkg) => (
                <PackageCard key={pkg.slug} {...pkg} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PackagesSearchResultsPage;