import { Layout } from "../../layout";
import { FaqSection } from "./components/FaqSection";
import { FooterSection } from "./components/FooterSection";
import { HeroSection } from "./components/HeroSection";
import { OurClientsSection } from "./components/OurClientsSection";
import { OurStorySection } from "./components/OurStorySection";
import { SocialMediaComponent } from "./components/SocialMediaComponent";
import { StepsSection } from "./components/StepsSection";

const LandingPage = () => {
  return (
    <Layout>
      <HeroSection />

      <OurStorySection />

      <StepsSection />

      <OurClientsSection />

      <FaqSection />

      <FooterSection />

      <SocialMediaComponent />
    </Layout>
  );
};

export default LandingPage;
