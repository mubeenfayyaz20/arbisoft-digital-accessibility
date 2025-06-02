"use client";
import React from "react";
import { useRouter } from "next/navigation";

const UseClient = () => {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.back()} className="back-link">
      Go back
      </button>
    </>
  );
};

export default UseClient;
