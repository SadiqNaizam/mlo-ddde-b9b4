import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, IndianRupee } from 'lucide-react';

interface PackageCardProps {
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  highlights: string[];
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const PackageCard: React.FC<PackageCardProps> = ({
  slug,
  imageUrl,
  title,
  description,
  price,
  highlights,
}) => {
  console.log('PackageCard loaded for:', title);

  return (
    <motion.div
      whileHover="visible"
      initial="hidden"
      className="group relative"
    >
      <Link to={`/packages-search-results#${slug}`} className="block">
        <Card className="w-full overflow-hidden transition-shadow duration-300 hover:shadow-2xl h-full flex flex-col">
          <CardHeader className="p-0 border-b relative">
            <AspectRatio ratio={16 / 9}>
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </AspectRatio>
            <motion.div
              variants={overlayVariants}
              className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-4"
            >
              <h4 className="text-lg font-semibold text-white mb-2">Package Highlights</h4>
              <ul className="space-y-1 text-sm text-gray-200">
                {highlights.slice(0, 3).map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-green-400 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </CardHeader>

          <CardContent className="p-4 flex-grow">
            <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">{title}</h3>
            <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
          </CardContent>

          <CardFooter className="p-4 bg-gray-50 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500">Starting from</p>
              <p className="text-2xl font-bold text-primary flex items-center">
                <IndianRupee className="h-5 w-5 mr-1" />
                {price.toLocaleString('en-IN')}
              </p>
            </div>
            <div className="text-primary font-semibold group-hover:underline">
              View Package &rarr;
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default PackageCard;