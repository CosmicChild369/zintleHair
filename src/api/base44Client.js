import { products, testimonials } from "@/data/mockData";

function sortItems(items, order = "-created_date") {
  const isDescending = order.startsWith("-");
  const field = order.replace(/^-/, "");

  return [...items].sort((a, b) => {
    const first = a[field] ?? "";
    const second = b[field] ?? "";

    if (first < second) {
      return isDescending ? 1 : -1;
    }

    if (first > second) {
      return isDescending ? -1 : 1;
    }

    return 0;
  });
}

function withLimit(items, limit) {
  return typeof limit === "number" ? items.slice(0, limit) : items;
}

function createEntityStore(items) {
  return {
    async list(order = "-created_date", limit) {
      return withLimit(sortItems(items, order), limit);
    },
    async filter(criteria = {}, order = "-created_date", limit) {
      const filtered = items.filter((item) =>
        Object.entries(criteria).every(([key, value]) => item[key] === value)
      );
      return withLimit(sortItems(filtered, order), limit);
    },
  };
}

export const base44 = {
  entities: {
    Product: createEntityStore(products),
    Testimonial: createEntityStore(testimonials),
  },
};