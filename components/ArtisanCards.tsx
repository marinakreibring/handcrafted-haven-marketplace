"use client";

import { useState } from "react";
import Image from "next/image";

type Artisan = {
  id: number;
  name: string;
  craft: string;
  location: string;
  bio: string;
  image_url: string;
};

export default function ArtisanCards({
  artisans,
}: {
  artisans: Artisan[];
}) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
      {artisans.map((artisan) => {
        const isExpanded = expandedCard === artisan.id;

        return (
          <div
            key={artisan.id}
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
                      ? "h-[520px]"
                      : "h-72"
                  }
                `}
              >
                <Image
                  src={artisan.image_url}
                  alt={artisan.name}
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
                    {artisan.name}
                  </h4>

                  <p className="text-amber-700 font-bold text-lg mb-2">
                    {artisan.craft}
                  </p>

                  <p className="text-gray-500 mb-4">
                    {artisan.location}
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
                          About the Artisan
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                          {artisan.bio}
                        </p>
                      </div>

                      <div className="flex gap-3 flex-wrap">
                        <button>
                          View Products
                        </button>

                        <button>
                          Contact Artisan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleCard(artisan.id)}
                  className="w-full mt-6"
                >
                  {isExpanded
                    ? "Close Details"
                    : "View Profile"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}