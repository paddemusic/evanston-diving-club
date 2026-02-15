import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Target,
  Trophy,
  Zap,
  Crown,
  Users,
  Clock,
  Calendar,
  CheckCircle,
  Star,
  Award,
  Mail
} from "lucide-react";
import Head from "next/head";

export default function Courses() {
  const programs = [
    {
      id: 1,
      name: "Beginners Program",
      icon: Target,
      level: "Entry Level",
      bgColor: "bg-[#4E2A84]",
      age: "Ages 6-12",
      duration: "12 weeks",
      schedule: "Mon-Thu 4:45-6:45 PM, Sat 10:00 AM-12:00 PM",
      description: "Perfect introduction to competitive diving for young athletes taking their first steps into the sport.",
      features: [
        "Fundamental diving techniques",
        "Water safety and pool confidence",
        "Basic board and platform skills",
        "Introduction to competition format",
        "Fun, supportive learning environment"
      ],
      outcomes: [
        "Master basic diving positions",
        "Complete first 1-meter dive",
        "Build confidence and water comfort",
        "Prepare for intermediate training"
      ]
    },
    {
      id: 2,
      name: "Intermediate Program",
      icon: Zap,
      level: "Developing Athletes",
      bgColor: "bg-[#4E2A84]",
      age: "Ages 10-16",
      duration: "Year-Round",
      schedule: "Mon-Thu 5:00-7:00 PM, Sat 10:00 AM-12:00 PM",
      description: "Competitive training for athletes ready to advance their skills and compete at regional level.",
      features: [
        "Advanced diving techniques",
        "3-meter springboard training",
        "Platform diving introduction",
        "Competition preparation",
        "Strength and flexibility training"
      ],
      outcomes: [
        "Compete at regional championships",
        "Master 3-meter springboard",
        "Develop consistent technique",
        "Progress to advanced program"
      ]
    },
    {
      id: 3,
      name: "Advanced Program",
      icon: Trophy,
      level: "Elite Competition",
      bgColor: "bg-[#4E2A84]",
      age: "Ages 12+",
      duration: "Year-Round",
      schedule: "Mon-Thu 5:00-7:00 PM, Sat 10:00 AM-12:00 PM + Additional Training",
      description: "High-performance training for serious competitors aiming for state, national, and international success.",
      features: [
        "Olympic-level coaching",
        "Platform and springboard mastery",
        "Competition strategy and mental training",
        "Video analysis and technique refinement",
        "Strength and conditioning program"
      ],
      outcomes: [
        "Compete at national level",
        "Master platform diving",
        "College recruitment preparation",
        "Pathway to Olympic trials"
      ]
    },
    {
      id: 4,
      name: "Elite/Olympic Track",
      icon: Crown,
      level: "International Competition",
      bgColor: "bg-[#4E2A84]",
      age: "Invitation Only",
      duration: "Year-Round Intensive",
      schedule: "Customized Training Schedule",
      description: "Elite program for international contenders training for Olympic trials and world championships.",
      features: [
        "Individualized Olympic-level coaching",
        "International competition preparation",
        "Sports psychology and mental training",
        "Nutrition and recovery optimization",
        "Full support system for championship performance"
      ],
      outcomes: [
        "International competition success",
        "Olympic trials qualification",
        "NCAA Division I opportunities",
        "World championship contention"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Programs - Evanston Diving Club</title>
        <meta name="description" content="Explore our comprehensive diving programs from beginners to Olympic contenders. Year-round training with world-class coaching." />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <Badge variant="secondary" className="mb-4 sm:mb-6 bg-[#4E2A84] text-white border-[#4E2A84]/30 px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg font-semibold">
              Training Programs
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#4E2A84] mb-4 sm:mb-6 px-4">
              Your Path to Excellence
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              From your first dive to the Olympic podium—comprehensive programs designed for <span className="text-[#4E2A84] font-bold">every level</span> of competitive diving
            </p>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              {programs.map((program, index) => {
                const Icon = program.icon;
                const isReversed = index % 2 === 1;

                return (
                  <div key={program.id} className="max-w-6xl mx-auto">
                    <Card className="glass-card overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 border-gray-200">
                      <div className={`grid md:grid-cols-2 gap-0 ${isReversed ? 'md:flex md:flex-row-reverse' : ''}`}>
                        {/* Program Header/Visual */}
                        <div className="bg-white p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden border-r border-gray-200">
                          <div className="relative z-10">
                            <div className="bg-[#4E2A84]/10 rounded-full p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                              <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#4E2A84]" />
                            </div>
                            <Badge variant="secondary" className="mb-3 sm:mb-4 bg-[#4E2A84] text-white border-[#4E2A84]/30 text-xs sm:text-sm">
                              {program.level}
                            </Badge>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[#4E2A84] px-2">
                              {program.name}
                            </h2>
                            <div className="space-y-2 text-base sm:text-lg text-gray-700">
                              <div className="flex items-center justify-center gap-2">
                                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#4E2A84] flex-shrink-0" />
                                <span>{program.age}</span>
                              </div>
                              <div className="flex items-center justify-center gap-2">
                                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#4E2A84] flex-shrink-0" />
                                <span>{program.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Program Details */}
                        <div className="p-6 sm:p-8 md:p-12 bg-white">
                          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                            {program.description}
                          </p>

                          <div className="mb-4 sm:mb-6">
                            <div className="flex items-center gap-2 mb-2 sm:mb-3">
                              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#4E2A84] flex-shrink-0" />
                              <h3 className="font-bold text-base sm:text-lg text-[#4E2A84]">Schedule</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600">
                              {program.schedule}
                            </p>
                          </div>

                          <div className="mb-4 sm:mb-6">
                            <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 flex items-center gap-2 text-[#4E2A84]">
                              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#4E2A84] flex-shrink-0" />
                              Program Features
                            </h3>
                            <ul className="space-y-2">
                              {program.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm sm:text-base text-gray-600">
                                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#4E2A84] mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-4 sm:mb-6">
                            <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 flex items-center gap-2 text-[#4E2A84]">
                              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#4E2A84] flex-shrink-0" />
                              Expected Outcomes
                            </h3>
                            <ul className="space-y-2">
                              {program.outcomes.map((outcome, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm sm:text-base text-gray-600">
                                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#4E2A84] mt-0.5 flex-shrink-0" />
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#4E2A84] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto text-white/90 px-4">
              Join Illinois' premier year-round diving program and train with Olympic-level coaches
            </p>
            
            <Button size="lg" asChild className="bg-white hover:bg-gray-100 text-[#4E2A84] font-bold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
              <a href="mailto:cara.evanstondiving@gmail.com" className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
}