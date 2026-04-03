// --- Next ---
import type { Metadata } from 'next';

// Define the structure for page-specific metadata
interface PageMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  urlPath?: string;
  imageUrl?: string;
  robots?: Metadata['robots'];
}

// --- Base Metadata ---
const BASE_URL = 'https://snaphingestudios.com';
const SITE_NAME = 'Snap Hinge Studios';
const TWITTER_CREATOR = '@SnapHingeStudio';
const GOOGLE_ADSENSE_ACCOUNT = '';
const DEFAULT_TITLE = 'Snap Hinge Studios';
const DEFAULT_DESCRIPTION = "We're an independent app and game studio proud to call Buffalo, NY home. We build unapologetic digital experiences fueled by blue-collar grit and classic arcade energy. Welcome to the Herd.";
const DEFAULT_OG_IMAGE = '/mascot/mascot-player-one.webp';
const DEFAULT_KEYWORDS = [
  'Snap Hinge Studios',
  'Buffalo NY game studio',
  'Indie game developers',
  'App development Buffalo',
  'Arcade Grit',
  '716 Roots',
  'One Buffalo Labs'
];

/**
 * Generates metadata for a page, merging with site-wide defaults.
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  urlPath = '/',
  imageUrl,
  robots,
}: PageMetadata = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const cleanPath = urlPath === '/' ? '/' : `${urlPath.replace(/\/$/, '')}/`;
  const pageUrl = `${BASE_URL}${cleanPath}`;
  const allKeywords = [...new Set([...DEFAULT_KEYWORDS, ...keywords])];
  const ogImageUrl = imageUrl ? `${BASE_URL}${imageUrl}` : DEFAULT_OG_IMAGE;
  const otherMetadata: Metadata['other'] = {};

  if (GOOGLE_ADSENSE_ACCOUNT) {
    otherMetadata['google-adsense-account'] = GOOGLE_ADSENSE_ACCOUNT;
  }

  const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: pageUrl,
    },
    title: {
      template: `%s | ${SITE_NAME}`,
      default: DEFAULT_TITLE,
    },
    ...(title && { title: { absolute: pageTitle } }),
    description: pageDescription,
    keywords: allKeywords,
    ...(robots && { robots: robots }),
    manifest: '/manifest.json',
    icons: {
      icon: [
        // SVG icon for modern browsers
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
        // PNG icon as a fallback
        { url: '/icon.png', type: 'image/png' },
      ],
      // Apple touch icon for iOS devices
      apple: '/apple-icon.png',
    },
    appleWebApp: {
      title: SITE_NAME,
      capable: true,
      statusBarStyle: 'black-translucent',
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
          type: 'image/png',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    ...(Object.keys(otherMetadata).length > 0 && { other: otherMetadata }),
  };

  if (TWITTER_CREATOR) {
    metadata.twitter = {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      creator: TWITTER_CREATOR,
      images: [ogImageUrl],
    };
  }

  return metadata;
}