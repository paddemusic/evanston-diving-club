import React from "react";
import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Users, Award } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us - Evanston Diving Club"
        description="Learn about the Evanston Diving Club's mission, values, and what sets us apart in competitive diving training."
      />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-card p-8 rounded-lg">
            <Badge className="mb-4 bg-[#4E2A84] text-white hover:bg-[#4E2A84]/90">
              About Our Club
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-[#4E2A84] mb-6">
              Excellence in Diving
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Evanston Diving Club is dedicated to developing world-class divers
              through expert coaching, state-of-the-art facilities, and a supportive
              community. We have trained numerous national champions and Olympic athletes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#4E2A84] mb-8 text-center">
              Our Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card border-none shadow-lg">
                <CardContent className="p-6">
                  <Trophy className="w-12 h-12 text-[#4E2A84] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Competitive Excellence
                  </h3>
                  <p className="text-gray-700">
                    We provide top-tier training programs designed to help athletes
                    reach their full potential and compete at the highest levels.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-none shadow-lg">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 text-[#4E2A84] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Skill Development
                  </h3>
                  <p className="text-gray-700">
                    From beginners to advanced divers, our progressive curriculum
                    ensures each athlete develops proper technique and confidence.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-none shadow-lg">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-[#4E2A84] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Community Building
                  </h3>
                  <p className="text-gray-700">
                    We foster a supportive environment where athletes, coaches, and
                    families work together toward common goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-none shadow-lg">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-[#4E2A84] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Olympic Tradition
                  </h3>
                  <p className="text-gray-700">
                    Our coaching staff includes Olympic athletes and USA Diving
                    certified professionals with decades of combined experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#4E2A84] mb-8 text-center">
              What Sets Us Apart
            </h2>
            <div className="space-y-6">
              <Card className="glass-card border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    World-Class Facilities
                  </h3>
                  <p className="text-gray-700">
                    Train at Glenbrook Aquatic Center, featuring Olympic-standard
                    diving platforms and spring boards in a climate-controlled
                    environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Expert Coaching Staff
                  </h3>
                  <p className="text-gray-700">
                    Learn from coaches who have trained national champions and
                    competed at the highest international levels themselves.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Year-Round Programming
                  </h3>
                  <p className="text-gray-700">
                    We offer continuous training throughout the year, ensuring
                    athletes maintain and improve their skills regardless of the
                    season.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Individualized Attention
                  </h3>
                  <p className="text-gray-700">
                    Small coach-to-athlete ratios ensure each diver receives
                    personalized instruction and feedback tailored to their goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4E2A84]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Diving Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the Evanston Diving Club and train with the best coaches in
            Illinois.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#4E2A84] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Programs
            </a>
            <a
              href="/coaches"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Meet Our Coaches
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}