import { cn } from "@/lib/utils";
import { Html, Head, Main, NextScript } from "next/document";
import { SEOElements } from "@/components/SEO";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <SEOElements />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsOrganization",
              name: "Evanston Diving Club",
              description:
                "Illinois' premier year-round diving program training champions from beginners to Olympic contenders.",
              url: "https://www.evanstondiving.com",
              telephone: "+1-847-840-2530",
              email: "cara.evanstondiving@gmail.com",
              sport: "Diving",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Evanston",
                addressRegion: "IL",
                postalCode: "60208",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.instagram.com/evanstondivingclub/",
              ],
            }),
          }}
        />
      </Head>
      <body
        className={cn(
          "min-h-screen w-full scroll-smooth bg-background text-foreground antialiased"
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
