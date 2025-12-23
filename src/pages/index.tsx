import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Clock, Award, CheckCircle, FileText, TrendingUp, Phone, Mail, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const services = [
    {
      icon: Shield,
      title: 'Security Guards',
      description:
        'Professional, SIRA-licensed guards for commercial, residential and high-risk sites across the UAE.',
    },
    {
      icon: Users,
      title: 'Commercial Building Security',
      description:
        'Static guards, access control and reception security for corporate offices and business centres.',
    },
    {
      icon: Award,
      title: 'Event Security Services',
      description:
        'Large-scale and private events, weddings, hotel venues and nightlife security.',
    },
    {
      icon: Clock,
      title: 'VIP Security & Bodyguards',
      description:
        'Discreet protection and trained close protection officers for executives and VIPs.',
    },
  ];

  const testimonials = [
    {
      name: 'Mohammed Hassan',
      company: 'Al Barsha Mall',
      rating: 5,
      text: 'Defence Force Security Services has been protecting our mall for over 3 years. Their SIRA-certified guards are professional, well-trained, and always alert. Highly recommended for commercial properties.',
    },
    {
      name: 'Sarah Al Mansoori',
      company: 'Emirates Towers Residence',
      rating: 5,
      text: 'We trust Defence Force for our residential tower security. Their 24/7 service and quick response time give our residents peace of mind. Excellent communication and reporting.',
    },
    {
      name: 'James Wilson',
      company: 'Grand Hyatt Dubai',
      rating: 5,
      text: 'Outstanding security services for our hotel. The team is courteous with guests while maintaining high security standards. Their event security team has handled our conferences flawlessly.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Left Half - Premium Logo Design */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-[50vh] lg:min-h-screen relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 animate-pulse" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px' }} />
          </div>
          
          {/* Diagonal Accent Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>

          {/* Glowing Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-red-600/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-500/20 blur-3xl rounded-full" />
          
          {/* Premium Logo Container */}
          <div className="relative z-10 flex items-center justify-center w-full h-full px-6 md:px-10 lg:px-16">
            <div className="relative w-full max-w-4xl">
              {/* Outer Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-transparent to-yellow-500/30 blur-2xl scale-110" />
              
              {/* Logo Image */}
              <img 
                src="https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Defence%20force%20security%20services%20LL-1c6f485.jpg" 
                alt="Defence Force Security Services Logo" 
                className="relative w-full h-auto object-contain drop-shadow-2xl filter brightness-110 contrast-110"
              />
              
              {/* Premium Border Frame */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-lg pointer-events-none" />
              <div className="absolute -inset-2 border border-red-600/30 rounded-xl pointer-events-none" />
            </div>
          </div>

          {/* Bottom Accent Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600" />
        </div>

        {/* Right Half - Premium Content Design */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Premium Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_csuhmdcsuhmdcsuh.png"
              alt="Defence Force Security Services"
              className="w-full h-full object-cover"
            />
            {/* Premium Multi-Layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-red-950/70 to-black/85" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-600/15 to-transparent" />
          </div>

          {/* Premium Hero Content - Centered Layout */}
          <div className="relative z-10 text-center px-6 md:px-12 py-12 max-w-2xl mx-auto space-y-6">
            {/* Top Heading - Professional Security Solutions */}
            <h2 className="text-[15px] font-bold text-white drop-shadow-lg">
              Professional Security Solutions
            </h2>

            {/* Company Name - Single Line */}
            <div>
              <h1 className="text-[30px] font-bold text-white drop-shadow-2xl">
                DEFENCE FORCE SECURITY SERVICES L.L.C
              </h1>
            </div>

            {/* SIRA Badge with Stars */}
            <div className="flex items-center justify-center gap-2 py-4">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-[14px] font-semibold text-white drop-shadow-md">
                SIRA Certified Security Services
              </span>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>

            {/* CTA Buttons - Side by Side */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="/contact">
                  Request Security Proposal
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-6 py-3 shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="/services">
                  View Our Services
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="text-base px-6 py-2 bg-yellow-500 text-gray-900 font-semibold mb-6">
              About Defence Force Security Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SIRA Certified Security Services in the UAE
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-semibold max-w-4xl mx-auto">
              Professional Security Solutions – Protecting What Matters Most
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-gray-900">DEFENCE FORCE SECURITY SERVICES L.L.C</strong> is a
                SIRA-compliant security provider delivering licensed security
                guards and integrated security solutions across the UAE. We
                specialise in protecting corporate offices, commercial buildings,
                hotels, malls, financial institutions, residential towers,
                warehouses and high-value facilities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a SIRA-registered company, every guard and security
                professional we deploy is properly trained, certified and
                monitored to meet UAE's strict security regulations. From manned
                guarding and in-office security to event protection, VIP
                bodyguards and mobile patrols, we design security plans around
                each client's operational needs.
              </p>
              <div className="pt-4">
                <Link to="/about">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
                  <p className="text-gray-600 font-medium">SIRA Certified Guards</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <CardContent className="pt-6">
                  <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
                  <p className="text-gray-600 font-medium">Operations & Support</p>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-100 p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Clients Choose Us
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">SIRA Certified</h4>
                  <p className="text-gray-600">
                    Licensed guards and supervisors meeting UAE's strict security standards
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Comprehensive Protection</h4>
                  <p className="text-gray-600">
                    Corporate, commercial, hospitality and residential security expertise
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Users className="w-7 h-7 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Integrated Solutions</h4>
                  <p className="text-gray-600">
                    Guards, patrols, CCTV support and access control systems
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">24/7 Operations</h4>
                  <p className="text-gray-600">
                    Round-the-clock availability and rapid deployment across the UAE
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Professional Reporting</h4>
                  <p className="text-gray-600">
                    Detailed incident management and client communication
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Proven Track Record</h4>
                  <p className="text-gray-600">
                    Trusted by hotels, malls, banks and premium residences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="relative z-10 py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-500 text-gray-900 font-semibold">Our Services</Badge>
            <h2 className="text-4xl font-bold mb-4">Comprehensive Security Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From security guards to VIP protection, we deliver professional security services across all sectors in the UAE
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading businesses across the UAE
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-yellow-500/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free security assessment and proposal from our SIRA-certified team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                <Mail className="w-5 h-5 mr-2" />
                Request Proposal
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Phone className="w-5 h-5 mr-2" />
              Call +971 56 304 3715
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
