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
      icon: <MapPin className="w-5 h-5" />,
      title: "Our Location",
      details: ["Tirupur, Tamil Nadu", "India - Textile Heartland"],
      bgColor: "bg-[#fdf8ed]/50",
      borderColor: "border-[#C4A265]/15",
      iconColor: "text-[#9E7A3B]"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      details: ["honeywellcreation@gmail.com", "Quick response guaranteed"],
      bgColor: "bg-[#fdf8ed]/50",
      borderColor: "border-[#C4A265]/15",
      iconColor: "text-[#9E7A3B]"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      details: ["+91 98765 43210", "Mon - Sat: 9AM - 6PM"],
      bgColor: "bg-[#fdf8ed]/50",
      borderColor: "border-[#C4A265]/15",
      iconColor: "text-[#9E7A3B]"
    },
    {
      icon: <Building className="w-5 h-5" />,
      title: "Factory Visit",
      details: ["Schedule a Tour", "Experience high-tech assembly"],
      bgColor: "bg-[#fdf8ed]/50",
      borderColor: "border-[#C4A265]/15",
      iconColor: "text-[#9E7A3B]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans relative overflow-x-hidden">
      {/* Premium Styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Outfit:wght@200;300;400;500;600;700&display=swap');
        
        .cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }
        .outfit { font-family: 'Outfit', sans-serif; }

        .gold-gradient-text {
          background: linear-gradient(90deg, #9E7A3B 0%, #C4A265 50%, #9E7A3B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .input-premium {
          width: 100%;
          padding: 1rem 1.25rem;
          border-radius: 1rem;
          border: 1px solid rgba(196, 162, 101, 0.25);
          background-color: rgba(255, 255, 255, 0.7);
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          color: #1A1410;
          transition: all 0.3s ease;
          outline: none;
        }
        .input-premium:focus {
          border-color: #9E7A3B;
          background-color: #ffffff;
          box-shadow: 0 0 0 4px rgba(158, 122, 59, 0.08);
        }

        .btn-premium-gold {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          background: linear-gradient(90deg, #9E7A3B 0%, #C4A265 50%, #9E7A3B 100%);
          color: #ffffff;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border-radius: 1rem;
          transition: all 0.4s ease;
          border: none;
          cursor: pointer;
        }
        .btn-premium-gold:hover {
          opacity: 0.95;
          transform: translateY(-1px);
          box-shadow: 0 8px 30px rgba(158, 122, 59, 0.15);
        }
      `}</style>

      {/* Decorative architectural grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(#1A1410 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />

      {/* Elegant Header Section */}
      <section className="relative px-6 pt-24 pb-16 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C4A265]/30 rounded-full bg-white/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#9E7A3B]" />
            <span className="outfit text-[10px] font-bold tracking-[0.3em] uppercase text-[#9E7A3B]">
              Get In Touch
            </span>
          </div>

          <h1 className="cormorant text-5xl md:text-7xl font-light text-[#1A1410] tracking-tight">
            Initiate Global <br />
            <span className="italic gold-gradient-text font-normal">Consultation</span>
          </h1>

          <div className="w-16 h-0.5 bg-[#C4A265]/40 mx-auto my-6" />

          <p className="outfit text-sm md:text-base text-[#7A6B5A] tracking-[0.05em] leading-relaxed max-w-2xl mx-auto font-light">
            Have questions regarding custom product lines, fabric parameters, shipping ports, or GOTS certifications? Reach out to our Tirupur team of apparel manufacturing experts.
          </p>
        </motion.div>
      </section>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info, Map & Stats */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Title / Description */}
            <div className="space-y-3">
              <h2 className="cormorant text-4xl font-bold text-[#1A1410]">
                Contact Metadata
              </h2>
              <p className="outfit text-sm text-[#7A6B5A] leading-relaxed font-light">
                Reach out using any of the direct channels below or coordinate a formal visit to our Tirupur factory units.
              </p>
            </div>

            {/* Grid of Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className={`p-6 rounded-2xl border ${item.borderColor} ${item.bgColor} backdrop-blur-sm transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 bg-white rounded-xl shadow-sm border border-[#C4A265]/10 ${item.iconColor}`}>
                      {item.icon}
                    </div>
                    <h3 className="outfit text-sm font-bold text-[#1A1410] tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="outfit text-xs text-[#7A6B5A] leading-relaxed font-light">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder Block */}
            <div className="bg-white rounded-3xl border border-[#C4A265]/15 p-6 shadow-sm overflow-hidden space-y-4">
              <h3 className="cormorant text-2xl font-bold text-[#1A1410]">Our Head Office</h3>
              
              <div className="bg-gradient-to-br from-[#1A1410] to-[#2D231C] rounded-2xl h-48 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80')] bg-cover opacity-10" />
                
                <div className="text-center text-white relative z-10 p-4 space-y-2">
                  <div className="text-3xl flex justify-center text-[#C4A265]"><MapPin className="w-8 h-8" /></div>
                  <p className="cormorant text-2xl font-medium tracking-wide">Tirupur, India</p>
                  <p className="outfit text-[10px] text-slate-300 uppercase tracking-widest">Apparel Capital of South Asia</p>
                </div>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-[#C4A265] text-[#9E7A3B] outfit text-xs font-semibold tracking-wider hover:bg-[#9E7A3B] hover:text-white transition-all duration-300">
                <span>Request Custom Layout Tour</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { number: "18+", label: "Years Experience" },
                { number: "1.8K", label: "Japan CNC Looms" },
                { number: "350+", label: "Craft Artisans" }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 border border-[#C4A265]/10 shadow-sm">
                  <div className="outfit text-xl font-bold text-[#9E7A3B]">{stat.number}</div>
                  <div className="outfit text-[9px] text-[#7A6B5A] mt-1 font-semibold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#C4A265]/20 p-8 md:p-10 shadow-xl space-y-6 relative overflow-hidden">
            {/* Background design glow */}
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[#C4A265] opacity-5 blur-3xl pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <h2 className="cormorant text-4xl font-bold text-[#1A1410]">Send us a Message</h2>
              <p className="outfit text-sm text-[#7A6B5A] leading-relaxed font-light">
                Fill out the secure communication framework below and a Honeywell representative will engage within 2-4 business hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block outfit text-[10px] font-bold text-[#1A1410] uppercase tracking-widest mb-2">
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
                  <label className="block outfit text-[10px] font-bold text-[#1A1410] uppercase tracking-widest mb-2">
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
                  <label className="block outfit text-[10px] font-bold text-[#1A1410] uppercase tracking-widest mb-2">
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
                  <label className="block outfit text-[10px] font-bold text-[#1A1410] uppercase tracking-widest mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-premium appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239E7A3B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1rem] bg-[right_1.25rem_center] bg-no-repeat pr-10"
                  >
                    <option value="">Select inquiry category</option>
                    <option value="manufacturing">Kids Rompers / Onesies Inquiry</option>
                    <option value="manufacturing_mens">Mens T-Shirts & Polos Inquiry</option>
                    <option value="manufacturing_womens">Womens Coordinates / Lounge Inquiry</option>
                    <option value="quote">Request Custom Export Quote</option>
                    <option value="visit">Schedule Factory Unit Tour</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block outfit text-[10px] font-bold text-[#1A1410] uppercase tracking-widest mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="input-premium resize-none"
                  placeholder="Specify product requirements, fabric blends, volume demands, or target shipping timelines..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-premium-gold w-full py-4 text-xs font-semibold uppercase shadow-lg shadow-[#9E7A3B]/10 hover:shadow-[#9E7A3B]/25 transition-all"
              >
                <span>Transmit Secure Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Quick Response Notice */}
            <div className="mt-6 p-4 bg-[#fdf8ed]/60 rounded-2xl border border-[#C4A265]/20 flex items-start gap-3 relative z-10">
              <div className="bg-white p-2 rounded-xl shadow-sm border border-[#C4A265]/10">
                <Star className="w-4 h-4 text-[#9E7A3B] fill-[#9E7A3B]/20" />
              </div>
              <div className="space-y-0.5">
                <div className="outfit text-xs text-[#1A1410] font-bold">Premium SLA Engaged</div>
                <p className="outfit text-[10px] text-[#7A6B5A] leading-relaxed font-light">
                  We guarantee direct, technical correspondence from unit managers within 2-4 business hours.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Brand Promise Banner Section */}
        <section className="mt-24 pt-16 border-t border-[#C4A265]/15">
          <div className="text-center mb-12 space-y-3">
            <h2 className="cormorant text-4xl font-bold text-[#1A1410]">Our Operational Promise</h2>
            <p className="outfit text-sm text-[#7A6B5A] font-light">Experience unmatched precision from blueprint to container delivery.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-[#C4A265]/10 text-center space-y-4">
              <div className="bg-[#fdf8ed] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto border border-[#C4A265]/15 text-[#9E7A3B]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="outfit text-base font-bold text-[#1A1410] tracking-wide">Direct Turnaround</h3>
              <p className="outfit text-xs text-[#7A6B5A] leading-relaxed font-light">
                Optimized layout scheduling systems that ensure highly predictable production and shipping slots.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#C4A265]/10 text-center space-y-4">
              <div className="bg-[#fdf8ed] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto border border-[#C4A265]/15 text-[#9E7A3B]">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="outfit text-base font-bold text-[#1A1410] tracking-wide">Global Shipping Standards</h3>
              <p className="outfit text-xs text-[#7A6B5A] leading-relaxed font-light">
                Direct export corridors with fully computerized customs filings, GOTS tracking, and multi-port options.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#C4A265]/10 text-center space-y-4">
              <div className="bg-[#fdf8ed] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto border border-[#C4A265]/15 text-[#9E7A3B]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="outfit text-base font-bold text-[#1A1410] tracking-wide">Quality SLA Guarantee</h3>
              <p className="outfit text-xs text-[#7A6B5A] leading-relaxed font-light">
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