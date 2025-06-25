import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar as CalendarIcon, Users, Search, Plus, Minus } from 'lucide-react';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';

const DestinationSearchBar = () => {
  const [destination, setDestination] = useState<string>('');
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 7)),
  });
  const [travelers, setTravelers] = useState<number>(2);

  const navigate = useNavigate();

  console.log('DestinationSearchBar loaded');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination) {
      params.append('destination', destination);
    }
    if (date?.from) {
      params.append('from', format(date.from, 'yyyy-MM-dd'));
    }
    if (date?.to) {
      params.append('to', format(date.to, 'yyyy-MM-dd'));
    }
    params.append('travelers', travelers.toString());

    navigate(`/packages-search-results?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-2 bg-white/20 backdrop-blur-sm rounded-full shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
        
        {/* Destination Input */}
        <div className="flex-1 w-full flex items-center px-4">
          <MapPin className="h-5 w-5 text-gray-100 mr-2" />
          <Input
            type="text"
            placeholder="Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-transparent border-none text-white placeholder:text-gray-200 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg"
          />
        </div>
        
        <Separator orientation="vertical" className="h-8 bg-white/30 hidden md:block" />

        {/* Date Range Picker */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                'w-full md:w-auto justify-start text-left font-normal text-lg text-white hover:bg-white/10 hover:text-white px-4 py-6 rounded-full',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-5 w-5" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'LLL dd')} - {format(date.to, 'LLL dd')}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="center">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>

        <Separator orientation="vertical" className="h-8 bg-white/30 hidden md:block" />

        {/* Travelers Popover */}
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full md:w-auto text-lg text-white hover:bg-white/10 hover:text-white px-4 py-6 rounded-full">
                    <Users className="mr-2 h-5 w-5" />
                    {travelers} Traveler{travelers > 1 ? 's' : ''}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60" align="center">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Travelers</h4>
                        <p className="text-sm text-muted-foreground">
                            How many people are going?
                        </p>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <Button variant="outline" size="icon" onClick={() => setTravelers(Math.max(1, travelers - 1))}>
                            <Minus className="h-4 w-4" />
                        </Button>
                        <Label className="text-lg font-bold">{travelers}</Label>
                        <Button variant="outline" size="icon" onClick={() => setTravelers(travelers + 1)}>
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>

        {/* Search Button */}
        <Button 
            onClick={handleSearch}
            className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full text-lg px-8 py-6"
            size="lg"
        >
            <Search className="h-6 w-6" />
        </Button>

      </div>
    </div>
  );
};

export default DestinationSearchBar;