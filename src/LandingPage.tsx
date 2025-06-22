import { LoginModal } from "./LogInModal";
import { SignupModal } from "./SignUpModal";
import { useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MarketSection } from "./Market";
import { AboutUsSection } from "./AboutUs";
import { ForexNewsSection } from "./ForexNews";

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
      </div>
    </>
  );
}

export default LandingPage;
