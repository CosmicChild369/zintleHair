import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categoryLabels = {
  straight: "Straight",
  curly: "Curly",
  body_wave: "Body Wave",
  bob: "Bob",
  colored: "Coloured",
  custom: "Custom",
};

export default function ProductCard({ product, index = 0 }) {
  const whatsappMsg = `Hi Zintle! I'm interested in the "${product.name}" (R${product.price}). Is it available?`;
  const whatsappLink = `https://wa.me/27682650680?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border border-pink-100/50 bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {product.category && (
          <Badge className="absolute left-3 top-3 border-0 bg-white/90 text-xs text-pink-800 backdrop-blur-sm">
            {categoryLabels[product.category] || product.category}
          </Badge>
        )}
        {product.length && (
          <Badge className="absolute right-3 top-3 border-0 bg-pink-800/80 text-xs text-white backdrop-blur-sm">
            {product.length}
          </Badge>
        )}
        {!product.in_stock && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60">
            <span className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white">
              Sold Out
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="mb-1 font-serif text-lg font-semibold text-pink-950">{product.name}</h3>
        <p className="line-clamp-2 mb-3 text-sm text-gray-500">{product.description}</p>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1">
            <Tag className="h-4 w-4 text-amber-600" />
            <span className="font-serif text-xl font-bold text-pink-900">
              R{product.price?.toLocaleString()}
            </span>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 hover:shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            Order
          </a>
        </div>
      </div>
    </motion.div>
  );
}