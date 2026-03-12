import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Brush,
  Droplets,
  Moon,
  Scissors,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const careTips = [
  {
    icon: Droplets,
    title: "Washing Your Wig",
    tips: [
      "Wash every 7-10 wears or when product builds up",
      "Use lukewarm water — never hot water",
      "Apply a gentle sulphate-free shampoo",
      "Gently squeeze — never twist or wring",
      "Rinse thoroughly with cool water",
      "Apply a lightweight conditioner to the ends",
    ],
  },
  {
    icon: Wind,
    title: "Drying",
    tips: [
      "Gently blot with a soft towel",
      "Place on a wig stand to air dry",
      "Avoid direct sunlight while drying",
      "Do not use a blow dryer on high heat",
      "Low heat setting is acceptable for human hair blend",
    ],
  },
  {
    icon: Brush,
    title: "Brushing & Styling",
    tips: [
      "Always use a wide-tooth comb or wig brush",
      "Start detangling from the ends, working upwards",
      "Never brush when the wig is wet",
      "Use heat protectant spray before any heat styling",
      "Low to medium heat settings only",
    ],
  },
  {
    icon: Moon,
    title: "Storage",
    tips: [
      "Store on a wig stand or mannequin head",
      "Keep away from direct sunlight and heat",
      "Cover with a silk or satin bag when not in use",
      "Never store in a plastic bag — it can cause tangling",
      "Keep in a cool, dry place",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Protecting the Lace",
    tips: [
      "Be gentle when applying and removing the wig",
      "Use a lace-friendly adhesive or wig tape",
      "Clean adhesive residue gently after each use",
      "Avoid pulling or tugging on the lace front",
      "Trim the lace carefully along the hairline",
    ],
  },
  {
    icon: Scissors,
    title: "Extending Wig Life",
    tips: [
      "Rotate between 2-3 wigs if possible",
      "Avoid sleeping in your wig",
      "Use oil-free products to prevent buildup",
      "Deep condition once a month",
      "Handle with clean hands to avoid oil transfer",
    ],
  },
];

const donts = [
  "Never use regular shampoo — it strips the fibres",
  "Don't expose to chlorinated or salt water",
  "Avoid excessive heat from curling irons",
  "Don't colour or bleach without professional advice",
  "Never store wet — always dry completely first",
];

export default function WigCare() {
  return (
    <div>
      <section className="bg-gradient-to-br from-pink-50 via-white to-amber-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Expert Advice"
            title="Wig Care Tips"
            description="Keep your human hair blend wig looking fabulous with our expert care guide. Proper care means longer-lasting beauty!"
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {careTips.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-pink-100 bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-pink-50">
                  <section.icon className="h-6 w-6 text-pink-700" />
                </div>
                <h3 className="mb-4 font-serif text-xl font-semibold text-pink-950">{section.title}</h3>
                <ul className="space-y-2.5">
                  {section.tips.map((tip, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pink-50/50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-100 bg-white p-8 shadow-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-pink-950">Things to Avoid</h3>
            </div>
            <ul className="space-y-3">
              {donts.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <span className="text-xs font-bold text-red-500">✕</span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-900 via-pink-800 to-pink-900 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white">Need Personalised Care Advice?</h2>
          <p className="mb-8 text-pink-200">
            Every wig is different. Chat with us on WhatsApp for care advice tailored to your
            specific wig.
          </p>
          <a
            href="https://wa.me/27682650680?text=Hi%20Zintle!%20I%20need%20some%20wig%20care%20advice."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-pink-900 hover:bg-pink-50"
          >
            Get Care Advice
          </a>
        </div>
      </section>
    </div>
  );
}