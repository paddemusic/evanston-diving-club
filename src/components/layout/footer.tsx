import Link from "next/link";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/coaches", label: "Our Coaches" },
    { href: "/courses", label: "Programs" },
  ];

  const resourceLinks = [
    { href: "/schedule", label: "Schedule" },
    { href: "/gallery", label: "Gallery" },
    { href: "/faq", label: "FAQ" },
    { href: "/coach-login", label: "Coach Portal" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#4E2A84]">
              Evanston Diving Club
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Illinois' premier year-round diving program training champions from beginners to Olympic contenders.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/evanstondivingclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4E2A84] hover:text-[#4E2A84]/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-[#4E2A84]">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-600 hover:text-[#4E2A84] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-[#4E2A84]">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-600 hover:text-[#4E2A84] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-[#4E2A84]">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                <Mail className="w-5 h-5 text-[#4E2A84] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:cara.evanstondiving@gmail.com"
                  className="hover:text-[#4E2A84] transition-colors break-all"
                >
                  cara.evanstondiving@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                <Phone className="w-5 h-5 text-[#4E2A84] mt-0.5 flex-shrink-0" />
                <a href="tel:+18478402530" className="hover:text-[#4E2A84] transition-colors">(847) 840-2530</a>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                <MapPin className="w-5 h-5 text-[#4E2A84] mt-0.5 flex-shrink-0" />
                <span>Northwestern University<br />Evanston, IL 60208</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-600">
            <p>© {currentYear} Evanston Diving Club. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}