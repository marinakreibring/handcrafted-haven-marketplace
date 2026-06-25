"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: string;
  seller: string;
  description: string;
  image_url: string;
  rating: number | null;
  latest_review: string | null;
  latest_reviewer: string | null;
};

export default function ProductCards({
  products,
}: {
  products: Product[];
}) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
      {products.map((product) => {
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
                transition-all duration-700
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
                  transition-all duration-700
                  ${
                    isExpanded
                      ? "h-[550px]"
                      : "h-72"
                  }
                `}
              >
                <Image
                  src={product.image_url}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`
                    object-cover
                    transition-transform duration-700
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
                    {product.title}
                  </h4>

                  <p className="text-amber-700 font-bold text-lg mb-2">
                    {product.price}
                  </p>

                  <p className="text-gray-500 mb-4">
                    {product.seller}
                  </p>

                  <div
                    className={`
                      overflow-hidden transition-all duration-700
                      ${
                        isExpanded
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div className="pt-2">
                      <div className="mb-6">
                        <p className="font-semibold text-lg mb-2">
                          Product Details
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex gap-3 flex-wrap">
                        <button>
                          Add to Cart
                        </button>

                        <button>
                          <a
                            href={`/review-form?productId=${product.id}`}
                          >
                            Leave Review
                          </a>
                        </button>
                      </div>

                      <div className="mt-4">
                        {product.rating ? (
                          <>
                            <p className="text-yellow-500 text-lg">
                              {"⭐".repeat(Math.round(product.rating))}
                            </p>

                            <p className="text-sm text-gray-500">
                              rated {product.rating} / 5
                            </p>
                          </>
                        ) : (
                          <p className="text-sm text-gray-500">
                            No reviews yet
                          </p>
                        )}    
                        <div className="mt-2 border-t pt-2">
                          {product.latest_review && (
                          <>
                          <p className="text-sm italic text-gray-700">
                          "{product.latest_review}"
                          </p>

                          <p className="text-xs text-gray-500 mt-1">
                             — {product.latest_reviewer}
                          </p>
                        </>
                        )}
                      </div>

                      </div>

                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleCard(product.id)}
                  className="w-full mt-4"
                >
                  {isExpanded
                    ? "Close Details"
                    : "View Details"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}