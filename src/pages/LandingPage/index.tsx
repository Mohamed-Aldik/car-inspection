import { Layout } from "../../layout";
import { FooterSection } from "./components/FooterSection";
import { HeroSection } from "./components/HeroSection";
import { OurClientsSection } from "./components/OurClientsSection";
import { OurStorySection } from "./components/OurStorySection";

const LandingPage = () => {
  return (
    <Layout>
      <HeroSection />

      <OurStorySection />

      <OurClientsSection />

      <FooterSection />
    </Layout>
  );
};

export default LandingPage;
