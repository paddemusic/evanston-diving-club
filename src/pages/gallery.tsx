import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/envato-labs-image-edit-6.png", alt: "Diver performing aerial maneuver" },
    { src: "/envato-labs-image-edit-4.png", alt: "Springboard diving technique" },
    { src: "/ChatGPT_Image_Sep_24_2025_at_09_39_40_PM.png", alt: "Platform diving session" },
    { src: "/ChatGPT_Image_Sep_24_2025_at_09_39_43_PM.png", alt: "Training session at pool" },
    { src: "/ChatGPT_Image_Sep_24_2025_at_09_39_48_PM.png", alt: "Competitive diving event" },
    { src: "/img-2292_087193-tsml-large.jpg", alt: "Diver mid-dive" },
    { src: "/img-2293_033634-tsml-large.jpg", alt: "Diving competition" },
    { src: "/img-2297_012542-tsml-large.jpg", alt: "Training facility" },
    { src: "/img-2300_011970-tsml-large.jpg", alt: "Diving team practice" },
  ];

  return (
    <Layout>
      <SEO
        title="Gallery - Evanston Diving Hub"
        description="Explore our collection of diving moments, training sessions, and achievements at Evanston Diving Hub's Northwestern diving program."
      />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-card p-8 rounded-lg">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4E2A84] text-white text-sm font-medium mb-4 sm:mb-6">
              <Camera className="w-4 h-4" />
              Photo Gallery
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4E2A84] mb-4 sm:mb-6 px-4">
              Dive Into Our World
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Capturing excellence, dedication, and the spirit of Northwestern diving through memorable moments
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading={index < 6 ? "eager" : "lazy"}
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4E2A84]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#4E2A84] py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Ready to Create Your Own Moments?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 px-4">
            Join our diving community and be part of the next great chapter
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#4E2A84] rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Explore Programs
          </Link>
        </div>
      </section>
    </Layout>
  );
}