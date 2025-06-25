import React, { useEffect, useRef } from 'react';
import { animate, motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming cn utility for class merging exists

interface AnimatedCounterProps {
  /** The target value to animate to */
  value: number;
  /** Optional class names for styling the span element */
  className?: string;
  /** Animation duration in seconds */
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className, duration = 0.8 }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const previousValueRef = useRef(value);

  useEffect(() => {
    console.log('AnimatedCounter loaded or value changed to:', value);
    const node = nodeRef.current;

    if (node) {
      const fromValue = previousValueRef.current;
      const toValue = value;

      const controls = animate(fromValue, toValue, {
        duration,
        ease: 'easeOut',
        onUpdate(latest) {
          // Format with commas, no decimal places for a clean look
          node.textContent = new Intl.NumberFormat('en-IN').format(Math.round(latest));
        },
      });

      // Update the ref for the next render
      previousValueRef.current = value;

      // Return cleanup function to stop animation if component unmounts or value changes again
      return () => controls.stop();
    }
  }, [value, duration]);

  return (
    <motion.span ref={nodeRef} className={cn('font-bold', className)}>
      {/* Set the initial value directly */}
      {new Intl.NumberFormat('en-IN').format(value)}
    </motion.span>
  );
};

export default AnimatedCounter;