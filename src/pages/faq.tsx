import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

export default function FAQPage() {
  const faqs = [
    {
      question: "Can my child try a practice before committing?",
      answer: "Yes! We welcome trial practices for new divers. Please email Cara at evanstondiving@gmail.com to schedule a trial session and see if our program is the right fit for your athlete."
    },
    {
      question: "How do you determine which training group is right for my child?",
      answer: "Our experienced coaches will assess your child's skill level, experience, and development needs during their initial practices. We'll work with you to place them in the training group that best matches their abilities and goals, whether they're just starting out or looking to compete at the national level."
    },
    {
      question: "How many practices per week should my child attend?",
      answer: "We offer flexible training schedules from 1 to 5 practices per week. The number of practices depends on your child's skill level, competitive goals, and schedule. Beginners typically start with 1-2 practices per week, while competitive divers training for regional and national events attend 3-5 practices weekly."
    },
    {
      question: "What are your monthly tuition rates?",
      answer: "Our monthly tuition is based on practice frequency:\n\n• 1x per week: $149.67/month\n• 2x per week: $299.67/month\n• 3x per week: $366.33/month\n• 4x per week: $433.00/month\n• 5x per week: $499.67/month\n\nAll athletes must register with AAU using club code: U8VK2C9S8"
    },
    {
      question: "Is competition required?",
      answer: "Competition is strongly encouraged as it's a valuable part of the learning experience and helps divers set goals and track progress. However, it is not mandatory. We support recreational divers who dive for fitness and fun, as well as competitive athletes pursuing regional and national championships."
    },
    {
      question: "What is your practice schedule?",
      answer: "Our regular practice schedule is:\n\n• Monday - Thursday: 4:45 PM - 6:45 PM\n• Saturday: 10:00 AM - 12:00 PM\n\nPractice times may vary during school breaks and holidays. We'll notify families in advance of any schedule changes."
    },
    {
      question: "Where do practices take place?",
      answer: "All practices are held at the Diving Dryland Complex in Evanston. Athletes should meet at the complex entrance at their scheduled practice time. Please arrive 10 minutes early for your first practice so we can complete any necessary paperwork and introduce you to the coaching staff."
    },
    {
      question: "How do I register my child?",
      answer: "Registration is simple! Email Cara at evanstondiving@gmail.com with your child's name, age, diving experience, and preferred practice schedule. We'll guide you through the registration process, including AAU membership (club code: U8VK2C9S8) and tuition payment setup."
    },
    {
      question: "What does a typical 2-hour practice look like?",
      answer: "Each 2-hour practice session is carefully structured:\n\n• 30 minutes: Dryland training (strength, flexibility, technique work)\n• 90 minutes: Pool time (skill progression, dive practice, coaching)\n\nThis combination ensures divers build the physical foundation and technical skills needed for safe, successful diving progression."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a satisfaction guarantee:\n\n• Full refund: Available during the first week of enrollment\n• 50% refund: Available during the first month of enrollment\n• After the first month: No refunds, but you may pause or adjust your practice schedule\n\nWe want every family to feel confident in their decision to join Evanston Diving Club!"
    }
  ];

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Evanston Diving Club"
        description="Get answers to common questions about Evanston Diving Club programs, pricing, schedules, and registration."
        url="https://www.evanstondiving.com/faq"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </Head>
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-[#4E2A84] text-white py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4E2A84] via-[#5c3799] to-[#4E2A84] opacity-90"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto px-4">
              Everything you need to know about joining Evanston Diving Club
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glass-card p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-[#4E2A84] mb-8 text-center">
                Common Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg px-4 sm:px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900 hover:text-[#4E2A84] py-4 sm:py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base text-gray-700 pb-4 sm:pb-6 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#4E2A84] text-white py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
              Still Have Questions?
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              We're here to help! Reach out to our team and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link href="mailto:evanstondiving@gmail.com" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-[#4E2A84] hover:bg-gray-100 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </Link>
              <Link href="/schedule" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#4E2A84] font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full"
                >
                  View Schedule
                </Button>
              </Link>
            </div>
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-purple-400">
              <p className="text-purple-100 mb-4 text-sm sm:text-base">
                <strong>Contact Information:</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-purple-100 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <a
                    href="mailto:evanstondiving@gmail.com"
                    className="hover:text-white transition-colors break-all"
                  >
                    evanstondiving@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>Available via email</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}