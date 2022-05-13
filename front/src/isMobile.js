import { useState, useEffect } from 'react';

const useDeviceCheck = () => {
  const checkMobile = () => {
    const mobileWidth = 576;
    const windowsWidth = window.innerWidth;
    return windowsWidth <= mobileWidth;
  };

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkMobile);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    window.addEventListener('load', handleResize);
    window.addEventListener('reload', handleResize);

    //   Remove event listeners
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      window.removeEventListener('load', handleResize);
      window.removeEventListener('reload', handleResize);
    };
  }, []);

  return { isMobile };
};

export default useDeviceCheck;
