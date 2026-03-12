import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Users } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const values = [
  {
    icon: Heart,
    title: "Made With Love",
    desc: "Every wig is carefully selected and quality-checked to ensure you receive nothing but the best.",
  },
  {
    icon: Users,
    title: "Customer First",
    desc: "We believe in building lasting relationships. Your satisfaction and confidence drive everything we do.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Our human hair blend wigs combine the best of natural and synthetic fibres for unmatched quality and longevity.",
  },
  {
    icon: Sparkles,
    title: "Empowering Beauty",
    desc: "We're not just selling wigs — we're helping women feel confident, beautiful, and unstoppable every single day.",
  },
];

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-pink-50 via-white to-amber-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Story"
            title="About Zintle Hair Front Wigs"
            description="Born from a passion for beauty and a commitment to empowering women across South Africa."
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto text-center"
          >
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Zintle Hair Front Wigs was born from a simple belief: every woman deserves to feel
              beautiful, confident, and empowered. Based in Katlehong, Gauteng, we've grown from a
              small home business into a trusted name in premium human hair blend wigs.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Our human hair blend wigs are crafted from a carefully curated mix of real human hair
              and premium synthetic fibres. This unique combination gives you the natural look and
              feel of human hair with the durability and easy maintenance of high-quality synthetic
              fibres — all at a price that won't break the bank.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Whether you're looking for a sleek straight style, bouncy curls, or a bold colour
              statement, we have something for every woman. We also offer personalised styling
              advice via WhatsApp to help you find your perfect match.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-pink-50/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Our Values"
            description="The principles that guide everything we do at Zintle."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-pink-100/50 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50">
                  <value.icon className="h-7 w-7 text-pink-700" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-pink-950">{value.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-pink-900 via-pink-800 to-pink-900 py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-1/3 top-0 h-72 w-72 rounded-full bg-amber-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white">Ready to Find Your Perfect Wig?</h2>
          <p className="mb-8 text-pink-200">
            Chat with us on WhatsApp — we'd love to help you look and feel your best.
          </p>
          <a
            href="https://wa.me/27682650680?text=Hi%20Zintle!%20I'd%20like%20to%20learn%20more%20about%20your%20wigs."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-pink-900 hover:bg-pink-50 hover:shadow-xl"
          >
            Let's Chat
          </a>
        </div>
      </section>
    </div>
  );
}