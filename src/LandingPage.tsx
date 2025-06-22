import { LoginModal } from "./LogInModal";
import { SignupModal } from "./SignUpModal";
import { useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MarketSection } from "./Market";
import { AboutUsSection } from "./AboutUs";
import { ForexNewsSection } from "./ForexNews";
import { StarSparkleChartSection } from "./ChartSection";
import { TestimonialsSection } from "./Testimonials";
import { FooterSection } from "./Footer";

function LandingPage() {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);

  return (
    <>
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && (
        <SignupModal
          onClose={() => setModal(null)}
          onSignupSuccess={() => setModal("login")}
        />
      )}
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header
          onLogin={() => setModal("login")}
          onSignup={() => setModal("signup")}
        />
        <Hero />
        <MarketSection/>
        <AboutUsSection/>
        <ForexNewsSection/>
        <StarSparkleChartSection/>
        <TestimonialsSection/>
        <FooterSection/>
      </div>
    </>
  );
}

export default LandingPage;
