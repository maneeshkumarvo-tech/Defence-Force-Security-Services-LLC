import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Navigation, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+971 56 304 3715'],
      link: 'tel:+971563043715'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['flywindstourism@gmail.com'],
      link: 'mailto:flywindstourism@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Elegant Star Business Center', 'Amsaf Building, 1st Floor, Office No: 34', 'DCC Dubai UAE'],
      link: 'https://maps.google.com/?q=786H+8XH+-+Port+Saeed+-+Deira+-+Dubai'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['24/7 Emergency Services', 'Office: Sun-Thu 9AM-6PM'],
      link: null
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_csuhmdcsuhmdcsuh.png"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our team for security solutions and inquiries
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card key={info.title} className="border-none shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      info.link && idx === 0 ? (
                        <a
                          key={detail}
                          href={info.link}
                          className="block text-muted-foreground hover:text-primary transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p key={detail} className="text-muted-foreground">{detail}</p>
                      )
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Find Us on the Map</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our office at 786H+8XH - Port Saeed - Deira - Dubai
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-2xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6234567890123!2d55.33!3d25.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s786H%2B8XH!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae&q=786H%2B8XH,+Port+Saeed,+Deira,+Dubai"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Defence Force Security Services Location - 786H+8XH Port Saeed, Deira, Dubai"
              />
            </div>
            
            {/* Map Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-sm text-muted-foreground">
                  786H+8XH - Port Saeed<br />
                  Deira - Dubai, UAE
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 Emergency Response<br />
                  Office: Sun-Thu 9AM-6PM
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Get Directions</h3>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=786H%2B8XH+Port+Saeed+Deira+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center gap-1"
                >
                  Open in Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_6uvz0y6uvz0y6uvz.png"
            alt="Contact Form Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Send Us a Message</h2>
              <p className="text-xl text-gray-200">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>
            <Card className="border-none shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Security Services Inquiry"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your security needs..."
                      rows={6}
                    />
                  </div>
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-xl text-muted-foreground">
              We're located in the UAE
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Map integration available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
