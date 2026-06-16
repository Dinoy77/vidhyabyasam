// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  url, 
  schemaData, 
  image = 'https://www.vidyabhyasam.com/default-share-image.jpg' 
}) {
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title} | Vidyabhyasam</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={`https://www.vidyabhyasam.com${url}`} />
      
      {/* Open Graph / Facebook / LinkedIn / WhatsApp Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://www.vidyabhyasam.com${url}`} />
      <meta property="og:image" content={image} />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}