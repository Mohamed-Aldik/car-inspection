import { Layout } from "../../layout";
import { FaqSection } from "./components/FaqSection";
import { FooterSection } from "./components/FooterSection";
import { HeroSection } from "./components/HeroSection";
import { OurClientsSection } from "./components/OurClientsSection";
import { OurStorySection } from "./components/OurStorySection";
import { ChatComponent } from "./components/ChatComponent";
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

      <ChatComponent />
    </Layout>
  );
};

export default LandingPage;
