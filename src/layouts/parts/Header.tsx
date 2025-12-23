'use client';
import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export interface NavigationItem {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;  
  thumbnail?: string;
  children?: NavigationItem[];
}

export interface RootLayoutConfig {
  header: {
    logo: {
      src: string;
      alt: string;
      href?: string;
    };
    navigation: NavigationItem[];
    cta?: {
      label: string;
      href: string;
    };
  };
  footer?: {
    companyName: string;
    description?: string;
    links?: Array<{
      title: string;
      items: Array<{ label: string; href: string }>;
    }>;
  };
}

interface HeaderProps {
  logo: RootLayoutConfig['header']['logo'];
  navigation: NavigationItem[];
  cta?: RootLayoutConfig['header']['cta'];
}

export function Header({ logo, navigation, cta }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileExpand = (label: string) => {
    setExpandedMobile(expandedMobile === label ? null : label);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) {
        clearTimeout(dropdownTimerRef.current);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/defenceforcesecurityllc', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/defenceforcesecurityllc', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/defenceforcesecurityllc', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/defenceforcesecurityllc', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@defenceforcesecurityllc', label: 'YouTube' },
    {
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      href: 'https://www.tiktok.com/@defenceforcesecurityllc',
      label: 'TikTok',
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to={logo.href || '/'} className="flex items-center" onClick={handleLinkClick}>
            {logo.src ? (
              <img src={logo.src} alt={logo.alt} className="h-12 w-auto" />
            ) : (
              <span className="text-xl font-bold text-primary">{logo.alt}</span>
            )}
          </Link>
        </div>

        {/* Social Media Icons - Desktop */}
        <div className="hidden lg:flex items-center space-x-3 mr-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 flex-1">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.href}
                onClick={handleLinkClick}
                className={`inline-flex items-center px-4 py-2 text-base font-bold transition-colors hover:text-primary ${
                  isActive(item.href) ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>

              {/* Desktop Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div
                  className="absolute left-0 top-full mt-0 min-w-[360px] bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50"
                  onClick={handleDropdownClick}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="max-h-[480px] overflow-y-auto">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={handleLinkClick}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors border-b border-border last:border-b-0"
                      >
                        {child.thumbnail ? (
                          <img
                            src={child.thumbnail}
                            alt={child.label}
                            className="h-14 w-14 object-cover rounded flex-shrink-0"
                          />
                        ) : child.icon ? (
                          <div className="h-14 w-14 flex items-center justify-center bg-muted rounded flex-shrink-0">
                            <child.icon className="h-6 w-6 text-primary" />
                          </div>
                        ) : null}
                        <span className="flex-1 text-sm font-medium text-foreground hover:text-primary">
                          {child.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        {cta && (
          <Link
            to={cta.href}
            onClick={handleLinkClick}
            className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-colors ml-4"
          >
            {cta.label}
          </Link>
        )}

        {/* Social Media Icons - Mobile (3 key platforms) */}
        <div className="flex lg:hidden items-center space-x-3 mr-2">
          {socialLinks.slice(0, 3).map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navigation.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.href}
                    onClick={handleLinkClick}
                    className={`flex-1 px-4 py-2 text-base font-bold transition-colors ${
                      isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => toggleMobileExpand(item.label)}
                      className="p-2 text-foreground hover:text-primary transition-colors"
                      aria-label={`Toggle ${item.label} menu`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          expandedMobile === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.children && expandedMobile === item.label && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-border pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={handleLinkClick}
                        className="flex items-center gap-3 px-3 py-2 hover:bg-muted rounded transition-colors"
                      >
                        {child.thumbnail ? (
                          <img
                            src={child.thumbnail}
                            alt={child.label}
                            className="h-10 w-10 object-cover rounded flex-shrink-0"
                          />
                        ) : child.icon ? (
                          <div className="h-10 w-10 flex items-center justify-center bg-muted rounded flex-shrink-0">
                            <child.icon className="h-5 w-5 text-primary" />
                          </div>
                        ) : null}
                        <span className="flex-1 text-sm font-medium text-foreground">{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button - Mobile */}
            {cta && (
              <Link
                to={cta.href}
                onClick={handleLinkClick}
                className="block w-full text-center px-4 py-2 text-sm font-bold text-primary-foreground bg-primary hover:bg-primary/90 rounded-md transition-colors mt-4"
              >
                {cta.label}
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
