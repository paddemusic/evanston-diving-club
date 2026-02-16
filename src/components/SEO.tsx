import Head from 'next/head';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

// SEO elements that can be used in _document.tsx (returns JSX without Head wrapper)
export function SEOElements({
  title = "Evanston Diving Club | Illinois' Premier Year-Round Diving Program",
  description = "Experience Olympic-level coaching and world-class facilities at Northwestern University. Start your diving journey today with Evanston Diving Club.",
  image = "https://www.evanstondiving.com/og-image.png",
  url,
}: SEOProps) {
    const canonicalUrl = url || "https://www.evanstondiving.com/";
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Evanston Diving Club" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}

            {/* Viewport and mobile optimization */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </>
    );
}

// SEO component for use in pages/_app.tsx or individual pages (uses next/head)
export function SEO(props: SEOProps) {
    return (
        <Head>
            <SEOElements {...props} />
        </Head>
    );
}
