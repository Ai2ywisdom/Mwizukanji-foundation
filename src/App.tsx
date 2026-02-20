import { useEffect, useState } from 'react';
import { 
  Menu, X, Heart, Users, BookOpen, Shield, 
  MapPin, Mail, Phone, ArrowRight, Play, ChevronRight,
  Facebook, Instagram, Twitter, Linkedin, Send
} from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-10% 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Programs', id: 'programs' },
    { label: 'Stories', id: 'stories' },
    { label: 'Events', id: 'events' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="relative min-h-screen bg-paper">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-paper/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-heading font-bold text-xl tracking-tight text-ink"
            >
              Mwizukanji
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-coral ${
                    activeSection === link.id ? 'text-coral' : 'text-ink'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('donate')}
                className="btn-primary text-sm"
              >
                Donate
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-ink"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-paper z-40">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-2xl font-heading font-bold text-ink hover:text-coral transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('donate')}
                className="btn-primary mt-4"
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Section 1: Hero */}
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/zambia_feeding.jpg"
            alt="Community"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/70" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="heading-xl text-white max-w-4xl mb-6">
            Changing<br />
            Lives, One<br />
            Story at a Time
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 body-text">
            We work alongside Zambian communities to protect children, support families, 
            and create lasting change—rooted in trust, not handouts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('donate')}
              className="btn-primary"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="card-rounded shadow-card overflow-hidden">
                <img
                  src="/mwizukanji_real.jpg"
                  alt="Community Leader"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <span className="eyebrow block mb-4">About the Foundation</span>
              <h2 className="heading-lg text-ink mb-6">
                Rooted in Community.<br />Driven by Dignity.
              </h2>
              <div className="space-y-4 body-text">
                <p>
                  Mwizukanji Foundation partners with local leaders to keep children safe, 
                  families supported, and communities strong.
                </p>
                <p>
                  We focus on child protection, education access, and family resilience—measured 
                  by real outcomes, not just activities.
                </p>
                <p>
                  Everything we do is co-designed with the people we serve. Founded by Prudence 
                  Nankamba, our foundation reflects her journey from teenage mother to successful 
                  entrepreneur and philanthropist.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-ink/10">
                <div>
                  <div className="heading-md text-coral">12+</div>
                  <div className="text-sm text-warm-gray mt-1">Years</div>
                </div>
                <div>
                  <div className="heading-md text-coral">40+</div>
                  <div className="text-sm text-warm-gray mt-1">Communities</div>
                </div>
                <div>
                  <div className="heading-md text-coral">10K+</div>
                  <div className="text-sm text-warm-gray mt-1">Children</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Programs */}
      <section id="programs" className="py-24 lg:py-32 px-6 lg:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <span className="eyebrow block mb-4">Programs</span>
            <h2 className="heading-lg text-ink">What We Do</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 group">
              <div className="card-rounded shadow-card overflow-hidden bg-white hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5">
                <div className="h-56 overflow-hidden">
                  <img
                    src="/zambia_orphans.jpg"
                    alt="Child Protection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="heading-md text-ink mb-3">Child Protection</h3>
                  <p className="body-text">
                    Safe spaces, case support, and reintegration programs for vulnerable children.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 group">
              <div className="card-rounded shadow-card overflow-hidden bg-white hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5">
                <div className="h-56 overflow-hidden">
                  <img
                    src="/zambia_school.jpg"
                    alt="Education Support"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="heading-md text-ink mb-3">Education Support</h3>
                  <p className="body-text">
                    School supplies, fees, and mentorship to keep children in school.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 group">
              <div className="card-rounded shadow-card overflow-hidden bg-white hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5">
                <div className="h-56 overflow-hidden">
                  <img
                    src="/programs_family.jpg"
                    alt="Family Resilience"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="heading-md text-ink mb-3">Family Resilience</h3>
                  <p className="body-text">
                    Skills training, savings groups, and food security initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Story */}
      <section id="stories" className="relative min-h-screen bg-ink overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Image */}
          <div className="relative h-[50vh] lg:h-auto">
            <img
              src="/featured_memory.jpg"
              alt="Memory's Story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/50 lg:block hidden" />
          </div>

          {/* Content */}
          <div className="flex items-center px-6 lg:px-16 py-16 lg:py-0">
            <div className="max-w-lg animate-on-scroll opacity-0 translate-x-8 transition-all duration-700">
              <span className="eyebrow block mb-6 text-white/60">Featured Story</span>
              <blockquote className="text-2xl lg:text-3xl font-heading font-bold text-white leading-tight mb-8">
                "A home isn't a building. It's a place where you feel safe, heard, and loved."
              </blockquote>
              <div className="w-16 h-1 bg-coral mb-8" />
              <p className="text-white/80 text-lg mb-2">— Memory, age 16, Lusaka</p>
              <p className="text-white/60 text-sm mb-8">
                After losing her parents, Memory found a new family through our child protection program. 
                Today, she's thriving in school and dreams of becoming a teacher.
              </p>
              <button className="inline-flex items-center text-coral font-semibold hover:underline">
                Read Memory's Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Community Mosaic */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-paper overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Mosaic Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="animate-on-scroll opacity-0 scale-95 transition-all duration-700 col-span-2 row-span-2">
              <div className="card-rounded overflow-hidden h-full">
                <img src="/zambia_orphans.jpg" alt="Community" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 scale-95 transition-all duration-700 delay-100">
              <div className="card-rounded overflow-hidden h-48">
                <img src="/zambia_school.jpg" alt="Mother and child" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 scale-95 transition-all duration-700 delay-200">
              <div className="card-rounded overflow-hidden h-48">
                <img src="/zambia_volunteers.jpg" alt="Community gathering" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 scale-95 transition-all duration-700 delay-300 col-span-2">
              <div className="card-rounded overflow-hidden h-48">
                <img src="/zambia_feeding.jpg" alt="Community meal" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Center Text */}
          <div className="text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="heading-lg text-ink mb-4">Meet the Community</h2>
            <p className="text-warm-gray text-lg max-w-xl mx-auto mb-8">
              Real people. Real progress. Real change.
            </p>
            <button 
              onClick={() => scrollToSection('stories')}
              className="btn-secondary"
            >
              Explore Stories
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Events */}
      <section id="events" className="py-24 lg:py-32 px-6 lg:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Featured Event */}
            <div className="animate-on-scroll opacity-0 translate-x-[-2rem] transition-all duration-700">
              <span className="eyebrow block mb-4">Events</span>
              <h2 className="heading-lg text-ink mb-8">Join Us</h2>
              <div className="card-rounded shadow-card overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/events_featured.jpg"
                    alt="Community Health Day"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 bg-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-coral text-white flex flex-col items-center justify-center">
                      <span className="text-xs font-bold">AUG</span>
                      <span className="text-lg font-bold">15</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Community Health Day</h3>
                      <p className="text-warm-gray text-sm flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        Lusaka
                      </p>
                    </div>
                  </div>
                  <p className="body-text mb-4">
                    Free health screenings, vaccinations, and wellness education for the whole family.
                  </p>
                  <button className="text-coral font-semibold flex items-center hover:underline">
                    Register Now
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Event List */}
            <div className="space-y-6 animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 delay-200">
              {[
                { title: 'Youth Skills Camp', location: 'Kabwe', date: 'SEP 02' },
                { title: 'Family Support Workshop', location: 'Ndola', date: 'SEP 18' },
                { title: 'Back-to-School Drive', location: 'Livingstone', date: 'OCT 05' },
              ].map((event, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-6 p-6 bg-white card-rounded shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-xl bg-ink/5 flex flex-col items-center justify-center group-hover:bg-coral group-hover:text-white transition-colors">
                    <span className="text-xs font-bold">{event.date.split(' ')[0]}</span>
                    <span className="text-lg font-bold">{event.date.split(' ')[1]}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg group-hover:text-coral transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-warm-gray text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.location}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-warm-gray group-hover:text-coral group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Get Involved */}
      <section id="donate" className="py-24 lg:py-32 px-6 lg:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <span className="eyebrow block mb-4">Get Involved</span>
            <h2 className="heading-lg text-ink">Be Part of the Change</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Volunteer Card */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 group">
              <div className="card-rounded shadow-card overflow-hidden bg-white h-full">
                <div className="h-56 overflow-hidden">
                  <img
                    src="/zambia_volunteers.jpg"
                    alt="Volunteer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="heading-md text-ink mb-3">Volunteer</h3>
                  <p className="body-text mb-6">
                    Give your time. Mentor, organize, or support events. Your skills can make 
                    a real difference in someone's life.
                  </p>
                  <button className="btn-secondary w-full">
                    Sign Up to Volunteer
                  </button>
                </div>
              </div>
            </div>

            {/* Donate Card */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 group">
              <div className="card-rounded shadow-card overflow-hidden bg-white h-full">
                <div className="h-56 overflow-hidden">
                  <img
                    src="/donate_card.jpg"
                    alt="Donate"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="heading-md text-ink mb-3">Donate</h3>
                  <p className="body-text mb-6">
                    Fund real outcomes. Every contribution reaches the community. 
                    100% transparency in how your donation is used.
                  </p>
                  <button className="btn-primary w-full">
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Strip */}
          <div className="animate-on-scroll opacity-0 scale-x-95 transition-all duration-700 delay-300">
            <div className="bg-coral card-rounded p-8 lg:p-12 text-center text-white">
              <h3 className="font-heading font-bold text-xl mb-2">Want to collaborate?</h3>
              <p className="text-white/80 mb-6">Let's build something together.</p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-3 rounded-full font-semibold bg-white text-coral hover:bg-white/90 transition-colors"
              >
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: News */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div>
              <span className="eyebrow block mb-4">News</span>
              <h2 className="heading-lg text-ink">Latest Updates</h2>
            </div>
            <button className="text-coral font-semibold flex items-center hover:underline mt-4 md:mt-0">
              View All News
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                image: '/zambia_feeding.jpg', 
                category: 'Programs', 
                title: 'New safe space opens in Lusaka',
                date: 'Aug 2026'
              },
              { 
                image: '/zambia_volunteers.jpg', 
                category: 'Community', 
                title: 'Volunteer spotlight: Meet Chanda',
                date: 'Jul 2026'
              },
              { 
                image: '/zambia_school.jpg', 
                category: 'Reports', 
                title: 'Annual report 2025: Key highlights',
                date: 'Jun 2026'
              },
            ].map((news, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group cursor-pointer"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="card-rounded shadow-card overflow-hidden bg-white hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-coral bg-coral/10 px-3 py-1 rounded-full">
                        {news.category}
                      </span>
                      <span className="text-xs text-warm-gray">{news.date}</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg group-hover:text-coral transition-colors">
                      {news.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Testimonials */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="heading-lg text-ink">Words from the Community</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "They didn't just help—they listened. The foundation truly cares about our community.",
                name: "Grace",
                role: "Caregiver"
              },
              {
                quote: "My daughter is back in school and thriving. I can't thank them enough for the support.",
                name: "Joseph",
                role: "Parent"
              },
              {
                quote: "A true partner, not just a funder. They work with us, not for us.",
                name: "Mrs. Banda",
                role: "Local Leader"
              },
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="card-rounded shadow-card p-8 bg-white h-full">
                  <div className="text-coral text-4xl font-serif mb-4">"</div>
                  <p className="body-text mb-6">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center">
                      <span className="font-heading font-bold text-coral">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{testimonial.name}</p>
                      <p className="text-sm text-warm-gray">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Partners */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 translate-x-[-2rem] transition-all duration-700">
              <span className="eyebrow block mb-4">Partners</span>
              <h2 className="heading-lg text-ink mb-6">Collaboration</h2>
              <p className="body-text text-lg">
                We work with local leaders, government, and global partners to deliver 
                lasting impact. Together, we can achieve more.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 delay-200">
              {[
                'Ministry of Education',
                'UNICEF Zambia',
                'World Vision',
                'Save the Children',
                'Local Chiefs Association',
                'Health NGOs Network',
              ].map((partner, index) => (
                <div 
                  key={index}
                  className="card-rounded bg-white shadow-card p-6 flex items-center justify-center h-24 hover:shadow-card-hover transition-shadow"
                >
                  <span className="font-heading font-bold text-ink/40 text-sm text-center">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Contact */}
      <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="animate-on-scroll opacity-0 translate-x-[-2rem] transition-all duration-700">
              <span className="eyebrow block mb-4">Contact</span>
              <h2 className="heading-lg text-ink mb-6">Let's Talk</h2>
              <p className="body-text text-lg mb-10">
                Have a question, idea, or partnership inquiry? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-gray">Email</p>
                    <p className="font-semibold text-ink">hello@mwizukanji.org</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-gray">Phone</p>
                    <p className="font-semibold text-ink">+260 (0) 211 XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-gray">Address</p>
                    <p className="font-semibold text-ink">Lusaka, Zambia</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-10">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 delay-200">
              <div className="card-rounded shadow-card p-8 lg:p-10 bg-white">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none transition-all resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Footer */}
      <footer className="py-24 lg:py-32 px-6 lg:px-12 bg-ink text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="heading-lg text-white mb-4">
              Thank you for being part of this.
            </h2>
            <p className="text-white/60 text-lg">
              Stay connected. Stay involved.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div>
              <h3 className="font-heading font-bold text-lg mb-6">About</h3>
              <ul className="space-y-3">
                {['Mission', 'Team', 'Reports', 'Careers'].map((item) => (
                  <li key={item}>
                    <button className="text-white/60 hover:text-coral transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-6">Programs</h3>
              <ul className="space-y-3">
                {['Child Protection', 'Education', 'Family Resilience'].map((item) => (
                  <li key={item}>
                    <button className="text-white/60 hover:text-coral transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-6">Connect</h3>
              <ul className="space-y-3">
                {['Contact', 'Donate', 'Volunteer', 'Newsletter'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => item === 'Contact' ? scrollToSection('contact') : item === 'Donate' ? scrollToSection('donate') : undefined}
                      className="text-white/60 hover:text-coral transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <p className="text-white/40 text-sm">
              © 2026 Mwizukanji Foundation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-white/40 hover:text-white text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-white/40 hover:text-white text-sm transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;