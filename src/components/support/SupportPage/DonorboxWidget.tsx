"use client";

import Script from "next/script";

import styles from "./DonorboxWidget.module.css";

type DonorboxWidgetProps = {
  campaign?: string;
};

export function DonorboxWidget({ campaign }: DonorboxWidgetProps) {
  if (!campaign) return null;

  const safeCampaign = campaign.replace(/[^a-zA-Z0-9_-]/g, "");
  if (!safeCampaign) return null;

  const donorboxMarkup = `<dbox-widget campaign="${safeCampaign}" type="donation_form" enable-auto-scroll="true"></dbox-widget>`;

  return (
    <div className={styles.donorbox}>
      <Script src="https://donorbox.org/widgets.js" strategy="afterInteractive" type="module" />
      <div className={styles.embed} dangerouslySetInnerHTML={{ __html: donorboxMarkup }} />
    </div>
  );
}
