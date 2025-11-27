'use client';

import { useEffect, useState } from "react";
import MobileHome from "@/main/mobile/Home/MobileHome";
import DesktopHome from "@/main/desktop/pages/home/DesktopHome";

declare global {
  interface Navigator {
    userAgentData?: {
      mobile?: boolean;
    };
  }
}

const PHONE_USER_AGENT_REGEX =
  /(Android.*Mobile|iPhone|iPod|IEMobile|Windows Phone|BlackBerry|Opera Mini)/i;

const isPhoneUserAgent = (userAgent: string) => {
  if (!userAgent) {
    return false;
  }

  return PHONE_USER_AGENT_REGEX.test(userAgent);
};

const detectMobileFromNavigator = () => {
  if (typeof navigator === "undefined") {
    return false;
  }

  if (typeof navigator.userAgentData?.mobile === "boolean") {
    return navigator.userAgentData.mobile;
  }

  return isPhoneUserAgent(navigator.userAgent ?? "");
};

export default function HomePage() {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobileDevice(detectMobileFromNavigator());
  }, []);

  // İlk render'da client-side detection yap
  if (isMobileDevice === null) {
    if (typeof window !== "undefined") {
      const initialMobile = detectMobileFromNavigator();
      return initialMobile ? <MobileHome /> : <DesktopHome />;
    }
    // SSR için varsayılan olarak desktop göster (hydration sonrası düzelecek)
    return <DesktopHome />;
  }

  return isMobileDevice ? <MobileHome /> : <DesktopHome />;
}

