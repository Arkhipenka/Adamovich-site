"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const consentStorageKey = "adamovich:analytics-consent";
const consentEventName = "adamovich:analytics-consent-change";

export function GoogleAnalytics() {
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setIsAllowed(window.localStorage.getItem(consentStorageKey) === "accepted");
    };

    syncConsent();
    window.addEventListener(consentEventName, syncConsent);

    return () => {
      window.removeEventListener(consentEventName, syncConsent);
    };
  }, []);

  if (process.env.NODE_ENV !== "production" || !gaId || !isAllowed) {
    return null;
  }

  return (
    <>
      <Script
        id="google-analytics-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
