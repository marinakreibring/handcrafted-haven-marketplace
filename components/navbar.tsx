"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between section-spacing mb-12">
      
      {/* LOGO */}
      <Link href="/">
        <h1 className="nav-link text-2xl font-bold">
          Handcrafted Haven
        </h1>
      </Link>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-6 items-center">

        <Link
          href="/"
          className={`nav-link ${
            pathname === "/" ? "active" : ""
          }`}
        >
          Home
        </Link>

        <Link
          href="/shop"
          className={`nav-link ${
            pathname === "/shop" ? "active" : ""
          }`}
        >
          Shop
        </Link>

        <Link
          href="/artisans"
          className={`nav-link ${
            pathname === "/artisans" ? "active" : ""
          }`}
        >
          Artisans
        </Link>

        <Link
          href="/about"
          className={`nav-link ${
            pathname === "/about" ? "active" : ""
          }`}
        >
          About
        </Link>

        {/* BUTTON */}
        <button>
          Sign In
        </button>
      </div>
    </nav>
  );
}