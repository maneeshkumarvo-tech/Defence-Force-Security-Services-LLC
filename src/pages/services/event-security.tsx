import { Shield, Users, Radio, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function EventSecurityPage() {
  const features = [
    {
      icon: Shield,
      title: 'Crowd Management',
      description: 'Expert crowd control and flow management to ensure safe and organized events.'
    },
    {
      icon: Users,
      title: 'Access Control',
      description: 'Professional entry and exit management with ticket verification and guest list coordination.'
    },
    {
      icon: Radio,
      title: 'Emergency Response',
      description: 'Trained personnel ready to handle any emergency situation with swift and effective action.'
    }
  ];

  const benefits = [
    'Comprehensive event risk assessment and planning',
    'Professional crowd control and management',
    'VIP and guest protection services',
    'Emergency evacuation procedures',
    'Coordination with local authorities',
    'Post-event security and venue clearance'
  ];

  const eventTypes = [
    'Corporate conferences and seminars',
    'Concerts and music festivals',
    'Sports events and tournaments',
    'Wedding and private celebrations',
    'Product launches and exhibitions',
    'Government and diplomatic events'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_w349mw349mw349mw%20(1).png"
            alt="Defence Force Security Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-primary text-white">Event Protection Services</Badge>
          <h1 className="text-5xl font-bold mb-6">Event Security Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Professional event security solutions ensuring the safety and success of your events, from intimate gatherings to large-scale festivals.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Event Security in UAE</h2>
              <p className="text-muted-foreground mb-4">
                Defence Force Security Services specializes in providing comprehensive security solutions for events of all sizes. Our experienced team ensures your event runs smoothly while maintaining the highest safety standards for attendees, performers, and staff.
              </p>
              <p className="text-muted-foreground mb-6">
                From initial planning and risk assessment to on-site execution and post-event analysis, we handle every aspect of event security with professionalism and attention to detail.
              </p>
              <ul className="space-y-3">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://media.gettyimages.com/id/1447355262/photo/crowd-of-people-entering-music-festival.jpg?b=1&s=2048x2048&w=0&k=20&c=of-odjPMQuaTf04YUErOwbVii2fZ5LGfFk3cFGj3n_o="
                alt="Event security crowd control"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Event Security Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security services tailored to your event's unique requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://media.gettyimages.com/id/2152201423/photo/restrictive-tape-for-passenger-queuing-at-the-airport.jpg?b=1&s=2048x2048&w=0&k=20&c=laNPjqnaoaBnboVKGD0AP9Sm7KMwrSIMTWgSCQ6LF_U="
                alt="Event access control"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Complete Event Security Solutions</h2>
              <p className="text-muted-foreground mb-6">
                Our comprehensive approach ensures every aspect of your event security is covered.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Events We Secure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional security services for all types of events across the UAE.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {eventTypes.map((eventType, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{eventType}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning an Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced team handle your event security. Contact us for a customized security plan.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Call: +971 50 123 4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}