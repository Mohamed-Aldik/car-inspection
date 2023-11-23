import { Layout } from "../../layout";
import { HeroSection } from "./components/HeroSection";
import { OurStorySection } from "./components/OurStorySection";

const LandingPage = () => {
  return (
    <Layout>
      <HeroSection />
      <OurStorySection />
    </Layout>
  );
};

export default LandingPage;
