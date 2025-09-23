import AboutSection from "./(sections)/about-section";
import HeroSection from "./(sections)/hero-section";
import ProjectSection from "./(sections)/project-section";
import SkillsSection from "./(sections)/skills-section";
import WorkExperienceSection from "./(sections)/work-experience-section";

const Home = () => {
  return (
    <div className="w-[100%] relative px-2">
    
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <WorkExperienceSection/>
    </div>
  );
};

export default Home;
