import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

export interface NavigationItem {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  thumbnail?: string;
  children?: NavigationItem[];
}
import { Suspense } from 'react';
import { Toaster } from '@/components/ui/sonner';
import RootLayout, { RootLayoutConfig } from './layouts/RootLayout';
import { routes } from './routes';
import { Shield, Building2, Users, UserCheck, Car, Cctv, Lock, Flame, UserCircle, Waves, Hotel, ShoppingBag, Landmark, Home, Warehouse, Anchor, Briefcase } from 'lucide-react';
import Spinner from '@/components/Spinner';

const config: RootLayoutConfig = {
  header: {
    logo: {
      src: 'https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Defence%20force%20security%20services%20LL-93a2663.jpg',
      alt: 'Defence Force Security Services',
    },
    navigation: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { 
        href: '/services', 
        label: 'Services',
        children: [
          { 
            href: '/services/security-guards', 
            label: 'Security Guard Services (Dubai Wide)',
            icon: Shield,
            thumbnail: 'https://media.gettyimages.com/id/2226617782/photo/blue-3d-shield-icon-with-check-mark-isolated-on-white-background-for-secure-and-protected.jpg?b=1&s=2048x2048&w=0&k=20&c=yDaLJc8gBaR8ut14dyX1i-2VNxNtUaNg0_6QlRKPBeM='
          },
          { 
            href: '/services', 
            label: 'Corporate & Commercial Security',
            icon: Building2,
            thumbnail: 'https://media.gettyimages.com/id/1767349337/photo/black-businesswoman-in-zebra-crossing-at-broadway-and-fulton.jpg?b=1&s=2048x2048&w=0&k=20&c=00xeFE2iSb8rwbtZmNzen5vFSLZAQyYEavNuJvqsQzU='
          },
          { 
            href: '/services/event-security', 
            label: 'Event Security Services',
            icon: Users,
            thumbnail: 'https://media.gettyimages.com/id/1224941954/photo/cheering-crowd-at-rock-concert.jpg?b=1&s=2048x2048&w=0&k=20&c=Nje1l3rXGWhCQGsnj7qiyE-OcsIQaDzmu4uE9hnk5xQ='
          },
          { 
            href: '/services', 
            label: 'VIP & Executive Protection',
            icon: UserCheck,
            thumbnail: 'https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_o0073to0073to007.png'
          },
          { 
            href: '/services/mobile-patrol', 
            label: 'Mobile Patrol Services',
            icon: Car,
            thumbnail: 'https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_o0073to0073to007.png'
          },
          { 
            href: '/services', 
            label: 'CCTV Monitoring & Control Room Support',
            icon: Cctv,
            thumbnail: 'https://media.gettyimages.com/id/2214625244/photo/surveillance-cameras-covering-a-globe-symbolizing-global-surveillance-and-privacy.jpg?b=1&s=2048x2048&w=0&k=20&c=daZAlmu4su09BakQu8-a9A7upIC0bt4kMzX_3J9vcMM='
          },
          { 
            href: '/services', 
            label: 'Access Control & Gate Security',
            icon: Lock,
            thumbnail: 'https://media.gettyimages.com/id/2156095748/photo/themis-is-the-goddess-of-justice-and-the-judges-gavel-hammer-as-a-symbol-of-law-and-order-on.jpg?b=1&s=2048x2048&w=0&k=20&c=JYYfnGsopPWEtYK6p-W5axcZrzMrx8f1Uo7mDEnbyzw='
          },
          { 
            href: '/services', 
            label: 'Fire Safety & Emergency Response',
            icon: Flame,
            thumbnail: 'https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_o0073to0073to007.png'
          },
          { 
            href: '/services', 
            label: 'Concierge, Reception & Front-of-House',
            icon: UserCircle,
            thumbnail: 'https://media.gettyimages.com/id/2166080115/photo/businessman-in-a-hotel-room.jpg?b=1&s=2048x2048&w=0&k=20&c=K2y3I8qDUl_ZsovevICboGCKihUNjyoQiZ0nszmI0fc='
          },
          { 
            href: '/services', 
            label: 'Lifeguard & Poolside Safety',
            icon: Waves,
            thumbnail: 'https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_o0073to0073to007.png'
          }
        ]
      },
      { 
        href: '/sectors', 
        label: 'Sectors',
        children: [
          { 
            href: '/sectors/corporate-offices', 
            label: 'Corporate & Commercial Offices',
            icon: Building2,
            thumbnail: 'https://media.gettyimages.com/id/1767349337/photo/black-businesswoman-in-zebra-crossing-at-broadway-and-fulton.jpg?b=1&s=2048x2048&w=0&k=20&c=00xeFE2iSb8rwbtZmNzen5vFSLZAQyYEavNuJvqsQzU='
          },
          { 
            href: '/sectors/hotels-hospitality', 
            label: 'Hotels & Hospitality',
            icon: Hotel,
            thumbnail: 'https://media.gettyimages.com/id/2166080115/photo/businessman-in-a-hotel-room.jpg?b=1&s=2048x2048&w=0&k=20&c=K2y3I8qDUl_ZsovevICboGCKihUNjyoQiZ0nszmI0fc='
          },
          { 
            href: '/sectors/shopping-malls', 
            label: 'Shopping Malls & Retail',
            icon: ShoppingBag,
            thumbnail: 'https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_o0073to0073to007.png'
          },
          { 
            href: '/sectors/banks-financial', 
            label: 'Banks & Financial Institutions',
            icon: Landmark,
            thumbnail: 'https://media.gettyimages.com/id/2156095748/photo/themis-is-the-goddess-of-justice-and-the-judges-gavel-hammer-as-a-symbol-of-law-and-order-on.jpg?b=1&s=2048x2048&w=0&k=20&c=JYYfnGsopPWEtYK6p-W5axcZrzMrx8f1Uo7mDEnbyzw='
          },
          { 
            href: '/sectors/residential', 
            label: 'Residential Towers & Communities',
            icon: Home,
            thumbnail: 'https://media.gettyimages.com/id/2153589804/photo/solar-panels-on-a-gray-metal-roof-of-modern-white-brick-house.jpg?b=1&s=2048x2048&w=0&k=20&c=Z7bZqRpLwQbZETsP8jhuI-ydLTma8r0_R0Tzw5LRKuY='
          },
          { 
            href: '/sectors/events', 
            label: 'Events & Entertainment Venues',
            icon: Users,
            thumbnail: 'https://media.gettyimages.com/id/1224941954/photo/cheering-crowd-at-rock-concert.jpg?b=1&s=2048x2048&w=0&k=20&c=Nje1l3rXGWhCQGsnj7qiyE-OcsIQaDzmu4uE9hnk5xQ='
          },
          { 
            href: '/sectors/warehouses', 
            label: 'Warehouses, Logistics & Industrial',
            icon: Warehouse,
            thumbnail: 'https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_o0073to0073to007.png'
          },
          { 
            href: '/sectors/marine', 
            label: 'Marine & Superyacht Security',
            icon: Anchor,
            thumbnail: 'https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_o0073to0073to007.png'
          },
          { 
            href: '/sectors/government', 
            label: 'Government & Critical Infrastructure',
            icon: Shield,
            thumbnail: 'https://media.gettyimages.com/id/2226617782/photo/blue-3d-shield-icon-with-check-mark-isolated-on-white-background-for-secure-and-protected.jpg?b=1&s=2048x2048&w=0&k=20&c=yDaLJc8gBaR8ut14dyX1i-2VNxNtUaNg0_6QlRKPBeM='
          }
        ]
      },
      { href: '/blog', label: 'Blog' },
      { 
        href: '/career', 
        label: 'Career',
        children: [
          { 
            href: '/career#openings', 
            label: 'Current Openings',
            icon: Briefcase,
            thumbnail: 'https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_o0073to0073to007.png'
          },
          { 
            href: '/career#security-guard', 
            label: 'Security Guard Positions',
            icon: Shield,
            thumbnail: 'https://media.gettyimages.com/id/2226617782/photo/blue-3d-shield-icon-with-check-mark-isolated-on-white-background-for-secure-and-protected.jpg?b=1&s=2048x2048&w=0&k=20&c=yDaLJc8gBaR8ut14dyX1i-2VNxNtUaNg0_6QlRKPBeM='
          },
          { 
            href: '/career#supervisor', 
            label: 'Supervisor / Team Leader Roles',
            icon: UserCheck,
            thumbnail: 'https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_o0073to0073to007.png'
          },
          { 
            href: '/career#lifeguard', 
            label: 'Lifeguard Positions',
            icon: Waves,
            thumbnail: 'https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_o0073to0073to007.png'
          },
          { 
            href: '/career#concierge', 
            label: 'Concierge & Reception Roles',
            icon: UserCircle,
            thumbnail: 'https://media.gettyimages.com/id/2166080115/photo/businessman-in-a-hotel-room.jpg?b=1&s=2048x2048&w=0&k=20&c=K2y3I8qDUl_ZsovevICboGCKihUNjyoQiZ0nszmI0fc='
          },
          { 
            href: '/career#driver', 
            label: 'Driver / Chauffeur Roles',
            icon: Car,
            thumbnail: 'https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_o0073to0073to007.png'
          },
          { 
            href: '/career#admin', 
            label: 'Other Admin & Support Roles',
            icon: Users,
            thumbnail: 'https://media.gettyimages.com/id/1224941954/photo/cheering-crowd-at-rock-concert.jpg?b=1&s=2048x2048&w=0&k=20&c=Nje1l3rXGWhCQGsnj7qiyE-OcsIQaDzmu4uE9hnk5xQ='
          },
          { 
            href: '/career#apply', 
            label: 'Submit Your CV',
            icon: Users,
            thumbnail: 'https://media.gettyimages.com/id/2237285397/photo/3d-black-megaphone-loudspeaker-for-announcement-and-promotion.jpg?b=1&s=2048x2048&w=0&k=20&c=0IgYVxlv5idwOpnbcgdzWWLsjnkxlJK5MgFXDtHjM30='
          }
        ]
      },
      { href: '/contact', label: 'Contact Us' },
    ],
    cta: {
      label: 'Get a Quote',
      href: '/contact'
    }
  },
  footer: {
    variant: 'simple',
    copyright: {
      text: 'Defence Force Security Services LLC',
      showYear: true,
      position: 'center'
    },
    description: 'SIRA-certified security services provider in Dubai, UAE. Delivering professional security solutions across corporate, residential, hospitality, and event sectors.',
    socialLinks: [
        { href: 'https://facebook.com/defenceforcesecurityllc', label: 'Facebook' },
        { href: 'https://instagram.com/defenceforcesecurityllc', label: 'Instagram' },
        { href: 'https://linkedin.com/company/defenceforcesecurityllc', label: 'LinkedIn' }
    ]
  }
};

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <RootLayout config={config}>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </RootLayout>
      ),
      children: routes,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
