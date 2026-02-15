import React from "react";
import { useRouter } from "next/router";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  Trophy, 
  TrendingUp,
  LogOut,
  Mail,
  Phone
} from "lucide-react";
import Head from "next/head";

export default function CoachDashboard() {
  const router = useRouter();
  
  const students = [
    { id: 1, name: "Student 1", email: "student1@example.com", phone: "555-0101", level: "Beginner", emergencyContact: "Parent 1" },
    { id: 2, name: "Student 2", email: "student2@example.com", phone: "555-0102", level: "Intermediate", emergencyContact: "Parent 2" },
  ];

  const handleLogout = () => {
    router.push("/coach-login");
  };

  return (
    <>
      <Head>
        <title>Coach Dashboard - Evanston Diving Club</title>
        <meta name="description" content="Manage your athletes and track their progress." />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-[#4E2A84] via-[#5c3799] to-[#4E2A84]">
          <div className="absolute inset-0 opacity-20 bg-white/10"></div>
          
          <div className="relative container mx-auto px-4 z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 px-4 py-2">
                  Coach Portal
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">
                  Welcome Back, Coach!
                </h1>
                <p className="text-lg sm:text-xl text-white/90">
                  Manage your athletes and track their progress
                </p>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#4E2A84] transition-colors"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard Stats */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <Card className="border-2 border-[#4E2A84]/20 hover:border-[#4E2A84]/40 transition-all hover:shadow-lg">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 text-[#4E2A84]" />
                  <p className="text-2xl sm:text-3xl font-bold text-[#4E2A84] mb-1">{students.length}</p>
                  <p className="text-sm sm:text-base text-gray-600">Total Athletes</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#4E2A84]/20 hover:border-[#4E2A84]/40 transition-all hover:shadow-lg">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Calendar className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 text-[#4E2A84]" />
                  <p className="text-2xl sm:text-3xl font-bold text-[#4E2A84] mb-1">5</p>
                  <p className="text-sm sm:text-base text-gray-600">Weekly Sessions</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#4E2A84]/20 hover:border-[#4E2A84]/40 transition-all hover:shadow-lg">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Trophy className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 text-[#4E2A84]" />
                  <p className="text-2xl sm:text-3xl font-bold text-[#4E2A84] mb-1">12</p>
                  <p className="text-sm sm:text-base text-gray-600">Competitions</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#4E2A84]/20 hover:border-[#4E2A84]/40 transition-all hover:shadow-lg">
                <CardContent className="p-4 sm:p-6 text-center">
                  <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 text-[#4E2A84]" />
                  <p className="text-2xl sm:text-3xl font-bold text-[#4E2A84] mb-1">94%</p>
                  <p className="text-sm sm:text-base text-gray-600">Attendance Rate</p>
                </CardContent>
              </Card>
            </div>

            {/* Student Roster */}
            <Card className="border-2 border-[#4E2A84]/30 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#4E2A84] to-[#5c3799] text-white">
                <CardTitle className="text-xl sm:text-2xl flex items-center gap-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  Student Roster
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left py-3 px-3 sm:px-4 font-bold text-[#4E2A84] text-sm sm:text-base">Name</th>
                          <th className="text-left py-3 px-3 sm:px-4 font-bold text-[#4E2A84] text-sm sm:text-base hidden md:table-cell">Email</th>
                          <th className="text-left py-3 px-3 sm:px-4 font-bold text-[#4E2A84] text-sm sm:text-base hidden lg:table-cell">Phone</th>
                          <th className="text-left py-3 px-3 sm:px-4 font-bold text-[#4E2A84] text-sm sm:text-base">Level</th>
                          <th className="text-left py-3 px-3 sm:px-4 font-bold text-[#4E2A84] text-sm sm:text-base hidden sm:table-cell">Emergency Contact</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {students.map((student) => (
                          <tr key={student.id} className="hover:bg-[#4E2A84]/5 transition-colors">
                            <td className="py-3 px-3 sm:px-4 font-medium text-sm sm:text-base">
                              <div>
                                <div className="font-semibold">{student.name}</div>
                                <div className="md:hidden text-xs text-gray-500 mt-1">
                                  <a href={`mailto:${student.email}`} className="text-[#4E2A84] hover:underline flex items-center gap-1">
                                    <Mail className="w-3 h-3" />
                                    Email
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-3 sm:px-4 hidden md:table-cell">
                              <a href={`mailto:${student.email}`} className="text-[#4E2A84] hover:text-[#3d1f6b] flex items-center gap-1 text-sm sm:text-base">
                                <Mail className="w-4 h-4" />
                                <span className="truncate max-w-[150px] lg:max-w-none">{student.email}</span>
                              </a>
                            </td>
                            <td className="py-3 px-3 sm:px-4 hidden lg:table-cell">
                              <a href={`tel:${student.phone}`} className="text-[#4E2A84] hover:text-[#3d1f6b] flex items-center gap-1 text-sm sm:text-base">
                                <Phone className="w-4 h-4" />
                                {student.phone}
                              </a>
                            </td>
                            <td className="py-3 px-3 sm:px-4">
                              <Badge className="bg-[#4E2A84]/20 text-[#4E2A84] border-[#4E2A84]/30 text-xs sm:text-sm">
                                {student.level}
                              </Badge>
                            </td>
                            <td className="py-3 px-3 sm:px-4 text-gray-600 text-sm sm:text-base hidden sm:table-cell">{student.emergencyContact}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Mobile Contact Info */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg md:hidden">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Tip:</strong> Tap on student names to view full contact details
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </Layout>
    </>
  );
}