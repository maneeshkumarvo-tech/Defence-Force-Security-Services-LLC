import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, BookOpen, Camera, Building2, Users, Hotel, Home, Newspaper, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const categories = [
    {
      id: 'security-guard-insights',
      title: 'Security Guard Insights',
      description: 'Frontline experiences, best practices and tips for professional security guards. Training, communication, discipline and how licensed guards add value to every site.',
      image: 'https://media.gettyimages.com/id/2158689689/photo/closeup-security-guard-man-in-public-area-standing-secure-people-or-place-outdoor.jpg?b=1&s=2048x2048&w=0&k=20&c=Wp8BHguBXKAtY7gYy7svr_Aan4C6tvDjvTCa1NysPqg=',
      icon: Shield,
      badge: 'Guards & Training',
      badgeVariant: 'default' as const,
      quickRead: true
    },
    {
      id: 'sira-compliance',
      title: 'SIRA Rules & Compliance',
      description: 'Articles explaining SIRA regulations in Dubai – licensing, approvals, inspections and how businesses stay fully compliant with legal security standards.',
      image: 'https://media.gettyimages.com/id/2212948118/photo/compliance-documentation-on-the-desk.jpg?b=1&s=2048x2048&w=0&k=20&c=ZR4E4mrjiLn5N7Fwq8_sGsSiE8_35jn4OrLN5xGgQBM=',
      icon: BookOpen,
      badge: 'SIRA Compliance',
      badgeVariant: 'destructive' as const,
      quickRead: false
    },
    {
      id: 'corporate-security',
      title: 'Corporate & Commercial Security',
      description: 'Security strategies for offices, business centres and commercial buildings. Access control, reception security, lobby management and risk reduction for corporate environments.',
      image: 'https://media.gettyimages.com/id/1337293604/photo/modern-offices-lobby-interior-area-with-long-reception-desk.jpg?b=1&s=2048x2048&w=0&k=20&c=XGfiouxn1pn5fkWUGvBBEBJtmY0dPqqoucxPHs2C2YY=',
      icon: Building2,
      badge: 'Corporate Security',
      badgeVariant: 'secondary' as const,
      quickRead: true
    },
    {
      id: 'event-security',
      title: 'Event Security & Crowd Management',
      description: 'How to secure conferences, concerts, weddings and public events. Crowd control, guest screening, emergency planning and coordination with venue teams.',
      image: 'https://media.gettyimages.com/id/1447355262/photo/crowd-of-people-entering-music-festival.jpg?b=1&s=2048x2048&w=0&k=20&c=of-odjPMQuaTf04YUErOwbVii2fZ5LGfFk3cFGj3n_o=',
      icon: Users,
      badge: 'Events & Crowd',
      badgeVariant: 'default' as const,
      quickRead: true
    },
    {
      id: 'hospitality-retail',
      title: 'Hospitality & Retail Security',
      description: 'Security guard roles in hotels, malls and retail outlets. Guest safety, loss prevention, shoplifting control, parking security and customer-friendly protection.',
      image: 'https://media.gettyimages.com/id/2218597521/photo/asian-hotel-concierge-team-at-front-desk.jpg?b=1&s=2048x2048&w=0&k=20&c=aZr7_xdga1UtJbocvE4Rp7OOq5nZ3M3hBb1mFPyEYY4=',
      icon: Hotel,
      badge: 'Hotels & Malls',
      badgeVariant: 'secondary' as const,
      quickRead: true
    },
    {
      id: 'residential-safety',
      title: 'Residential & Community Safety',
      description: 'Safety tips and guard-based solutions for residential towers, villas and gated communities: gate control, patrols, visitor management and community awareness.',
      image: 'https://media.gettyimages.com/id/157286836/photo/gated-community.jpg?b=1&s=2048x2048&w=0&k=20&c=tHCSj7tD0Zm_rZYr2hDDVwDf_ObidmM_E1UGDDsvakk=',
      icon: Home,
      badge: 'Community Safety',
      badgeVariant: 'default' as const,
      quickRead: true
    },
    {
      id: 'technology-systems',
      title: 'Technology: CCTV & Access Control',
      description: 'Articles about using CCTV, access control, alarms and biometrics alongside security guards to build smarter, integrated protection systems.',
      image: 'https://media.gettyimages.com/id/2214625235/photo/numerous-security-cameras-mounted-on-a-green-wall-for-monitoring-and-surveillance.jpg?b=1&s=2048x2048&w=0&k=20&c=kg_gO-mr1Jv-qwCZliucuT-auY8jycvE7oXkt12P9jo=',
      icon: Camera,
      badge: 'Tech & Systems',
      badgeVariant: 'secondary' as const,
      quickRead: false
    },
    {
      id: 'company-news',
      title: 'Company News & Updates',
      description: 'Latest news from DEFENCE FORCE SECURITY SERVICES L.L.C – new contracts, services, certifications, team highlights and milestones in our growth.',
      image: 'https://media.gettyimages.com/id/1485484825/photo/guard-of-a-building-takes-note-of-the-cars-parked-in-the-parking-lot.jpg?b=1&s=2048x2048&w=0&k=20&c=Hb7-kMB7o9jHkYuc280R0JqVgqsNaBdHMlbZkmQ7Ooo=',
      icon: Newspaper,
      badge: 'DFSS News',
      badgeVariant: 'destructive' as const,
      quickRead: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_ieb2wuieb2wuieb2.png"
            alt="Defence Force Security Services - Professional Security Team"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-950/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* SIRA Badge */}
            <div className="flex justify-center">
              <Badge className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black font-black text-xs uppercase tracking-wider px-4 py-2 border-2 border-yellow-300 shadow-lg shadow-yellow-500/50">
                <Shield className="w-3 h-3 mr-1.5" />
                SIRA-Certified Security Knowledge
              </Badge>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl">
              Insights & Updates from
              <span className="block mt-2 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                DEFENCE FORCE SECURITY SERVICES L.L.C
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-200 drop-shadow-lg max-w-3xl mx-auto">
              Professional articles on security guards, SIRA compliance, sector-specific security and the latest updates from our team in Dubai.
            </p>

            {/* Decorative Line */}
            <div className="flex justify-center pt-4">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                  {/* Image with Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-black" />
                    </div>

                    {/* Quick Read Badge */}
                    {category.quickRead && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-black font-bold text-xs backdrop-blur-sm">
                          Quick Read
                        </Badge>
                      </div>
                    )}

                    {/* Category Badge at Bottom */}
                    <div className="absolute bottom-4 left-4">
                      <Badge variant={category.badgeVariant} className="font-bold text-xs uppercase tracking-wide shadow-lg">
                        {category.badge}
                      </Badge>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardHeader>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    >
                      <Link to={`/blog/${category.id}`} className="flex items-center justify-center gap-2">
                        <span className="font-bold">View Articles</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground">
              Stay Informed About Security Best Practices
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Subscribe to our newsletter for the latest security insights, SIRA updates, and industry news delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-4 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all w-full sm:max-w-md"
              />
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-400 text-black font-black uppercase tracking-wide border-2 border-yellow-300 shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300 px-10 py-4 w-full sm:w-auto"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
