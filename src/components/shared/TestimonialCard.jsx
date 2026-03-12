import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative rounded-2xl border border-pink-100/50 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <Quote className="absolute right-4 top-4 h-8 w-8 text-pink-200" />
      <div className="mb-3 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"
            }`}
          />
        ))}
      </div>
      <p className="mb-4 text-sm italic leading-relaxed text-gray-600">"{testimonial.review}"</p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-600 text-sm font-semibold text-white">
          {testimonial.customer_name?.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-pink-950">{testimonial.customer_name}</p>
          {testimonial.location && <p className="text-xs text-gray-400">{testimonial.location}</p>}
        </div>
      </div>
    </motion.div>
  );
}