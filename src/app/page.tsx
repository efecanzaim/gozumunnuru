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
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(detectMobileFromNavigator());
  }, []);

  return isMobileDevice ? <MobileHome /> : <DesktopHome />;
}

