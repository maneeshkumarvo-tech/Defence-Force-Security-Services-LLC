import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Award, Heart, CheckCircle, Mail, Phone, Upload, Briefcase, MapPin, Clock, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function CareerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    position: '',
    experience: '',
    additionalInfo: ''
  });

  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData, cvFile);
    alert('Thank you for your application! We will review your CV and contact you soon.');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const benefits = [
    {
      icon: Award,
      title: 'Competitive Packages',
      description: 'Industry-leading salary and benefits for all positions'
    },
    {
      icon: Users,
      title: 'Professional Training',
      description: 'Comprehensive SIRA-compliant training programs and certifications'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement opportunities and professional development paths'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and supportive work environment'
    }
  ];

  const openings = [
    {
      id: 'security-guard',
      title: 'Security Guard',
      location: 'UAE',
      type: 'Full-time',
      requirements: 'Valid SIRA license required'
    },
    {
      id: 'supervisor',
      title: 'Security Supervisor',
      location: 'UAE',
      type: 'Full-time',
      requirements: '3+ years experience, SIRA license required'
    },
    {
      id: 'concierge',
      title: 'Concierge Security',
      location: 'UAE',
      type: 'Full-time',
      requirements: 'SIRA license, excellent communication skills'
    },
    {
      id: 'lifeguard',
      title: 'Lifeguard',
      location: 'UAE',
      type: 'Full-time',
      requirements: 'Valid lifeguard certification, SIRA license'
    },
    {
      id: 'driver',
      title: 'Security Driver',
      location: 'UAE',
      type: 'Full-time',
      requirements: 'Valid UAE driving license, SIRA license'
    },
    {
      id: 'admin',
      title: 'Admin & Support Staff',
      location: 'UAE',
      type: 'Full-time',
      requirements: 'Administrative experience, computer skills'
    }
  ];

  return (
    <div className="flex flex-col relative">
      {/* Full Page Background Image with Dark Overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(https://img1.wsimg.com/isteam/ip/f23ea822-2da6-4fb9-bf34-a019ca088b5b/Gemini_Generated_Image_ach2siach2siach2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* No overlay - full image visibility */}
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-4 bg-primary/90 text-white border-primary">
                Join Our Team
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-500 drop-shadow-lg">
                Career at Defence Force Security Services L.L.C
              </h1>
              <p className="text-xl text-yellow-500 mb-8 drop-shadow-md">
                Build your future with UAE's leading SIRA-certified security services provider
              </p>
              
              {/* Quick Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-white hover:bg-primary/90 shadow-lg min-w-[200px]"
                  onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/50 hover:bg-white/20 shadow-lg min-w-[200px] backdrop-blur-sm"
                  asChild
                >
                  <a href="mailto:flywindstourism@gmail.com?subject=Career Inquiry">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-accent/90 text-white border-accent hover:bg-accent shadow-lg min-w-[200px]"
                  asChild
                >
                  <a href="tel:+971563043715">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
                <CardContent className="pt-8 pb-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Join the Defence Force Family</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    We are actively seeking dedicated and professional individuals with valid SIRA licenses to join our growing team. 
                    Whether you're an experienced <strong>Security Guard</strong>, <strong>Supervisor</strong>, <strong>Lifeguard</strong>, 
                    <strong> Concierge Security Staff</strong>, or <strong>Security Driver</strong>, we offer rewarding career opportunities 
                    with one of the UAE's most trusted security service providers.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At Defence Force Security Services, we believe in investing in our people. Join us and become part of a team 
                    that values professionalism, integrity, and excellence in everything we do.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Why Work With Us?</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                We offer more than just a job – we provide a career path with growth, training, and competitive benefits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-2xl transition-shadow bg-white/95 backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Key Benefits List */}
            <div className="mt-12 max-w-3xl mx-auto">
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Competitive Salary Packages:</strong> Industry-leading compensation based on experience and qualifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Comprehensive Training Programs:</strong> SIRA-compliant training, skill development, and ongoing education</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Career Growth Opportunities:</strong> Clear advancement paths from guard to supervisor to management roles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Health & Insurance Benefits:</strong> Comprehensive medical coverage for you and your family</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Professional Work Environment:</strong> Modern equipment, supportive management, and team culture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Recognition & Rewards:</strong> Performance-based incentives and employee recognition programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section id="current-openings" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Current Openings</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                Explore our available positions and find the perfect role for your skills and experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {openings.map((opening, index) => (
                <Card key={index} id={opening.id} className="hover:shadow-2xl transition-shadow border-l-4 border-l-primary bg-white/95 backdrop-blur-sm scroll-mt-20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2 text-gray-900">{opening.title}</CardTitle>
                        <div className="flex items-center text-gray-600 mb-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{opening.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{opening.type}</span>
                        </div>
                      </div>
                      <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{opening.requirements}</p>
                    <Button 
                      className="w-full" 
                      onClick={() => {
                        setFormData({ ...formData, position: opening.title });
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Apply for this Position
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="submit-cv" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Submit Your Application</h2>
                <p className="text-lg text-white/90 drop-shadow-md">
                  Fill out the form below and upload your CV. We'll review your application and get back to you soon.
                </p>
              </div>

              <Card className="shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <Label htmlFor="fullName" className="text-gray-900">Full Name *</Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="mt-1"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <Label htmlFor="mobile" className="text-gray-900">Mobile Number *</Label>
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="+971 XX XXX XXXX"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="mt-1"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-gray-900">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1"
                      />
                    </div>

                    {/* Position Applied For */}
                    <div>
                      <Label htmlFor="position" className="text-gray-900">Position Applied For *</Label>
                      <Select 
                        value={formData.position} 
                        onValueChange={(value) => setFormData({ ...formData, position: value })}
                        required
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Security Guard">Security Guard</SelectItem>
                          <SelectItem value="Security Supervisor">Security Supervisor</SelectItem>
                          <SelectItem value="Concierge Security">Concierge Security</SelectItem>
                          <SelectItem value="Lifeguard">Lifeguard</SelectItem>
                          <SelectItem value="Security Driver">Security Driver</SelectItem>
                          <SelectItem value="Mobile Patrol Officer">Mobile Patrol Officer</SelectItem>
                          <SelectItem value="Other">Other Position</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Years of Experience */}
                    <div>
                      <Label htmlFor="experience" className="text-gray-900">Years of Experience *</Label>
                      <Select 
                        value={formData.experience} 
                        onValueChange={(value) => setFormData({ ...formData, experience: value })}
                        required
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years (Entry Level)</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10+">10+ years (Senior Level)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Upload CV */}
                    <div>
                      <Label htmlFor="cv" className="text-gray-900">Upload Your CV *</Label>
                      <div className="mt-1">
                        <label 
                          htmlFor="cv" 
                          className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-gray-50 transition-colors"
                        >
                          <div className="text-center">
                            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">
                              {cvFile ? (
                                <span className="text-primary font-medium">{cvFile.name}</span>
                              ) : (
                                <>
                                  <span className="text-primary font-medium">Click to upload</span> or drag and drop
                                </>
                              )}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                          </div>
                          <input
                            id="cv"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                            required
                          />
                        </label>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <Label htmlFor="additionalInfo" className="text-gray-900">Additional Information (Optional)</Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Tell us about your SIRA license, certifications, or any other relevant information..."
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button type="submit" size="lg" className="w-full">
                        <Mail className="mr-2 h-5 w-5" />
                        Submit Application
                      </Button>
                    </div>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="mt-8 text-center">
                <p className="text-white/90 mb-4 drop-shadow-md">
                  Have questions about our career opportunities?
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="outline" className="bg-white/95 backdrop-blur-sm hover:bg-white" asChild>
                    <a href="mailto:flywindstourism@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      flywindstourism@gmail.com
                    </a>
                  </Button>
                  <Button variant="outline" className="bg-white/95 backdrop-blur-sm hover:bg-white" asChild>
                    <a href="tel:+971563043715">
                      <Phone className="mr-2 h-4 w-4" />
                      +971 56 304 3715
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
