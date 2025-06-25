import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, CreditCard, Lock } from 'lucide-react';

const BookingPage = () => {
  console.log('BookingPage loaded');
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Secure Your Booking
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              You're just a few steps away from your next adventure.
            </p>
          </header>

          <Card className="w-full shadow-lg">
            <CardHeader>
              <CardTitle>Booking for: Majestic Rajasthan Tour</CardTitle>
              <CardDescription>
                Please complete the steps below to finalize your trip.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Using Accordion for multi-step form feel */}
              <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                
                {/* Step 1: Traveler Details */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold">Step 1: Traveler Details</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4">
                      {/* Using a grid for layout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" placeholder="As on your government ID" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="you@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="dob">Date of Birth</Label>
                           <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                captionLayout="dropdown-buttons"
                                fromYear={1930}
                                toYear={new Date().getFullYear()}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                       <Button className="w-full md:w-auto">Save & Continue</Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Step 2: Payment Information */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold">Step 2: Payment Information</AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 space-y-6">
                      <div className="rounded-md bg-blue-50 p-4 text-sm text-blue-700 flex items-center gap-2">
                         <Lock className="h-4 w-4" />
                         <span>Your payment information is encrypted and secure.</span>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-name">Name on Card</Label>
                          <Input id="card-name" placeholder="John Doe" />
                        </div>
                         <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                           <div className="relative">
                              <Input id="card-number" placeholder="0000 0000 0000 0000" />
                              <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                           </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry (MM/YY)</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Step 3: Review & Confirm */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold">Step 3: Review & Confirm</AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 space-y-4">
                        <h4 className="font-medium">Booking Summary</h4>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground bg-gray-50 p-4 rounded-md">
                           <li>Package: Majestic Rajasthan Tour</li>
                           <li>Duration: 10 Days / 9 Nights</li>
                           <li>Travelers: 2 Adults</li>
                           <li>Dates: 15th Oct - 25th Oct, 2024</li>
                        </ul>
                        <div className="border-t pt-4 mt-4 flex justify-between items-center font-bold text-xl">
                            <span>Total Payable Amount</span>
                            <span>₹ 95,000</span>
                        </div>
                         <p className="text-xs text-gray-500">
                           By clicking "Confirm & Pay", you agree to our Terms of Service and Privacy Policy.
                         </p>
                        <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                            Confirm & Pay
                        </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;