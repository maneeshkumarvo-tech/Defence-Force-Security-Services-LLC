import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/index'));
const AboutPage = lazy(() => import('./pages/about'));
const ServicesPage = lazy(() => import('./pages/services'));
const SecurityGuardsPage = lazy(() => import('./pages/services/security-guards'));
const EventSecurityPage = lazy(() => import('./pages/services/event-security'));
const MobilePatrolPage = lazy(() => import('./pages/services/mobile-patrol'));
const CareerPage = lazy(() => import('./pages/career'));
const BlogPage = lazy(() => import('./pages/blog'));
const SectorsPage = lazy(() => import('./pages/sectors'));
const ContactPage = lazy(() => import('./pages/contact'));
const NotFoundPage = lazy(() => import('./pages/_404'));

export const routes: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
  {
    path: 'services',
    element: <ServicesPage />,
  },
  {
    path: 'services/security-guards',
    element: <SecurityGuardsPage />,
  },
  {
    path: 'services/event-security',
    element: <EventSecurityPage />,
  },
  {
    path: 'services/mobile-patrol',
    element: <MobilePatrolPage />,
  },
  {
    path: 'career',
    element: <CareerPage />,
  },
  {
    path: 'blog',
    element: <BlogPage />,
  },
  {
    path: 'sectors',
    element: <SectorsPage />,
  },
  {
    path: 'contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
