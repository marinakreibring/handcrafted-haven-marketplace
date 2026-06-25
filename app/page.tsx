"use client";

import { useState } from "react";
import Image from "next/image";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const featuredProducts = [
  {
    id: 1,
    name: "Handmade Ceramic Vase",
    price: "$45",
    image: "/images/featured-product1.webp",
    seller: "Emily Carter",
    location: "Portland, Oregon",
    description:
      "Beautiful handcrafted ceramic vase made with natural clay and glazed by hand. Perfect for modern or rustic home decoration.",
  },
  {
    id: 2,
    name: "Knitted Wool Blanket",
    price: "$68",
    image: "/images/featured-product2.webp",
    seller: "Sophia Bennett",
    location: "Vancouver, Canada",
    description:
      "Soft premium wool blanket knitted entirely by hand using traditional techniques. Designed for warmth, comfort, and timeless style.",
  },
  {
    id: 3,
    name: "Wooden Artisan Bowl",
    price: "$32",
    image: "/images/featured-product3.webp",
    seller: "Michael Brown",
    location: "Austin, Texas",
    description:
      "Hand-carved wooden bowl crafted from sustainable walnut wood. Each piece is unique and finished with natural oils.",
  },
];

export default function Home() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <main className="container-custom">
      <Navbar />

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl mb-6 leading-tight">
            Discover Authentic Handmade Treasures
          </h2>

          <p className="text-lg mb-8 max-w-md">
            Support talented artisans and explore handcrafted products made
            with care, creativity, and passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button><a href="/shop">Shop Now</a></button>
            <button><a href="/seller-form">Become a Seller</a></button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image">
          <Image
            src="/images/hero.jpg"
            alt="Handcrafted embroidery"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section">
        <div className="section-header">
          <h3 className="section-title">
            Featured Products
          </h3>

          <p className="section-description">
            Explore some of our community’s favorite handcrafted creations,
            carefully made by talented artisans from around the world.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => {
            const isExpanded = expandedCard === product.id;

            return (
              <div
                key={product.id}
                className={`
                  content-card
                  ${isExpanded
                    ? "lg:col-span-2 scale-[1.015]"
                    : ""
                  }
                `}
              >   
                <div
                  className={`
                    grid overflow-hidden
                    transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isExpanded
                        ? "md:grid-cols-2"
                        : "grid-cols-1"
                    }
                  `}
                >
                  {/* IMAGE */}
                  <div
                    className={`
                      relative w-full overflow-hidden
                      transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isExpanded
                          ? "h-[520px]"
                          : "h-72"
                      }
                    `}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`
                        object-cover
                        transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${
                          isExpanded
                            ? "scale-105"
                            : "hover:scale-110"
                        }
                      `}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-semibold mb-2">
                        {product.name}
                      </h4>

                      <p className="text-amber-700 font-bold text-lg mb-4">
                        {product.price}
                      </p>

                      <div
                        className={`
                          overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${
                            isExpanded
                              ? "max-h-[500px] opacity-100 translate-y-0"
                              : "max-h-0 opacity-0 -translate-y-2"
                          }
                        `}
                      >
                        <div className="pt-2">
                          <div className="mb-4">
                            <p className="font-semibold text-lg">
                              Seller
                            </p>

                            <p className="text-gray-700">
                              {product.seller}
                            </p>

                            <p className="text-sm text-gray-500">
                              {product.location}
                            </p>
                          </div>

                          <div className="mb-6">
                            <p className="font-semibold text-lg mb-2">
                              Product Details
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                              {product.description}
                            </p>
                          </div>

                          <div className="flex gap-3 flex-wrap">
                            <button className="bg-amber-700 text-white px-5 py-3 rounded-full hover:bg-amber-800 transition-all duration-300 hover:scale-105">
                              Add to Cart
                            </button>

                            <button className="border border-black px-5 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
                              Contact Seller
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleCard(product.id)}
                      className="
                        w-full bg-black text-white py-3 rounded-full
                        hover:bg-amber-700
                        transition-all duration-500
                        hover:scale-[1.02]
                        active:scale-[0.98]
                        mt-6
                      "
                    >
                      {isExpanded
                        ? "Close Details"
                        : "View Product"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}