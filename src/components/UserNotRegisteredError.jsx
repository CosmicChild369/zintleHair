import React from "react";

export default function UserNotRegisteredError() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50 px-4">
      <div className="max-w-md rounded-3xl bg-white p-8 text-center shadow-soft">
        <h1 className="mb-3 font-serif text-3xl font-bold text-pink-950">Account not registered</h1>
        <p className="text-gray-500">
          This demo clone uses local data only, so sign-in is currently disabled.
        </p>
      </div>
    </div>
  );
}