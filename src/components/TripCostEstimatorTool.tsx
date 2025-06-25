import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import AnimatedCounter from '@/components/AnimatedCounter'; // Assuming this component exists
import { ArrowRight } from 'lucide-react';

const TripCostEstimatorTool: React.FC = () => {
  console.log('TripCostEstimatorTool loaded');

  const navigate = useNavigate();

  // State for all user-configurable options
  const [days, setDays] = useState(7);
  const [travelers, setTravelers] = useState(2);
  const [hotelTier, setHotelTier] = useState('4-star');
  const [includeFlights, setIncludeFlights] = useState(true);
  const [includeCabs, setIncludeCabs] = useState(true);
  const [includeActivities, setIncludeActivities] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  // Memoized calculation logic
  const calculateCost = useCallback(() => {
    const hotelTierMultipliers: { [key: string]: number } = {
      '3-star': 1.0,
      '4-star': 1.5,
      '5-star': 2.5,
    };

    const baseCostPerDay = 3000; // Base cost per person per day for accommodation/food
    const flightCost = 12000; // Per person, one-time
    const cabCostPerDay = 2500; // Per day, for the group
    const activityCostPerDay = 1500; // Per person, per day

    let cost = 0;

    // Hotel & Base cost
    cost += days * travelers * baseCostPerDay * (hotelTierMultipliers[hotelTier] || 1);

    // Optional Add-ons
    if (includeFlights) {
      cost += travelers * flightCost;
    }
    if (includeCabs) {
      cost += days * cabCostPerDay;
    }
    if (includeActivities) {
      cost += days * travelers * activityCostPerDay;
    }
    
    setTotalCost(cost);
  }, [days, travelers, hotelTier, includeFlights, includeCabs, includeActivities]);


  // Recalculate cost whenever a dependency changes
  useEffect(() => {
    calculateCost();
  }, [calculateCost]);

  const handleNavigateToPackages = () => {
    // You could pass the budget in the URL query if the results page supports it
    // e.g., navigate(`/packages-search-results?max-budget=${totalCost}`);
    navigate('/packages-search-results');
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Trip Cost Estimator</CardTitle>
        <CardDescription>Customize your trip to see a real-time price estimate.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="days">Number of Days</Label>
            <Input id="days" type="number" value={days} onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))} min="1" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="travelers">Number of Travelers</Label>
            <Input id="travelers" type="number" value={travelers} onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value) || 1))} min="1" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hotel-tier">Hotel Quality</Label>
          <Select value={hotelTier} onValueChange={setHotelTier}>
            <SelectTrigger id="hotel-tier">
              <SelectValue placeholder="Select hotel quality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3-star">3-Star (Comfort)</SelectItem>
              <SelectItem value="4-star">4-Star (Premium)</SelectItem>
              <SelectItem value="5-star">5-Star (Luxury)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Separator />

        <div className="space-y-4">
            <h3 className="text-lg font-medium">Additional Services</h3>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <Label htmlFor="flights-switch" className="font-normal">Include Flights</Label>
                <Switch id="flights-switch" checked={includeFlights} onCheckedChange={setIncludeFlights} />
            </div>
             <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <Label htmlFor="cabs-switch" className="font-normal">Include Local Cabs</Label>
                <Switch id="cabs-switch" checked={includeCabs} onCheckedChange={setIncludeCabs} />
            </div>
             <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <Label htmlFor="activities-switch" className="font-normal">Include Guided Activities</Label>
                <Switch id="activities-switch" checked={includeActivities} onCheckedChange={setIncludeActivities} />
            </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
            <p className="text-sm text-gray-600">Estimated Total Cost</p>
            <div className="text-4xl font-extrabold text-gray-900">
                <span className="text-2xl font-semibold align-top mr-1">₹</span>
                <AnimatedCounter value={totalCost} />
            </div>
        </div>
        <Button size="lg" onClick={handleNavigateToPackages}>
          See Packages in this Budget
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TripCostEstimatorTool;