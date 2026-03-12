import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ subtitle, title, description, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      {subtitle && (
        <p
          className={`mb-2 text-sm font-medium uppercase tracking-[0.15em] ${
            light ? "text-pink-300" : "text-amber-600"
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`mb-4 font-serif text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-pink-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto max-w-2xl text-base leading-relaxed ${
            light ? "text-pink-200" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mx-auto mt-4 h-1 w-16 rounded-full ${
          light ? "bg-amber-400" : "bg-gradient-to-r from-pink-400 to-amber-400"
        }`}
      />
    </motion.div>
  );
}