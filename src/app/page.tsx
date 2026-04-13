import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import WhyMinecraft from "@/components/WhyMinecraft";
import TargetCreators from "@/components/TargetCreators";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <WhyMinecraft />
        <TargetCreators />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
