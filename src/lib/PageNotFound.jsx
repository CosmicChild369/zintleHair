import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-white to-amber-50 px-4">
      <div className="max-w-md text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">404</p>
        <h1 className="mb-4 font-serif text-4xl font-bold text-pink-950">Page not found</h1>
        <p className="mb-8 text-gray-500">The page you are looking for does not exist or has been moved.</p>
        <Link
          to="/"
          className="inline-flex rounded-full bg-pink-800 px-6 py-3 font-medium text-white hover:bg-pink-900"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}