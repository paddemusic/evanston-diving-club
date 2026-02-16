// Sync Trigger: 2026-02-15 00:14:30 UTC
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  UserPlus,
  Activity,
  Mail,
  Target,
} from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <SEO />
      {/* Hero Section - Northwestern Brand Guidelines */}
      <section className="relative min-h-screen flex items-center">
        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center z-10">
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <div className="mb-3 sm:mb-4 h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center bg-[#4E2A84]/10 backdrop-blur-sm rounded-full border-2 border-[#4E2A84]/30">
              <Image
                src="/envato-labs-image-edit-6.png"
                alt="Evanston Diving Club Logo"
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                priority
              />
            </div>
            <Badge
              variant="secondary"
              className="bg-[#4E2A84] hover:bg-[#684C96] text-white border-[#4E2A84]/30 px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base md:text-lg font-semibold flex items-center gap-2"
            >
              <Activity className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Illinois Premier Year-Round Program</span>
              <span className="sm:hidden">Premier Year-Round Program</span>
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-[#4E2A84] drop-shadow-sm px-4">
            Evanston Diving Club
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto text-[#1f2937] leading-relaxed px-4">
            Train in Illinois top facility with{" "}
            <span className="text-[#4E2A84] font-bold">Olympic-level coaching</span>.
            From beginners taking their first dive to international contenders chasing
            podiums—every athlete receives{" "}
            <span className="text-[#4E2A84] font-bold">individualized training</span>{" "}
            tailored to their goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-[#4E2A84] hover:bg-[#684C96] text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              asChild
            >
              <Link href="/courses" className="flex items-center justify-center gap-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                Explore Programs
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#4E2A84] text-[#4E2A84] bg-white/80 backdrop-blur-sm hover:bg-[#4E2A84] hover:text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              asChild
            >
              <a
                href="mailto:cara.evanstondiving@gmail.com"
                className="flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Email Us
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#4E2A84] text-[#4E2A84] bg-white/80 backdrop-blur-sm hover:bg-[#4E2A84] hover:text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              asChild
            >
              <a
                href="https://elsmoreswim.com/collections/evanston-diving-club"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop Merch
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Practice Hours */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="glass-card border border-gray-200 shadow-2xl overflow-hidden">
              <CardHeader className="text-center glass-card p-6 sm:p-8 border-b border-gray-200">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 font-bold text-[#4E2A84]">
                  <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-[#4E2A84]" />
                  PRACTICE HOURS
                </CardTitle>
                <p className="text-[#1f2937] text-base sm:text-lg">
                  Train with Illinois best diving coaches
                </p>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-4 sm:p-6 bg-purple-50 rounded-xl border border-[#4E2A84]/20 shadow-sm">
                      <span className="font-bold text-lg sm:text-xl text-[#4E2A84]">
                        Sunday:
                      </span>
                      <span className="text-[#4E2A84] font-semibold text-base sm:text-lg bg-[#4E2A84]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#4E2A84]/20">
                        Sunday Off
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-4 sm:p-6 bg-[#4E2A84]/5 rounded-xl border-2 border-[#4E2A84]/30 shadow-md">
                      <span className="font-bold text-lg sm:text-xl text-[#4E2A84]">
                        Mon-Thu:
                      </span>
                      <span className="text-[#4E2A84] font-bold text-lg sm:text-xl bg-[#4E2A84]/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                        4:45PM - 6:45PM
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-4 sm:p-6 bg-purple-50 rounded-xl border border-[#4E2A84]/20 shadow-sm">
                      <span className="font-bold text-lg sm:text-xl text-[#4E2A84]">
                        Friday:
                      </span>
                      <span className="text-[#4E2A84] font-semibold text-base sm:text-lg bg-[#4E2A84]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#4E2A84]/20">
                        Friday Off
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-4 sm:p-6 bg-[#4E2A84]/5 rounded-xl border-2 border-[#4E2A84]/30 shadow-md">
                      <span className="font-bold text-lg sm:text-xl text-[#4E2A84]">
                        Saturday:
                      </span>
                      <span className="text-[#4E2A84] font-bold text-lg sm:text-xl bg-[#4E2A84]/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                        10:00AM - 12:00PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 sm:mt-10 text-center">
                  <Button
                    asChild
                    className="bg-[#4E2A84] hover:bg-[#684C96] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transform hover:scale-105 transition-all shadow-lg w-full sm:w-auto"
                  >
                    <Link href="/schedule" className="flex items-center justify-center gap-2">
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
                      View Full Schedule & Coach Attendance
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-[#4E2A84] px-4">
            Ready to Dive In? Join Our Team
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-[#1f2937] leading-relaxed px-4">
            Take the first step toward platform diving excellence. Whether you are
            ready to start or just exploring, we have the perfect path for your
            journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="glass-card border border-gray-200 hover:shadow-xl transition-all hover:scale-105 text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto bg-[#4E2A84]/10 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                  <UserPlus className="h-7 w-7 sm:h-8 sm:w-8 text-[#4E2A84]" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-[#4E2A84] mb-2 px-2">
                  Sign Up for a Tryout
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-6">
                <p className="text-[#1f2937] text-sm sm:text-base mb-6 leading-relaxed">
                  Ready to take your first dive? Join us for a tryout session and
                  experience world-class coaching firsthand.
                </p>
                <Button
                  asChild
                  className="w-full bg-[#4E2A84] hover:bg-[#684C96] text-white font-semibold"
                >
                  <Link href="/courses" className="flex items-center justify-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border border-gray-200 hover:shadow-xl transition-all hover:scale-105 text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto bg-[#4E2A84]/10 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                  <Activity className="h-7 w-7 sm:h-8 sm:w-8 text-[#4E2A84]" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-[#4E2A84] mb-2 px-2">
                  Explore Our Programs
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-6">
                <p className="text-[#1f2937] text-sm sm:text-base mb-6 leading-relaxed">
                  Discover our comprehensive training programs designed for every skill
                  level, from beginner to Olympic contender.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-[#4E2A84] text-[#4E2A84] hover:bg-[#4E2A84] hover:text-white font-semibold"
                >
                  <Link href="/courses" className="flex items-center justify-center gap-2">
                    <Activity className="h-4 w-4" />
                    View Courses
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border border-gray-200 hover:shadow-xl transition-all hover:scale-105 text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto bg-[#4E2A84]/10 rounded-full p-3 sm:p-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                  <Mail className="h-7 w-7 sm:h-8 sm:w-8 text-[#4E2A84]" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-[#4E2A84] mb-2 px-2">
                  Ask a Question
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-6">
                <p className="text-[#1f2937] text-sm sm:text-base mb-6 leading-relaxed">
                  Have questions about our programs or coaching? Connect directly with
                  our Olympic-level coaching staff.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-[#4E2A84] text-[#4E2A84] hover:bg-[#4E2A84] hover:text-white font-semibold"
                >
                  <Link href="/coaches" className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-[#4E2A84] px-4">
              Explore Our World-Class Facilities
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#1f2937] max-w-3xl mx-auto px-4">
              Train in state-of-the-art facilities designed to elevate your diving
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="glass-card border border-gray-200 overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden relative">
                <Image
                  src="/img-2292_087193-tsml-large.jpg"
                  alt="Olympic-Grade Diving Platforms"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#4E2A84]">
                  Olympic-Grade Diving Platforms
                </h3>
                <p className="text-[#1f2937] text-sm sm:text-base">
                  Professional diving platforms and springboards for all skill levels
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border border-gray-200 overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden relative">
                <Image
                  src="/img-2293_033634-tsml-large.jpg"
                  alt="State-of-the-Art Pool"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#4E2A84]">
                  State-of-the-Art Pool
                </h3>
                <p className="text-[#1f2937] text-sm sm:text-base">
                  Competition-ready pool with optimal depth and water conditions
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border border-gray-200 overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden relative">
                <Image
                  src="/img-2297_012542-tsml-large.jpg"
                  alt="Professional Training Environment"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#4E2A84]">
                  Professional Training Environment
                </h3>
                <p className="text-[#1f2937] text-sm sm:text-base">
                  World-class facility designed for competitive excellence
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border border-gray-200 overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden relative">
                <Image
                  src="/img-2300_011970-tsml-large.jpg"
                  alt="Championship-Level Facility"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#4E2A84]">
                  Championship-Level Facility
                </h3>
                <p className="text-[#1f2937] text-sm sm:text-base">
                  Train where champions are made with top-tier equipment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}