import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/schedule", label: "Schedule" },
    { href: "/coaches", label: "Coaches" },
    { href: "/courses", label: "Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
  ];

  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 group"
            aria-label="Evanston Diving Club Home"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4E2A84] group-hover:text-[#4E2A84]/80 transition-colors">
              Evanston Diving Club
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 xl:px-4 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-[#4E2A84] text-white shadow-sm"
                    : "text-gray-700 hover:bg-[#4E2A84]/10 hover:text-[#4E2A84]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://elsmoreswim.com/collections/evanston-diving-club"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-2 rounded-md text-sm font-medium bg-[#4E2A84] text-white hover:bg-[#684C96] transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Shop Merch
            </a>
            <a
              href="https://user.sportngin.com/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-2 rounded-md text-sm font-medium bg-white text-[#4E2A84] border-2 border-[#4E2A84] hover:bg-[#4E2A84] hover:text-white transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Member Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#4E2A84] hover:bg-[#4E2A84]/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 space-y-1 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-[#4E2A84] text-white"
                    : "text-gray-700 hover:bg-[#4E2A84]/10 hover:text-[#4E2A84]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://elsmoreswim.com/collections/evanston-diving-club"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 rounded-md text-base font-medium bg-[#4E2A84] text-white hover:bg-[#684C96] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop Merch
              </span>
            </a>
            <a
              href="https://user.sportngin.com/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 rounded-md text-base font-medium bg-white text-[#4E2A84] border-2 border-[#4E2A84] hover:bg-[#4E2A84] hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Member Login
              </span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}