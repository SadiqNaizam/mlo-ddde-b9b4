import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Mountain className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-semibold">Wanderlust India</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </nav>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Wanderlust India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;