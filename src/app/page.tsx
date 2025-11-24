'use client';

import React, { useState, useEffect } from 'react';
import MobileHome from "@/components/mobile/Home/MobileHome";
import DesktopHome from "@/components/desktop/Home/DesktopHome";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkDeviceType = () => {
      const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(mobile);
      setIsLoading(false);
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  if (isLoading) {
    return null; // Or a loading spinner
  }

  if (isMobile) {
    return <MobileHome />;
  }

  return <DesktopHome />;
}

