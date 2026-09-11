export function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://saafin.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Saafin Water",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Clean, refreshing bottled drinking water for home, work, travel, and everyday life.",
    sameAs: [
      "https://www.facebook.com/saafin",
      "https://www.instagram.com/saafin",
      "https://www.twitter.com/saafin",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@saafin.com",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Saafin Water",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SAAFIN Bottled Drinking Water",
    description:
      "Clean, refreshing bottled drinking water, carefully prepared and sealed for everyday life.",
    image:
      "https://ik.imagekit.io/mmyzvdovbv/Saafin/WhatsApp%20Image%202026-09-01%20at%205.03.45%20PM.jpeg?updatedAt=1788887507286",
    brand: {
      "@type": "Brand",
      name: "Saafin",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "250",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "2.99",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
