import { Shield, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SecurityGuardsPage() {
  const features = [
    {
      icon: Shield,
      title: 'SIRA Certified Guards',
      description: 'All our security personnel are fully certified by SIRA and undergo rigorous training programs.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock security services with flexible scheduling to meet your specific needs.'
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Experienced security professionals with backgrounds in military and law enforcement.'
    }
  ];

  const benefits = [
    'Deterrence of criminal activity and unauthorized access',
    'Immediate response to security incidents',
    'Professional representation of your business',
    'Regular patrol and monitoring of premises',
    'Access control and visitor management',
    'Incident reporting and documentation'
  ];

  const useCases = [
    'Corporate offices and business centers',
    'Residential communities and compounds',
    'Retail stores and shopping centers',
    'Industrial facilities and warehouses',
    'Construction sites',
    'Educational institutions'
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
          <Badge className="mb-4 bg-primary text-white">Professional Security Services</Badge>
          <h1 className="text-5xl font-bold mb-6">Security Guards Services</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Professional, SIRA-certified security guards providing comprehensive protection for your premises, assets, and people.
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
              <h2 className="text-3xl font-bold mb-6">Professional Security Guard Services in UAE</h2>
              <p className="text-muted-foreground mb-4">
                Defence Force Security Services provides highly trained, SIRA-certified security guards to protect your business, property, and personnel. Our guards are carefully selected and undergo comprehensive training to ensure they meet the highest standards of professionalism and competence.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether you need security for a corporate office, residential community, retail establishment, or industrial facility, our experienced team delivers reliable protection tailored to your specific requirements.
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
                src="https://media.gettyimages.com/id/2218866222/photo/control-room-surveillance-and-woman-with-radio-watching-and-back-of-security-guard-night-or.jpg?b=1&s=2048x2048&w=0&k=20&c=BgRJaxG-aQaRxttHiPWqx2iuybR6m26v393KttrhtcY="
                alt="Professional security guard on patrol"
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Security Guards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our security guards are trained to the highest standards and equipped to handle any security challenge.
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
                src="https://media.gettyimages.com/id/585810474/photo/security-guard-with-flashlight-in-building-corridor.jpg?b=1&s=2048x2048&w=0&k=20&c=2ul8D38OEtWFplbom3q-zqok-R_gR3YpgMte1DkgIQ8="
                alt="Security guard with flashlight"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Security Benefits</h2>
              <p className="text-muted-foreground mb-6">
                Our security guard services provide multiple layers of protection and peace of mind for your organization.
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
              Our security guard services are perfect for a wide range of facilities and industries.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Security?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized security solution.
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