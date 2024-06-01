"use client";
import { ArrowUp } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <button
        className={`fixed bottom-5 right-5 p-3 text-white font-semibold bg-gray-800 rounded shadow-md transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToTop}
      >
        <span className="flex items-center gap-2">
          Scroll to Top
          <ArrowUp />
        </span>
      </button>
    </>
  );
};

export default ScrollToTopBtn;
