import { Shield, Building2, Users, UserCheck, Car, Camera, DoorOpen, Flame, Hotel, Waves } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Security Guard Services (Dubai Wide)',
      description: 'Professional SIRA-licensed security guards for commercial, residential and high-risk locations across Dubai, providing visible deterrence, access control and incident response.',
      image: 'https://media.gettyimages.com/id/1207499357/photo/serious-russian-police-officer-in-formal-uniform-the-sign-says-police.jpg?b=1&s=2048x2048&w=0&k=20&c=FsH-Th48LkUSRQgPnAYzc1pYo4KlrRJXDNGBKg660fY=',
      icon: Shield,
      badge: 'Core Service',
      badgeVariant: 'default' as const,
      quickRead: true,
      href: '/services/security-guards'
    },
    {
      id: 2,
      title: 'Corporate & Commercial Security',
      description: 'Static guards, reception security and office building protection with controlled access, visitor management and lobby presence for businesses and corporate towers.',
      image: 'https://media.gettyimages.com/id/2235737640/photo/minimalist-reception-area.jpg?b=1&s=2048x2048&w=0&k=20&c=LOIBzDIWqfrrvZuvU5W1g3-uAlywIsFVTSe6p0IXy8U=',
      icon: Building2,
      badge: 'Corporate',
      badgeVariant: 'secondary' as const,
      quickRead: true,
      href: '/services'
    },
    {
      id: 3,
      title: 'Event Security Services',
      description: 'Security for conferences, concerts, exhibitions, weddings and private functions, including guest screening, crowd control and coordination with venue management.',
      image: 'https://media.gettyimages.com/id/1224941954/photo/cheering-crowd-at-rock-concert.jpg?b=1&s=2048x2048&w=0&k=20&c=Nje1l3rXGWhCQGsnj7qiyE-OcsIQaDzmu4uE9hnk5xQ=',
      icon: Users,
      badge: 'Events',
      badgeVariant: 'default' as const,
      quickRead: true,
      href: '/services/event-security'
    },
    {
      id: 4,
      title: 'VIP & Executive Protection',
      description: 'Discreet bodyguards and close protection officers for executives, dignitaries and high-profile individuals, including secure movements and risk assessment.',
      image: 'https://media.gettyimages.com/id/1303842149/photo/businessmen-sitting-in-the-backseat-of-a-car-working.jpg?b=1&s=2048x2048&w=0&k=20&c=f7A_OF4-Z7MqmJytTPVfSkm-ysmYt58T3T5k8msQwo4=',
      icon: UserCheck,
      badge: 'VIP Service',
      badgeVariant: 'destructive' as const,
      quickRead: false,
      href: '/services'
    },
    {
      id: 5,
      title: 'Mobile Patrol Services',
      description: 'Vehicle and foot patrols to check perimeters, car parks, warehouses and communities, ideal for large or multi-site properties needing regular security presence.',
      image: 'https://media.gettyimages.com/id/162486540/photo/friendly-police-officer-talking-with-school-teacher-after-safety-demonstration.jpg?b=1&s=2048x2048&w=0&k=20&c=QvuZXmMqipGiTK4L4NB-N9nFIrvYeyMt_w-z_TQ5ktQ=',
      icon: Car,
      badge: 'Patrol',
      badgeVariant: 'default' as const,
      quickRead: true,
      href: '/services/mobile-patrol'
    },
    {
      id: 6,
      title: 'CCTV Monitoring & Control Room Support',
      description: 'Trained operators monitoring CCTV feeds, coordinating with on-ground guards and helping detect suspicious activity before it becomes an incident.',
      image: 'https://media.gettyimages.com/id/2213457738/photo/high-tech-clinical-environment-with-pc-displays-showing-healthcare-software.jpg?b=1&s=2048x2048&w=0&k=20&c=xtTi14dKODhdpEomyQcnvr-Ksi38_rTNT-zM3h5uEAc=',
      icon: Camera,
      badge: 'Tech & Systems',
      badgeVariant: 'secondary' as const,
      quickRead: false,
      href: '/services'
    },
    {
      id: 7,
      title: 'Access Control & Gate Security',
      description: 'Gatehouse guards, ID checking, barrier control and visitor logging for compounds, factories, logistics hubs and restricted areas.',
      image: 'https://media.gettyimages.com/id/931758564/photo/entrance-turnstile-isolated.jpg?b=1&s=2048x2048&w=0&k=20&c=QTYsm6pME5vMNz9YagJCTCXpg3nvScuu-cnP91EBcss=',
      icon: DoorOpen,
      badge: 'Access Control',
      badgeVariant: 'secondary' as const,
      quickRead: true,
      href: '/services'
    },
    {
      id: 8,
      title: 'Fire Safety & Emergency Response',
      description: 'Fire watch, basic fire safety supervision and support in emergency procedures, evacuation guidance and coordination with authorities.',
      image: 'https://media.gettyimages.com/id/1409328281/photo/fire-deprtment-emblem-firefighter-badge-on-a-helmet-with-fire-extinguisher-and-axe.jpg?b=1&s=2048x2048&w=0&k=20&c=fDd_1GuFFX07hvI4t61fq_YbvfGMOkvb-5TcjcSvUxw=',
      icon: Flame,
      badge: 'Emergency',
      badgeVariant: 'destructive' as const,
      quickRead: false,
      href: '/services'
    },
    {
      id: 9,
      title: 'Concierge, Reception & Front-of-House',
      description: 'Security-trained reception and concierge staff combining guest service with access control, visitor screening and lobby presence.',
      image: 'https://media.gettyimages.com/id/2235737640/photo/minimalist-reception-area.jpg?b=1&s=2048x2048&w=0&k=20&c=LOIBzDIWqfrrvZuvU5W1g3-uAlywIsFVTSe6p0IXy8U=',
      icon: Hotel,
      badge: 'Hospitality',
      badgeVariant: 'secondary' as const,
      quickRead: true,
      href: '/services'
    },
    {
      id: 10,
      title: 'Lifeguard & Poolside Safety',
      description: 'Certified lifeguards for pools, beaches and resorts, focusing on prevention, constant monitoring and quick response in emergencies.',
      image: 'https://media.gettyimages.com/id/469077578/photo/lifeguards-running-with-equipment.jpg?b=1&s=2048x2048&w=0&k=20&c=hDk1UJzxNT7dzj9t7hS7-M5QsQgBPcbWyn_ckhl_oOY=',
      icon: Waves,
      badge: 'Lifeguard',
      badgeVariant: 'default' as const,
      quickRead: true,
      href: '/services'
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Full Page Background Image - Light Faded */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: 'url(https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_ieb2wuieb2wuieb2.png)' }}
      />
      
      {/* Hero Section with Background Image */}
      <section className="relative z-10 py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_jqkauejqkauejqka.png)' 
          }}
        />
        {/* Dark Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Shield className="w-3 h-3 mr-1" />
              SIRA Licensed & Certified
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl">
              Professional Security Services
            </h1>
            <p className="text-lg md:text-xl text-white drop-shadow-lg mb-8">
              Comprehensive security solutions tailored to your needs. From static guards to mobile patrols, 
              event security to VIP protection – we deliver excellence across Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-16 bg-background/95">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Security Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of security solutions designed to protect what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={service.href}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image with Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>

                    {/* Quick Read Badge */}
                    {service.quickRead && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white text-gray-900 shadow-md">
                          Quick Read
                        </Badge>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <Badge variant={service.badgeVariant}>
                        {service.badge}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our security experts today for a free consultation and customized security solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Call +971 56 304 3715
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
