import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_csuhmdcsuhmdcsuh.png"
            alt="Defence Force Security Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Defence Force Security
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Your trusted SIRA-certified security partner in the UAE
          </p>
        </div>
      </section>

      {/* Our Company */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Our Company</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              DEFENCE FORCE SECURITY SERVICES L.L.C is a modern security solutions provider established to deliver reliable, high-level protection services across the UAE. We combine trained manpower, technology, and strategic planning to create safe environments for individuals, businesses, and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Company Principles */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Mission, Vision & Company Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundation of our commitment to excellence in security services
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {/* Mission */}
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To deliver world-class, SIRA-compliant, and professional security services that ensure safety, trust, and operational continuity for our clients across the UAE. We are committed to protecting people, property, and assets through trained personnel, advanced technology, and strategic planning.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become one of the UAE's most trusted and respected security partners, recognized for innovation, integrity, and excellence. We aspire to set industry standards in security services while building long-term partnerships with government, hospitality, and enterprise clients.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Company Principles */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 text-gray-900">Our Core Principles</h3>
              <p className="text-xl text-gray-600">
                Five fundamental values that guide every decision and action
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Integrity */}
              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">🛡️</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Integrity</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Honest and transparent operations in all our dealings with unwavering ethical standards
                  </p>
                </CardContent>
              </Card>

              {/* Professionalism */}
              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">🤝</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Professionalism</h4>
                  <p className="text-gray-600 leading-relaxed">
                    SIRA-certified, highly trained, and reliable security teams delivering excellence
                  </p>
                </CardContent>
              </Card>

              {/* Safety First */}
              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">🎖️</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Safety First</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Zero-compromise approach to protection, security, and risk management
                  </p>
                </CardContent>
              </Card>

              {/* Commitment */}
              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">✔️</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Commitment</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Long-term partnerships, client satisfaction, and 24/7 dedicated service
                  </p>
                </CardContent>
              </Card>

              {/* Innovation */}
              <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">💡</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Technology-driven security solutions with modern tools and strategies
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Team</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our security officers, supervisors, bodyguards, and support teams undergo continuous training and follow strict SIRA compliance guidelines.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our advisory board includes experienced security industry leaders ensuring best practices across all operations.
              </p>
              <Button size="lg" asChild>
                <Link to="/career">Join Our Team</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://media.gettyimages.com/id/2158689689/photo/closeup-security-guard-man-in-public-area-standing-secure-people-or-place-outdoor.jpg?b=1&s=2048x2048&w=0&k=20&c=Wp8BHguBXKAtY7gYy7svr_Aan4C6tvDjvTCa1NysPqg="
                alt="Professional security team"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and customized security solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="tel:+971501234567">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
