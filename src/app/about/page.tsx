import type { Metadata } from 'next';
import { generateMetadata } from '@/utils/metadata';
import AboutContent from '@/components/About/AboutContent';

export const metadata: Metadata = generateMetadata({
  title: 'About the Studio | The Herd',
  description:
    'Born in Buffalo, NY. Learn about the independent team building games and apps with real edge at Snap Hinge Studios.',
});

export default function AboutPage() {
  return <AboutContent />;
}
