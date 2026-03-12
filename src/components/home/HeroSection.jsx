import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-amber-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[70vh] items-center gap-8 py-12 lg:grid-cols-2 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-800">
              <Sparkles className="h-4 w-4" />
              Premium Human Hair Blend
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-pink-950 sm:text-5xl lg:text-6xl">
              Confidence Starts{" "}
              <span className="bg-gradient-to-r from-pink-700 to-amber-600 bg-clip-text text-transparent">
                With Your Crown
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-gray-600 sm:text-xl lg:mx-0">
              Discover our exquisite collection of human hair blend front wigs — crafted for
              natural beauty, effortless style, and everyday confidence.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                to={createPageUrl("Shop")}
                className="flex items-center justify-center gap-2 rounded-full bg-pink-800 px-8 py-4 text-base font-medium text-white hover:bg-pink-900 hover:shadow-xl hover:shadow-pink-200"
              >
                <ShoppingBag className="h-5 w-5" />
                Shop Collection
              </Link>
              <a
                href="https://wa.me/27682650680?text=Hi%20Zintle!%20I'd%20like%20to%20know%20more%20about%20your%20wigs."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-pink-800 px-8 py-4 text-base font-medium text-pink-800 hover:bg-pink-800 hover:text-white"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-pink-200/50">
              <img
                src={heroImage}
                alt="Beautiful woman wearing a Zintle front wig"
                className="h-[400px] w-full object-cover sm:h-[500px] lg:h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-pink-900">500+</p>
                <p className="text-xs text-gray-500">Happy Customers</p>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-amber-600">★ 4.9</p>
                <p className="text-xs text-gray-500">Average Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}