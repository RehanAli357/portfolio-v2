import AboutSection from "./(sections)/about-section";
import HeroSection from "./(sections)/hero-section";
import ProjectSection from "./(sections)/project-section";
import SkillsSection from "./(sections)/skills-section";

const Home = () => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
    
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
    </div>
  );
};

export default Home;
