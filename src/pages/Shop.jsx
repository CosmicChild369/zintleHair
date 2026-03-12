import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { base44 } from "@/api/base44Client";
import ProductCard from "@/components/shared/ProductCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { Input } from "@/components/ui/input";

const categories = [
  { value: "all", label: "All Styles" },
  { value: "straight", label: "Straight" },
  { value: "curly", label: "Curly" },
  { value: "body_wave", label: "Body Wave" },
  { value: "bob", label: "Bob" },
  { value: "colored", label: "Coloured" },
  { value: "custom", label: "Custom" },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn: () => base44.entities.Product.list("-created_date"),
  });

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <section className="bg-gradient-to-br from-pink-50 via-white to-amber-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Collection"
            title="Shop All Wigs"
            description="Browse our full collection of premium human hair blend front wigs. Each piece is crafted for natural beauty and lasting style."
          />

          <div className="mx-auto mb-4 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search wigs..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="py-6 pl-12 text-base"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveCategory(category.value)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? "bg-pink-800 text-white shadow-lg shadow-pink-200"
                    : "border border-pink-100 bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-800"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-96 animate-pulse rounded-2xl bg-pink-50" />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
              <SlidersHorizontal className="mx-auto mb-4 h-12 w-12 text-pink-300" />
              <h3 className="mb-2 font-serif text-xl text-pink-950">No wigs found</h3>
              <p className="text-gray-400">Try a different search or category</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-pink-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-pink-950 sm:text-3xl">
            Looking for Something Specific?
          </h2>
          <p className="mb-6 text-gray-500">
            We can source custom wigs in any length, colour, or style. Send us a message and
            we'll make it happen!
          </p>
          <a
            href="https://wa.me/27682650680?text=Hi%20Zintle!%20I'm%20looking%20for%20a%20custom%20wig."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-3.5 font-medium text-white hover:bg-green-600 hover:shadow-xl"
          >
            Request Custom Order
          </a>
        </div>
      </section>
    </div>
  );
}