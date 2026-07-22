"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "rejected" | null;

const storageKey = "boomlab-analytics-consent";
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const validMeasurementId = measurementId && /^G-[A-Z0-9]+$/i.test(measurementId) ? measurementId : null;

const copy = {
  es: {
    title: "Analítica con tu autorización",
    body: "Boom! Lab puede usar Google Analytics para conocer qué contenidos resultan útiles. La medición se activa sólo si aceptas y no se envían los datos del formulario.",
    accept: "Aceptar analítica",
    reject: "Continuar sin analítica",
    preferences: "Preferencias de analítica",
  },
  en: {
    title: "Analytics with your permission",
    body: "Boom! Lab may use Google Analytics to understand which content is useful. Measurement starts only if you accept, and form details are never sent.",
    accept: "Accept analytics",
    reject: "Continue without analytics",
    preferences: "Analytics preferences",
  },
} as const;

export function AnalyticsConsent() {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);
  const [locale, setLocale] = useState<keyof typeof copy>("es");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLocale(window.location.pathname.startsWith("/en") ? "en" : "es");
      const stored = window.localStorage.getItem(storageKey);
      if (stored === "accepted" || stored === "rejected") setChoice(stored);
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  if (!validMeasurementId || !ready) return null;

  const t = copy[locale];

  function choose(nextChoice: Exclude<ConsentChoice, null>) {
    window.localStorage.setItem(storageKey, nextChoice);
    window.gtag?.("consent", "update", {
      analytics_storage: nextChoice === "accepted" ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    setChoice(nextChoice);
  }

  return (
    <>
      {choice === "accepted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${validMeasurementId}`} strategy="afterInteractive" />
          <Script id="boomlab-google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
              gtag('js', new Date());
              gtag('config', '${validMeasurementId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}
      {choice === null ? (
        <aside className="analytics-consent" role="dialog" aria-modal="false" aria-labelledby="analytics-consent-title">
          <div>
            <strong id="analytics-consent-title">{t.title}</strong>
            <p>{t.body}</p>
          </div>
          <div className="analytics-consent-actions">
            <button type="button" onClick={() => choose("accepted")}>{t.accept}</button>
            <button type="button" className="analytics-reject" onClick={() => choose("rejected")}>{t.reject}</button>
          </div>
        </aside>
      ) : (
        <button className="analytics-preferences" type="button" onClick={() => setChoice(null)}>{t.preferences}</button>
      )}
    </>
  );
}
