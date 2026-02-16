import React from "react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Award,
  Star,
  Mail,
  Users,
  Target
} from "lucide-react";

export default function Coaches() {
  const coaches = [
    {
      name: "Kris Jorgensen",
      title: "Program Director",
      image: "/627658832_1968803447383868_107687125624458216_n.jpg",
      credentials: [
        "Olympic-level coaching experience",
        "Former NCAA Division I Diver",
        "Northwestern University Hall of Fame",
        "USA Diving Level 5 Certified"
      ],
      specialties: [
        "Elite athlete development",
        "College recruiting preparation",
        "Technical mastery",
        "Competition strategy"
      ],
      bio: "Kris Jorgensen brings decades of Olympic-level diving experience to our program. As Program Director, Kris oversees all training operations and leads our elite development pathway, helping athletes reach their highest potential from regional competitions to national championships."
    },
    {
      name: "Cara",
      title: "Assistant Coach",
      image: "/IMG_7505.JPG",
      credentials: [
        "Former competitive diver",
        "Specialized in youth development",
        "Focus on technique fundamentals"
      ],
      specialties: [
        "Youth coaching",
        "Technical foundations",
        "Confidence building"
      ],
      bio: "Coach Cara specializes in developing young divers with a focus on building strong foundational skills and confidence. Her patient approach and attention to detail help athletes master the basics while fostering a love for the sport."
    },
    {
      name: "Chris",
      title: "Assistant Coach",
      image: "/Screenshot_2026-02-13_at_20.53.15.png",
      credentials: [
        "University of Michigan diver",
        "IHSA State Finalist",
        "Big Ten Champion"
      ],
      specialties: [
        "Springboard technique",
        "Competition preparation",
        "Strength & conditioning"
      ],
      bio: "Chris began diving at age 10 at Chicago Dive Club in Evanston, Illinois, before moving on to continue his diving career at the University of Michigan. With the support and guidance from Chicago Dive Club, Chris went on to become a nationally ranked diver, a four-time IHSA State Finalist, and a NISCA National High School Champion. At the University of Michigan, Chris continued his diving career on the Division 1 level becoming a three-time Big Ten Team Champion and a 12-time Big Ten Finalist. While Chris competed in both springboard and platform events during his career, Chris specializes in teaching the proper USA Diving progressions—from 1-meter basics to 3-meter competitive lists—helping young divers build the mechanics needed to succeed at Zones, Nationals, and beyond."
    }
  ];

  return (
    <Layout>
      <SEO
        title="Our Coaches | Evanston Diving Club"
        description="Meet the Evanston Diving Club coaching staff, including Program Director Kris Jorgensen. Olympic-level coaching at Northwestern University."
        url="https://www.evanstondiving.com/coaches"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-[#4E2A84]/10 to-purple-200/10"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 text-center z-10">
          <Badge
            variant="secondary"
            className="bg-[#4E2A84] hover:bg-[#684C96] text-white border-[#4E2A84]/30 px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base md:text-lg font-semibold mb-6"
          >
            Meet Our Coaching Staff
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-[#4E2A84]">
            World-Class Coaching
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Olympic-level expertise dedicated to developing{" "}
            <span className="text-[#4E2A84] font-bold">championship divers</span>
          </p>
        </div>
      </section>

      {/* Individual Coach Sections */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {coaches.map((coach, index) => (
              <Card
                key={index}
                className="glass-card overflow-hidden border-2 border-gray-200 hover:border-[#4E2A84]/30 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`grid md:grid-cols-5 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Coach Photo */}
                  <div className={`md:col-span-2 relative overflow-hidden bg-gradient-to-br from-[#4E2A84] to-[#684C96] ${index % 2 === 1 ? 'md:col-start-4' : ''}`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full bg-white/5"></div>
                    </div>
                    <div className="relative h-full min-h-[400px] md:min-h-[600px] flex items-center justify-center p-8">
                      <div className="w-full h-full bg-white/10 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
                        <img 
                          src={coach.image} 
                          alt={coach.name}
                          className="w-full h-full object-cover object-center rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Coach Details */}
                  <div className={`md:col-span-3 p-8 md:p-12 bg-white ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div className="mb-6">
                      <h2 className="text-4xl md:text-5xl font-bold text-[#4E2A84] mb-2">
                        {coach.name}
                      </h2>
                      <p className="text-xl md:text-2xl text-gray-600 font-semibold">
                        {coach.title}
                      </p>
                    </div>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {coach.bio}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-[#4E2A84]">
                          <Award className="w-5 h-5" />
                          Credentials
                        </h3>
                        <ul className="space-y-2">
                          {coach.credentials.map((credential, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <span className="text-[#4E2A84] mt-0.5 font-bold">✓</span>
                              <span>{credential}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-[#4E2A84]">
                          <Target className="w-5 h-5" />
                          Specialties
                        </h3>
                        <ul className="space-y-2">
                          {coach.specialties.map((specialty, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <Star className="w-5 h-5 text-[#4E2A84] mt-0.5 flex-shrink-0" />
                              <span>{specialty}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#4E2A84] text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Train with Olympic-Level Coaches
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto opacity-90">
            Join our program and experience world-class coaching that develops champions at every level
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#4E2A84] font-semibold shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="mailto:cara.evanstondiving@gmail.com" className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#4E2A84] font-semibold shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="/courses" className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                View Programs
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}