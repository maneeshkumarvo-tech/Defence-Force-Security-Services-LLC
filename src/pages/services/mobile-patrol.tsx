import { Car, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function MobilePatrolPage() {
  const features = [
    {
      icon: Car,
      title: 'Regular Patrols',
      description: 'Scheduled and random patrol visits to deter criminal activity and ensure property security.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Customizable patrol frequencies and times to match your specific security requirements.'
    },
    {
      icon: MapPin,
      title: 'GPS Tracking',
      description: 'Real-time tracking and reporting of all patrol activities for complete transparency.'
    }
  ];

  const benefits = [
    'Cost-effective alternative to static security guards',
    'Visible deterrent to criminal activity',
    'Regular property inspections and reporting',
    'Rapid response to alarms and incidents',
    'Lock-up and unlock services',
    'Detailed patrol reports and documentation'
  ];

  const useCases = [
    'Commercial and industrial properties',
    'Construction sites and vacant buildings',
    'Residential communities',
    'Retail parks and shopping centers',
    'Educational campuses',
    'Healthcare facilities'
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
          <Badge className="mb-4 bg-primary text-white">Mobile Security Solutions</Badge>
          <h1 className="text-5xl font-bold mb-6">Mobile Patrol Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Professional mobile patrol services providing flexible, cost-effective security solutions with regular property inspections and rapid response capabilities.
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
              <h2 className="text-3xl font-bold mb-6">Professional Mobile Patrol in UAE</h2>
              <p className="text-muted-foreground mb-4">
                Defence Force Security Services offers comprehensive mobile patrol services designed to provide flexible and cost-effective security solutions. Our trained security officers conduct regular patrols of your property, providing a visible deterrent to criminal activity while ensuring thorough inspections.
              </p>
              <p className="text-muted-foreground mb-6">
                With GPS tracking and detailed reporting, you'll have complete visibility of all patrol activities. Our mobile units can respond rapidly to alarms, emergencies, or any security concerns at your property.
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
                src="https://media.gettyimages.com/id/1430090580/photo/security-guard-is-driving-a-patrol-car-at-night-city.jpg?b=1&s=2048x2048&w=0&k=20&c=m8ymsxw1bVMxHAFLRbrU4ZNLONM_yDzvonoS4KJKiVM="
                alt="Mobile patrol vehicle at night"
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
            <h2 className="text-3xl font-bold mb-4">Mobile Patrol Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced mobile security solutions with comprehensive monitoring and reporting.
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
                src="https://media.gettyimages.com/id/1485197311/photo/guard-of-a-building-takes-note-of-the-cars-parked-in-the-parking-lot.jpg?b=1&s=2048x2048&w=0&k=20&c=UPwJtylshoLHA2j8OcV-YqxRXgUIjMmy4-Tth0Tz-JM="
                alt="Security guard inspecting parking lot"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Patrol Benefits</h2>
              <p className="text-muted-foreground mb-6">
                Our mobile patrol services provide multiple advantages for property security and peace of mind.
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

      {/* Use Cases Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ideal For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mobile patrol services are perfect for various property types and security needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{useCase}</span>
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
          <h2 className="text-3xl font-bold mb-4">Need Mobile Patrol Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a customized mobile patrol solution tailored to your property.
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