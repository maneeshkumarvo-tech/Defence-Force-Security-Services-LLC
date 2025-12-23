import Website from '@/layouts/Website';
import { Header } from '@/layouts/parts/Header';
import Footer, { FooterConfig } from '@/layouts/parts/Footer';
import RunningBanner from '@/components/RunningBanner';
import ImageTrain from '@/components/ImageTrain';
import type { NavigationItem } from '../App';

/**
 * Root layout component that wraps all pages with consistent header and footer
 *
 * This component provides a centralized layout structure for the entire application,
 * ensuring consistent navigation and footer across all pages. It uses the Website
 * layout component and includes Header and Footer with configurable options.
 *
 * @param children - Child routes to render (typically <Outlet /> from react-router-dom)
 * @param config - Configuration for header and footer
 * @param config.header - Header configuration (logo, navigation, actions, etc.)
 * @param config.footer - Footer configuration (variant, links, social, etc.)
 *
 * @example
 * ```tsx
 * <RootLayout config={{
 *   header: {
 *     logo: { src: '/logo.png', alt: 'MyApp' },
 *     navigation: [{ href: '/', label: 'Home' }],
 *     cta: { label: 'Get Started', href: '/contact' }
 *   },
 *   footer: {
 *     variant: 'simple'
 *   }
 * }}>
 *   <Outlet />
 * </RootLayout>
 * ```
 */
export interface HeaderConfig {
  logo?: {
    src: string;
    alt: string;
    href?: string;
  };
  navigation?: NavigationItem[];
  cta?: {
    label: string;
    href: string;
  };
}

export interface RootLayoutConfig {
  header?: HeaderConfig;
  footer?: FooterConfig;
}

interface RootLayoutProps {
  children: React.ReactNode;
  config?: RootLayoutConfig;
}

export default function RootLayout({ children, config = {} }: RootLayoutProps) {
  return (
    <Website>
      {config.header && (
        <>
      <Header
        logo={config.header.logo || { src: '', alt: 'Logo' }}
        navigation={config.header.navigation || []}
        cta={config.header.cta}
      />
          <ImageTrain />
        </>
      )}
      <RunningBanner />
      {children}
      {config.footer && <Footer config={config.footer} />}
    </Website>
  );
}
