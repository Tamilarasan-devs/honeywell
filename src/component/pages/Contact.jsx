import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Building,
  Clock,
  Globe,
  Award,
  Send,
  Star,
  ArrowRight,
  Sparkles,
  ShieldCheck
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! Our apparel export team will get back to you within 2-4 business hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: ["Tirupur, Tamil Nadu", "India - Textile Heartland"],
      bgColor: "bg-[#eef7fa]/50",
      borderColor: "border-[#4da4cc]/20",
      iconColor: "text-[#1b5e7d]"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["honeywellcreation@gmail.com", "Quick response guaranteed"],
      bgColor: "bg-[#eef7fa]/50",
      borderColor: "border-[#4da4cc]/20",
      iconColor: "text-[#1b5e7d]"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 9894221055", "Mon - Sat: 9AM - 6PM"],
      bgColor: "bg-[#eef7fa]/50",
      borderColor: "border-[#4da4cc]/20",
      iconColor: "text-[#1b5e7d]"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Factory Visit",
      details: ["Schedule a Tour", "Experience high-tech assembly"],
      bgColor: "bg-[#eef7fa]/50",
      borderColor: "border-[#4da4cc]/20",
      iconColor: "text-[#1b5e7d]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans relative overflow-x-hidden">
      {/* Premium Styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Outfit:wght@200;300;400;500;600;700&display=swap');
        
        .cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }
        .outfit { font-family: 'Outfit', sans-serif; }

        .blue-gradient-text {
          background: linear-gradient(90deg, #1b5e7d 0%, #4da4cc 50%, #1b5e7d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .input-premium {
          width: 100%;
          padding: 1.125rem 1.25rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(27, 94, 125, 0.2);
          background-color: rgba(255, 255, 255, 0.9);
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          color: #1A1410;
          transition: all 0.3s ease;
          outline: none;
        }
        .input-premium:focus {
          border-color: #1b5e7d;
          background-color: #ffffff;
          box-shadow: 0 0 0 4px rgba(27, 94, 125, 0.1);
        }
        .input-premium::placeholder {
          color: #9CA3AF;
        }

        .btn-premium-blue {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: linear-gradient(90deg, #1b5e7d 0%, #4da4cc 50%, #1b5e7d 100%);
          background-size: 200% auto;
          color: #ffffff;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 0.75rem;
          transition: all 0.4s ease;
          border: none;
          cursor: pointer;
        }
        .btn-premium-blue:hover {
          background-position: right center;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(27, 94, 125, 0.25);
        }
      `}</style>

      {/* Decorative architectural grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(#1A1410 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      {/* Elegant Header Section */}
      <section className="relative px-6 pt-32 pb-20 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#4da4cc]/30 rounded-full bg-white/60 backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 text-[#1b5e7d]" />
            <span className="outfit text-xs font-semibold tracking-[0.2em] uppercase text-[#1b5e7d]">
              Get In Touch
            </span>
          </div>

          <h1 className="cormorant text-5xl md:text-7xl font-medium text-[#1A1410] tracking-tight leading-tight">
            Initiate Global <br />
            <span className="italic blue-gradient-text font-normal">Consultation</span>
          </h1>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#4da4cc]/50 to-transparent mx-auto my-8" />

          <p className="outfit text-base md:text-lg text-[#5A4F43] tracking-wide leading-relaxed max-w-3xl mx-auto font-light">
            Have questions regarding custom product lines, fabric parameters, shipping ports, or GOTS certifications? Reach out to our Tirupur team of apparel manufacturing experts.
          </p>
        </motion.div>
      </section>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Info, Map & Stats */}
          <div className="lg:col-span-5 space-y-12">

            {/* Title / Description */}
            <div className="space-y-4">
              <h2 className="cormorant text-4xl font-semibold text-[#1A1410]">
                Contact Information
              </h2>
              <p className="outfit text-base text-[#5A4F43] leading-relaxed font-light">
                Reach out using any of the direct channels below or coordinate a formal visit to our Tirupur factory units.
              </p>
            </div>

            {/* Grid of Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`p-6 rounded-2xl border ${item.borderColor} ${item.bgColor} backdrop-blur-sm transition-all duration-300 shadow-sm`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-3 bg-white rounded-xl shadow-sm border border-[#4da4cc]/10 ${item.iconColor}`}>
                      {item.icon}
                    </div>
                    <h3 className="outfit text-base font-semibold text-[#1A1410] tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="space-y-1.5">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="outfit text-sm text-[#5A4F43] leading-relaxed font-light">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder Block */}
            <div className="bg-white rounded-3xl border border-[#4da4cc]/15 p-8 shadow-md overflow-hidden space-y-6">
              <h3 className="cormorant text-3xl font-semibold text-[#1A1410]">Our Head Office</h3>

              <div className="bg-gradient-to-br from-[#1b5e7d] to-[#113d52] rounded-2xl h-56 flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80')] bg-cover opacity-20 mix-blend-overlay" />

                <div className="text-center text-white relative z-10 p-4 space-y-3">
                  <div className="text-3xl flex justify-center text-[#4da4cc]"><MapPin className="w-10 h-10" /></div>
                  <p className="cormorant text-3xl font-medium tracking-wide">Tirupur, India</p>
                  <p className="outfit text-xs text-slate-200 uppercase tracking-[0.2em]">Apparel Capital of South Asia</p>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-3 py-4 rounded-xl border-2 border-[#1b5e7d] text-[#1b5e7d] outfit text-sm font-semibold tracking-wide hover:bg-[#1b5e7d] hover:text-white transition-all duration-300">
                <span>Request Custom Layout Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-5 text-center">
              {[
                { number: "18+", label: "Years Experience" },
                { number: "1.8K", label: "Japan CNC Looms" },
                { number: "350+", label: "Craft Artisans" }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-5 border border-[#4da4cc]/15 shadow-sm hover:shadow-md transition-shadow">
                  <div className="outfit text-2xl font-bold text-[#1b5e7d]">{stat.number}</div>
                  <div className="outfit text-xs text-[#5A4F43] mt-2 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#4da4cc]/20 p-8 md:p-12 shadow-xl space-y-8 relative overflow-hidden">
            {/* Background design glow */}
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#4da4cc] opacity-10 blur-3xl pointer-events-none" />

            <div className="space-y-3 relative z-10">
              <h2 className="cormorant text-4xl font-semibold text-[#1A1410]">Send us a Message</h2>
              <p className="outfit text-base text-[#5A4F43] leading-relaxed font-light">
                Fill out the secure communication framework below and a Honeywell representative will engage within 2-4 business hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block outfit text-xs font-semibold text-[#1A1410] uppercase tracking-wider mb-2.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-premium"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block outfit text-xs font-semibold text-[#1A1410] uppercase tracking-wider mb-2.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-premium"
                    placeholder="Enter your corporate email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block outfit text-xs font-semibold text-[#1A1410] uppercase tracking-wider mb-2.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-premium"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block outfit text-xs font-semibold text-[#1A1410] uppercase tracking-wider mb-2.5">
                    Subject *
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-premium appearance-none pr-10"
                    >
                      <option value="">Select inquiry category</option>
                      <option value="manufacturing">Kids Rompers / Onesies Inquiry</option>
                      <option value="manufacturing_mens">Mens T-Shirts & Polos Inquiry</option>
                      <option value="manufacturing_womens">Womens Coordinates / Lounge Inquiry</option>
                      <option value="quote">Request Custom Export Quote</option>
                      <option value="visit">Schedule Factory Unit Tour</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#1b5e7d]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block outfit text-xs font-semibold text-[#1A1410] uppercase tracking-wider mb-2.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="input-premium resize-none"
                  placeholder="Specify product requirements, fabric blends, volume demands, or target shipping timelines..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-premium-blue w-full py-4.5 mt-4"
                style={{ padding: '1.125rem' }}
              >
                <span>Transmit Secure Inquiry</span>
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>

            {/* Quick Response Notice */}
            <div className="mt-8 p-5 bg-[#eef7fa]/80 rounded-2xl border border-[#4da4cc]/20 flex items-start gap-4 relative z-10 shadow-sm">
              <div className="bg-white p-2.5 rounded-xl shadow-sm border border-[#4da4cc]/15">
                <Star className="w-5 h-5 text-[#1b5e7d] fill-[#1b5e7d]/20" />
              </div>
              <div className="space-y-1">
                <div className="outfit text-sm text-[#1A1410] font-bold tracking-wide">Premium SLA Engaged</div>
                <p className="outfit text-sm text-[#5A4F43] leading-relaxed font-light">
                  We guarantee direct, technical correspondence from unit managers within 2-4 business hours.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Brand Promise Banner Section */}
        <section className="mt-32 pt-20 border-t border-[#4da4cc]/20">
          <div className="text-center mb-16 space-y-4">
            <h2 className="cormorant text-4xl md:text-5xl font-semibold text-[#1A1410]">Our Operational Promise</h2>
            <p className="outfit text-lg text-[#5A4F43] font-light max-w-2xl mx-auto">Experience unmatched precision from blueprint to container delivery.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-3xl p-10 border border-[#4da4cc]/15 text-center space-y-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-[#eef7fa] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto border border-[#4da4cc]/20 text-[#1b5e7d]">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="outfit text-xl font-semibold text-[#1A1410] tracking-wide">Direct Turnaround</h3>
              <p className="outfit text-sm text-[#5A4F43] leading-relaxed font-light">
                Optimized layout scheduling systems that ensure highly predictable production and shipping slots.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-[#4da4cc]/15 text-center space-y-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-[#eef7fa] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto border border-[#4da4cc]/20 text-[#1b5e7d]">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="outfit text-xl font-semibold text-[#1A1410] tracking-wide">Global Shipping Standards</h3>
              <p className="outfit text-sm text-[#5A4F43] leading-relaxed font-light">
                Direct export corridors with fully computerized customs filings, GOTS tracking, and multi-port options.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 border border-[#4da4cc]/15 text-center space-y-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-[#eef7fa] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto border border-[#4da4cc]/20 text-[#1b5e7d]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="outfit text-xl font-semibold text-[#1A1410] tracking-wide">Quality SLA Guarantee</h3>
              <p className="outfit text-sm text-[#5A4F43] leading-relaxed font-light">
                Absolute conformance to GOTS, OEKO-TEX, and WRAP quality control matrices on every stitch.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contact;