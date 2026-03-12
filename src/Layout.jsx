import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MessageCircle, Phone, MapPin, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { createPageUrl } from "@/utils";

const navLinks = [
  { name: "Home", page: "Home" },
  { name: "Shop", page: "Shop" },
  { name: "About Us", page: "About" },
  { name: "Wig Care", page: "WigCare" },
  { name: "Contact", page: "Contact" },
];

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPageName]);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-pink-900 via-pink-800 to-pink-900 px-4 py-2 text-xs text-white sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="tel:0682650680" className="flex items-center gap-1 hover:text-pink-200">
              <Phone className="h-3 w-3" />
              <span>068 265 0680</span>
            </a>
            <span className="hidden items-center gap-1 sm:flex">
              <MapPin className="h-3 w-3" />
              Katlehong, South Africa
            </span>
          </div>
          <a
            href="https://wa.me/27682650680?text=Hi%20Zintle!%20I'm%20interested%20in%20your%20wigs."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-pink-200"
          >
            <MessageCircle className="h-3 w-3" />
            WhatsApp Us
          </a>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <Link to={createPageUrl("Home")} className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-none tracking-tight text-pink-900 sm:text-2xl">
                  Zintle
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-amber-700 sm:text-xs">
                  Hair Front Wigs
                </span>
              </div>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`group relative text-sm font-medium ${
                    currentPageName === link.page
                      ? "text-pink-800"
                      : "text-gray-600 hover:text-pink-800"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-pink-700 transition-all duration-300 ${
                      currentPageName === link.page ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
              <a
                href="https://wa.me/27682650680?text=Hi%20Zintle!%20I'd%20like%20to%20order%20a%20wig."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-pink-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-900 hover:shadow-lg hover:shadow-pink-200"
              >
                <ShoppingBag className="h-4 w-4" />
                Order Now
              </a>
            </div>

            <button
              type="button"
              className="p-2 text-pink-900 md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t bg-white md:hidden"
            >
              <div className="space-y-1 px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                      currentPageName === link.page
                        ? "bg-pink-50 text-pink-800"
                        : "text-gray-600 hover:bg-pink-50 hover:text-pink-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="https://wa.me/27682650680?text=Hi%20Zintle!%20I'd%20like%20to%20order%20a%20wig."
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block rounded-xl bg-pink-800 px-4 py-3 text-center text-sm font-medium text-white"
                >
                  <span className="flex items-center justify-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Order Now on WhatsApp
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>{children}</main>

      <footer className="bg-pink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <h3 className="font-serif mb-2 text-2xl font-bold">Zintle</h3>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-amber-400">Hair Front Wigs</p>
              <p className="text-sm leading-relaxed text-pink-200">
                Premium human hair blend front wigs that make you feel confident and beautiful every day.
              </p>
            </div>
            <div>
              <h4 className="font-serif mb-4 text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="block text-sm text-pink-200 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-serif mb-4 text-lg font-semibold">Contact Us</h4>
              <div className="space-y-3 text-sm text-pink-200">
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  237 Dhlamini Street, Mavimbela Section, Katlehong 1431, South Africa
                </p>
                <a href="tel:0682650680" className="flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-amber-400" />
                  068 265 0680
                </a>
                <a
                  href="https://wa.me/27682650680"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-amber-400" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-pink-800 pt-8 text-center">
            <p className="text-sm text-pink-300">
              © {new Date().getFullYear()} Zintle Hair Front Wigs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/27682650680?text=Hi%20Zintle!%20I'm%20interested%20in%20your%20wigs."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}