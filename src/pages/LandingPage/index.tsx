import { Layout } from "../../layout";
import { FaqSection } from "./components/FaqSection";
import { FooterSection } from "./components/FooterSection";
import { HeroSection } from "./components/HeroSection";
import { OurClientsSection } from "./components/OurClientsSection";
import { OurStorySection } from "./components/OurStorySection";
import { ChatComponent } from "./components/ChatComponent";

const LandingPage = () => {
  return (
    <Layout>
      <ChatComponent />

      <HeroSection />

      <OurStorySection />

      <OurClientsSection />

      <FaqSection />

      <FooterSection />
    </Layout>
  );
};

export default LandingPage;
