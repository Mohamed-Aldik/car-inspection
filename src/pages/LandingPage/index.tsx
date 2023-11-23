import { Layout } from "../../layout";
import { HeroSection } from "./components/HeroSection";
import { OurClientsSection } from "./components/OurClientsSection";
import { OurStorySection } from "./components/OurStorySection";

const LandingPage = () => {
  return (
    <Layout>
      <HeroSection />
      <OurStorySection />
      <OurClientsSection />
    </Layout>
  );
};

export default LandingPage;
