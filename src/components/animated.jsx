import React, { useEffect, useState } from 'react';

const Animated = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNumberAnimation, setShowNumberAnimation] = useState(false);
  const specificPageOffset = 2 * window.innerHeight; // Assuming the specific page is at a certain scroll position

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition >= specificPageOffset) {
      setShowNumberAnimation(true);
    }
  }, [scrollPosition, specificPageOffset]);

  return (
    <div>
      {showNumberAnimation && (
        <div className="number-animation">
          {/* Place your number animation component here */}
          {/* For example, <NumberAnimationComponent /> */}
        </div>
      )}
      {/* Your page content here */}
      {/* Make sure the content is long enough to trigger scrolling */}
      hl
    </div>
  );
};

export default Animated;
