// Sync Trigger: 2026-02-15 00:14:30 UTC
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Mail } from "lucide-react";
import Head from "next/head";

export default function CoachLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simplified login for UI demo
    if (email && password) {
      router.push("/coach-dashboard");
    }
  };

  return (
    <>
      <Head>
        <title>Coach Login - Evanston Diving Club</title>
        <meta name="description" content="Coach portal for Evanston Diving Club staff members." />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
          <div className="absolute inset-0 opacity-20 bg-purple-500/10"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <Badge variant="secondary" className="mb-4 sm:mb-6 bg-white text-purple-900 border-white/30 px-4 sm:px-6 py-2 text-sm sm:text-base md:text-lg font-semibold">
              Coach Portal
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg px-4">
              Coach Login
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
              Access your coaching dashboard and manage your athletes
            </p>
          </div>
        </section>

        {/* Login Form */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <Card className="border-2 border-purple-900/30 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-purple-900 to-purple-800 text-white text-center">
                  <div className="mx-auto bg-white/20 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">Coach Access</CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-purple-900 font-semibold text-sm sm:text-base">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="coach@evanstondiving.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="pl-9 sm:pl-10 border-purple-900/30 focus:border-purple-900 text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-purple-900 font-semibold text-sm sm:text-base">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="pl-9 sm:pl-10 border-purple-900/30 focus:border-purple-900 text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-purple-900 hover:bg-purple-800 text-white font-bold py-2.5 sm:py-3 text-base sm:text-lg"
                    >
                      Sign In
                    </Button>
                  </form>

                  <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-600">
                    <p className="mb-1">For assistance, contact:</p>
                    <a href="mailto:cara.evanstondiving@gmail.com" className="text-purple-900 hover:text-purple-800 font-semibold break-all">
                      cara.evanstondiving@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}