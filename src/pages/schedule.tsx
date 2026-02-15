// Sync Trigger: 2026-02-15 00:14:30 UTC
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Phone,
  Mail,
  AlertCircle,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState<string>("monday");

  const weekSchedule = [
    { day: "sunday", label: "Sunday", status: "closed", time: "Day Off", color: "gray" },
    { day: "monday", label: "Monday", status: "open", time: "4:45 PM - 6:45 PM", color: "purple" },
    { day: "tuesday", label: "Tuesday", status: "open", time: "4:45 PM - 6:45 PM", color: "purple" },
    { day: "wednesday", label: "Wednesday", status: "open", time: "4:45 PM - 6:45 PM", color: "purple" },
    { day: "thursday", label: "Thursday", status: "open", time: "4:45 PM - 6:45 PM", color: "purple" },
    { day: "friday", label: "Friday", status: "closed", time: "Day Off", color: "gray" },
    { day: "saturday", label: "Saturday", status: "open", time: "10:00 AM - 12:00 PM", color: "purple" }
  ];

  const coachSchedule = {
    monday: { coaches: ["Coach Kris", "Coach Cara"], location: "Norris Aquatics Center" },
    tuesday: { coaches: ["Coach Kris", "Coach Cara"], location: "Norris Aquatics Center" },
    wednesday: { coaches: ["Coach Kris", "Coach Cara"], location: "Norris Aquatics Center" },
    thursday: { coaches: ["Coach Kris", "Coach Cara"], location: "Norris Aquatics Center" },
    saturday: { coaches: ["Coach Kris", "Coach Cara"], location: "Norris Aquatics Center" }
  };

  return (
    <>
      <Head>
        <title>Practice Schedule - Evanston Diving Club</title>
        <meta name="description" content="View our weekly practice schedule and coach availability at Illinois' premier diving facility." />
      </Head>
      
      <Layout>
        {/* Weekly Schedule Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto glass-card p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#4E2A84] mb-8 text-center">
                Weekly Practice Schedule
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 mb-8 sm:mb-12">
                {weekSchedule.map((schedule) => (
                  <button
                    key={schedule.day}
                    onClick={() => setSelectedDay(schedule.day)}
                    className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedDay === schedule.day
                        ? schedule.status === "open"
                          ? "bg-[#4E2A84] text-white border-[#4E2A84] shadow-xl scale-105"
                          : "bg-gray-200 border-gray-400"
                        : "bg-white border-gray-200 hover:border-[#4E2A84]/50 hover:shadow-lg"
                    }`}
                  >
                    <div className="text-center">
                      <p className={`font-bold text-xs sm:text-sm mb-2 ${
                        selectedDay === schedule.day && schedule.status === "open"
                          ? "text-white"
                          : "text-gray-700"
                      }`}>
                        {schedule.label}
                      </p>
                      <div className="flex items-center justify-center mb-2">
                        <Clock className={`w-4 h-4 ${
                          selectedDay === schedule.day && schedule.status === "open"
                            ? "text-white"
                            : schedule.status === "open"
                            ? "text-[#4E2A84]"
                            : "text-gray-400"
                        }`} />
                      </div>
                      <p className={`text-xs ${
                        selectedDay === schedule.day && schedule.status === "open"
                          ? "text-white/90"
                          : "text-gray-600"
                      }`}>{schedule.time}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Selected Day Details */}
              {weekSchedule.find((s) => s.day === selectedDay)?.status === "open" && coachSchedule[selectedDay as keyof typeof coachSchedule] && (
                <Card className="border-2 border-[#4E2A84]/30 shadow-2xl">
                  <CardHeader className="bg-[#4E2A84] text-white">
                    <CardTitle className="text-2xl sm:text-3xl flex items-center justify-center gap-3">
                      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                      Monthly Practice Schedule
                    </CardTitle>
                  </CardHeader>
                  
                  {/* Google Calendar Embed */}
                  <div className="w-full bg-white p-4 sm:p-6 md:p-8">
                    <div className="max-w-5xl mx-auto">
                      <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: "75%" }}>
                        <iframe
                          src="https://calendar.google.com/calendar/embed?src=cara.evanstondiving%40gmail.com&ctz=America%2FChicago"
                          className="absolute top-0 left-0 w-full h-full border-0"
                          scrolling="no"
                          title="Evanston Diving Club Calendar"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              {weekSchedule.find((s) => s.day === selectedDay)?.status === "closed" && (
                <Card className="border-2 border-gray-300">
                  <CardContent className="p-8 sm:p-12 text-center">
                    <AlertCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-600">
                      No Practice Scheduled
                    </h3>
                    <p className="text-base sm:text-lg text-gray-500">
                      {weekSchedule.find((s) => s.day === selectedDay)?.label}s are rest days for our athletes
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Facility Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glass-card p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#4E2A84] mb-8 text-center">
                Training Facility
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-3 text-[#4E2A84]">Norris Aquatics Center</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    2311 Campus Drive<br />
                    Evanston, IL 60208
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="w-5 h-5 text-[#4E2A84]" />
                      <h4 className="font-bold text-[#4E2A84]">Phone</h4>
                    </div>
                    <p className="text-gray-700">
                      <a href="tel:+18474674313" className="hover:text-[#4E2A84] transition-colors">
                        (847) 467-4313
                      </a>
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5 text-[#4E2A84]" />
                      <h4 className="font-bold text-[#4E2A84]">Email</h4>
                    </div>
                    <p className="text-gray-700">
                      <a href="mailto:cara.evanstondiving@gmail.com" className="hover:text-[#4E2A84] transition-colors break-all">
                        cara.evanstondiving@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                  <Button size="lg" className="bg-[#4E2A84] hover:bg-[#3d1f6b] text-white font-bold shadow-lg w-full sm:w-auto">
                    <a href="https://www.google.com/maps/dir/?api=1&destination=Norris+Aquatics+Center,2311+Campus+Drive,Evanston,IL+60208" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center relative z-10 glass-card p-8 rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#4E2A84] px-4">
              Ready to Dive In?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join our training sessions and experience world-class coaching
            </p>
            <Link 
              href="/courses"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#4E2A84] text-white rounded-lg font-semibold hover:bg-[#3d1f6b] transition-colors text-base sm:text-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}