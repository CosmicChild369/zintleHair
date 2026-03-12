import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Gem, Headphones, Shield, Truck } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { createPageUrl } from "@/utils";
import HeroSection from "@/components/home/HeroSection";
import ProductCard from "@/components/shared/ProductCard";
import SectionHeader from "@/components/shared/SectionHeader";
import TestimonialCard from "@/components/shared/TestimonialCard";

const features = [
  { icon: Gem, title: "Premium Quality", desc: "Human hair blend for natural look & feel" },
  { icon: Shield, title: "Secure Lace Front", desc: "Invisible hairline with HD lace" },
  { icon: Truck, title: "Fast Delivery", desc: "Quick shipping across South Africa" },
  { icon: Headphones, title: "Expert Support", desc: "Styling advice & after-care support" },
];

export default function Home() {
  const { data: products = [] } = useQuery({
    queryKey: ["featured-products"],
    queryFn: () => base44.entities.Product.filter({ is_featured: true }, "-created_date", 6),
  });

  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => base44.entities.Testimonial.list("-created_date", 4),
  });

  return (
    <div>
      <HeroSection heroImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b267b85b530c9cc1b21985/3487c8cba_generated_49781524.png" />

      <section className="border-b border-pink-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 transition-colors group-hover:bg-pink-100">
                  <feat.icon className="h-6 w-6 text-pink-700" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-pink-950">{feat.title}</h3>
                <p className="text-xs text-gray-400">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-pink-50/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Collection"
            title="Featured Wigs"
            description="Handpicked styles from our premium human hair blend collection. Each wig is crafted for natural beauty and lasting confidence."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to={createPageUrl("Shop")}
              className="inline-flex items-center gap-2 rounded-full bg-pink-800 px-8 py-3.5 font-medium text-white hover:bg-pink-900 hover:shadow-xl hover:shadow-pink-200"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-pink-900 via-pink-800 to-pink-900 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-amber-400 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-pink-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-4 font-serif text-3xl font-bold text-white sm:text-4xl">
              Can't Decide? Let Us Help!
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-pink-200">
              Chat with us on WhatsApp and we'll help you find the perfect wig for your face shape,
              lifestyle, and budget.
            </p>
            <a
              href="https://wa.me/27682650680?text=Hi%20Zintle!%20I%20need%20help%20choosing%20the%20perfect%20wig."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-pink-900 hover:bg-pink-50 hover:shadow-xl"
            >
              Chat With Us Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-pink-50/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Love Notes"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from the beautiful women who trust Zintle for their crown."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}