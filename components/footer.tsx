"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import {
  Mail,
  Phone,
  Bell,
  MapPin,
  Linkedin,
  Instagram,
  ArrowUp,
  Send,
} from "lucide-react";
const logo =
  "https://oskiqdthpejzihtjybwc.supabase.co/storage/v1/object/public/kola-website%20images/kola-logo.png";
// type FooterLinksType = {
//   [key: string]: string[];
// };

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const footerLinks: { [key: string]: { name: string; href: string }[] } = {
    Services: [
      { name: "Website Development", href: "#services" },
      { name: "AI Apps & Tools", href: "#services" },
      { name: "Search Engine Optimization", href: "#services" },
      { name: "Performance Marketing", href: "#services" },
      { name: "Content Creation", href: "#services" },
      { name: "Social Media Marketing", href: "#services" },
      { name: "App Development", href: "#services" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Contact Us", href: "#contact" },
    ],
  };

  const socialLinks: {
    icon: React.ElementType;
    href: string;
    label: string;
  }[] = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/kola-communications/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/p/DG5c5GTPtgh/?utm_source=ig_web_button_share_sheet&igsh=MWxod2s1NmM3aGs5NA==",
      label: "Instagram",
    },
  ];


  return (
    <footer className="relative bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section - Company Info */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-gray-800 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Company Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white">
                  <Image
                    src={logo}
                    alt="kola communications"
                    className="max-w-full max-h-full"
                    width={56}
                    height={56}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl text-white">Kola Communications</h2>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Experience the future of business with intelligent, scalable
              automation solutions tailored to your needs.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:business@kolacommunications.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">business@kolacommunications.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+918108969630"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91-8108969630</span>
              </a>
              <a
                href="https://maps.app.goo.gl/oSEbseq5kjWGG8eJ7?g_st=ipc"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">
                  C42, Modi Nagar CHS, Opposite Wanjawadi, Kandivali West,
                  Mumbai - 400067
                </span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center border border-gray-800 rounded-xl p-6 space-y-8">
            <h4 className="text-white font-semibold text-base sm:text-lg uppercase tracking-wider text-center">
              Follow Us
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-[60px] w-[60px] rounded-lg border border-gray-700 flex items-center justify-center 
                 hover:bg-gradient-to-r hover:from-[#6953F5] hover:to-[#17142E] 
                 hover:border-transparent transform hover:scale-110 
                 transition-all duration-300 shadow-md"
                >
                  <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Links + Social */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-200 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 transition-all duration-1000 delay-400 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-gray-400 text-sm mb-6 md:mb-0">
            © {new Date().getFullYear()} Kola Communications. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-2">
            <h2 className="text-sm sm:text-base text-gray-400">
              Developed by{" "}
              <a
                className="font-medium text-white hover:text-purple-400 transition-colors duration-300"
                rel="noopener noreferrer"
                target="_blank"
                href="https://kolacommunications.com"
              >
                Kola Communications
              </a>
            </h2>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#6953F5] to-[#17142E] hover:from-[#7C60FC] hover:to-[#2D2850] rounded-lg flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 z-50"
        onClick={scrollToTop}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </div>
    </footer>
  );
};

export default Footer;
