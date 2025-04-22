import { useState, useEffect } from 'react';

const useScreenItems = () => {
  const [itemCount, setItemCount] = useState(5);

  useEffect(() => {
    const calculateItems = () => {
      // Get the container width (movie-grid)
      const container = document.querySelector('.movie-grid');
      if (!container) return;

      // Get the actual container width
      const containerWidth = container.getBoundingClientRect().width;
      
      // Calculate how many items can fit based on the grid item width (180px) plus gap (15px)
      const itemWidth = 180; // Base item width from CSS
      const gap = 15; // Gap between items from CSS
      const itemWithGap = itemWidth + gap;
      
      // Calculate maximum items that can fit in the container
      const maxItems = Math.floor(containerWidth / itemWithGap);
      
      // Set a minimum of 2 items and maximum of 8
      const finalCount = Math.min(Math.max(maxItems, 2), 13);
      
      setItemCount(finalCount);
    };

    // Initial calculation after a short delay to ensure container is rendered
    const initialTimer = setTimeout(calculateItems, 0);

    // Recalculate on resize with debounce
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(calculateItems, 0);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearTimeout(initialTimer);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return itemCount;
};

export default useScreenItems; 