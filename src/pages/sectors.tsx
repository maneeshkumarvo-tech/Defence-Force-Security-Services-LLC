import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Hotel, ShoppingBag, Landmark, Home, Music, Warehouse, Ship, Shield } from 'lucide-react';

const sectors = [
  {
    id: 'corporate',
    icon: Building2,
    title: 'Corporate & Commercial Offices',
    badge: 'High Priority',
    image: 'https://media.gettyimages.com/id/1340683883/photo/large-office-interior-a-reception-desk-a-lounge-corner-with-copy-space-and-wordesks-behind.jpg?b=1&s=2048x2048&w=0&k=20&c=A5a5PbulGxDJTdl2a2IP231HpFqLd56XCix4htV4sC4=',
    description: 'We secure corporate headquarters, office towers, business centres and co-working spaces with professional security guards who protect your staff, visitors and assets while preserving a polished corporate image.',
    services: [
      'Lobby and reception security guards',
      'Access control and ID/visitor badge management',
      'Visitor registration and escorting where needed',
      'Lift and floor access monitoring',
      'Car park and perimeter patrols',
      'After-hours lock-up and building checks'
    ]
  },
  {
    id: 'hospitality',
    icon: Hotel,
    title: 'Hotels & Hospitality',
    badge: '24/7 Coverage',
    image: 'https://media.gettyimages.com/id/2151939886/photo/portrait-of-a-luxury-hotel-employee.jpg?b=1&s=2048x2048&w=0&k=20&c=_Am_vrgNcY9qfKf4zCUiSf3CkhmmCRYCcoTqB7eWc48=',
    description: 'In hotels, resorts and hotel apartments, security must protect guests while remaining discreet and service-oriented. Our hospitality-trained guards blend guest safety with a welcoming experience.',
    services: [
      'Lobby, driveway and entrance security',
      'Guest flow and crowd management at peak times',
      'Night security for corridors, back-of-house and parking',
      'Event and ballroom security for functions and weddings',
      'Support for lost & found and incident reporting',
      'Coordination with hotel management and CCTV'
    ]
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    title: 'Shopping Malls & Retail',
    badge: 'Guard Focused',
    image: 'https://media.gettyimages.com/id/1264671167/photo/security-guard-in-shopping-mall.jpg?b=1&s=2048x2048&w=0&k=20&c=Amm_ESuHpszFT0oDX1kvDVS52dP47Xxe7lMkJHo7LfI=',
    description: 'Retail environments require visible deterrence, loss prevention and a safe environment for shoppers. Our guards help reduce theft, respond to incidents and support mall and store management.',
    services: [
      'Entrance and mall floor patrol guards',
      'Support for shoplifting prevention & detentions (as per policy)',
      'CCTV monitoring support and incident reporting',
      'Car park and access control for vehicles and pedestrians',
      'Emergency evacuation guidance during alarms',
      'Customer assistance and basic information support'
    ]
  },
  {
    id: 'banking',
    icon: Landmark,
    title: 'Banks & Financial Institutions',
    badge: 'High Priority',
    image: 'https://media.gettyimages.com/id/2142009493/photo/black-male-airport-security-worker.jpg?b=1&s=2048x2048&w=0&k=20&c=mbOlRNHlNaXLsbAsH2YU9kr3QU0RUHq5jlH1BcKqgKM=',
    description: 'Banks, exchange houses and financial institutions require strict control, vigilance and professional behaviour. Our disciplined guards help maintain safety, order and trust in sensitive environments.',
    services: [
      'Entrance and lobby guard presence',
      'Queue management and customer flow control',
      'Monitoring of suspicious behaviour and immediate escalation',
      'Access control for restricted areas and vault corridors',
      'Support during high-value cash deliveries/collections',
      'Emergency response support and procedure adherence'
    ]
  },
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Towers & Communities',
    badge: '24/7 Coverage',
    image: 'https://media.gettyimages.com/id/1438980338/photo/security-guards-are-inside-the-building-that-they-take-care-of-making-sure-that-everything-is.jpg?b=1&s=2048x2048&w=0&k=20&c=YbGM-RwYEB3yaUhaw8Q5ogvtG5LCsgxRkjYYqb5k5DY=',
    description: 'We help create safe, controlled environments in residential towers, gated communities and villa compounds, with guards trained to be both protective and courteous to residents.',
    services: [
      'Gatehouse and entrance security guards',
      'Visitor registration and access control',
      'Patrols of common areas, parking and perimeters',
      'Monitoring of service entrances and deliveries',
      'Support with community rules and noise control',
      'Rapid response to resident complaints and incidents'
    ]
  },
  {
    id: 'events',
    icon: Music,
    title: 'Events & Entertainment Venues',
    badge: 'Guard Focused',
    image: 'https://media.gettyimages.com/id/1447355262/photo/crowd-of-people-entering-music-festival.jpg?b=1&s=2048x2048&w=0&k=20&c=of-odjPMQuaTf04YUErOwbVii2fZ5LGfFk3cFGj3n_o=',
    description: 'From private weddings and corporate functions to concerts and public events, our teams manage crowd movement, control access and support emergency planning so organisers can focus on the event itself.',
    services: [
      'Guest access control, ticket checking and wristband verification',
      'Crowd control at entrances, exits and bottleneck areas',
      'VIP and backstage security management',
      'Bag checks and basic screening where permitted',
      'Coordination with event organisers and venue management',
      'Emergency evacuation and incident response support'
    ]
  },
  {
    id: 'logistics',
    icon: Warehouse,
    title: 'Warehouses, Logistics & Industrial Facilities',
    badge: 'High Priority',
    image: 'https://media.gettyimages.com/id/1474426006/photo/employee-working-at-a-distribution-warehouse-and-moving-a-cable-drum-with-a-forklift.jpg?b=1&s=2048x2048&w=0&k=20&c=u6wE7Lh5KgQZoVAISBZ5T4FISv-92JiEuqqZE2tIH24=',
    description: 'Warehouses, logistics hubs and industrial sites require strong access control and regular patrols to protect stock, vehicles and critical infrastructure in busy, high-value environments.',
    services: [
      'Gate control for trucks, visitors and staff',
      'Vehicle logbook, driver ID and delivery paperwork checks',
      'Yard, loading bay and perimeter patrols',
      'Protection of high-value or sensitive stock zones',
      'Coordination with CCTV and alarm systems',
      'Support with safety and PPE compliance on site'
    ]
  },
  {
    id: 'marine',
    icon: Ship,
    title: 'Marine & Superyacht Security',
    badge: '24/7 Coverage',
    image: 'https://media.gettyimages.com/id/1469919239/photo/yachts-moored-in-the-marina-blue-voyage-boat-tour.jpg?b=1&s=2048x2048&w=0&k=20&c=GCSGTed8VqViqO_AmGknGJWCX_PeWw1bu2X4buq-msM=',
    description: 'For marinas, yacht clubs and superyachts, we provide discreet, high-standard security tailored to VIP expectations, privacy requirements and international guest profiles.',
    services: [
      'Access control at marina gates and pontoons',
      'Visitor and contractor verification before boarding',
      'On-board guard presence for events and charters',
      'Coordination with yacht crew, management and port authorities',
      'Discreet VIP protection and privacy-focused security',
      'Emergency and incident response support while docked'
    ]
  },
  {
    id: 'government',
    icon: Shield,
    title: 'Government & Critical Infrastructure',
    badge: 'High Priority',
    image: 'https://media.gettyimages.com/id/2230831611/photo/estonian-national-flag-mounted-on-the-side-of-a-historic-building-waving-gently-in-the-wind.jpg?b=1&s=2048x2048&w=0&k=20&c=li2LwoZOW7VDUz_bS5UMqPE2dOfWg4NI-RMf2X_ZdrY=',
    description: 'Government entities and critical infrastructure sites demand reliable, compliant and well-supervised security teams who understand sensitivity, protocol and chain of command.',
    services: [
      'Strict access control and ID verification',
      'Protection of sensitive offices, control rooms and data areas',
      'Perimeter security and patrols with clear post orders',
      'Escort duties for visitors, contractors and vendors',
      'Support for security drills and emergency procedures',
      'Detailed incident documentation and reporting'
    ]
  }
];

export default function SectorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://media.gettyimages.com/id/2230979515/photo/modern-train-on-sheikh-zayed-road-amid-dubai-urban-skyline.jpg?b=1&s=2048x2048&w=0&k=20&c=VJ1JN04VzuoB-qphyLJXplFhtdnTKbehNSnNP7RjG6w=)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sectors We Secure
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            SIRA-certified security solutions tailored to the risk profile and operating needs of each industry we serve across Dubai and the UAE.
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            DEFENCE FORCE SECURITY SERVICES L.L.C provides licensed security guards, supervisors and integrated support services for a wide range of sectors. From corporate offices and hotels to malls, banks, communities and critical infrastructure, our teams are trained to protect people, property and reputation while maintaining a professional, client-facing image.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card key={sector.id} className="overflow-hidden border-0 shadow-lg">
                  <div className={`grid md:grid-cols-2 gap-0 ${!isEven ? 'md:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-[400px] ${!isEven ? 'md:col-start-2' : ''}`}>
                      <img 
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          {sector.badge}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">
                          {sector.title}
                        </h2>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6">
                        {sector.description}
                      </p>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">
                          Key Security Services:
                        </h3>
                        <ul className="space-y-2">
                          {sector.services.map((service, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Need Security for Your Sector?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you manage a hotel, office tower, residential community, logistics hub or high-security facility, DEFENCE FORCE SECURITY SERVICES L.L.C can design a SIRA-compliant security solution tailored to your sector and site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact">Request Security Proposal</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <Link to="/contact">Talk to Our Security Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
