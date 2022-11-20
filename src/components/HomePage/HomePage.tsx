import ProjectList from "@components/ProjectList";
import Skills from "@components/Skills";
import About from "@components/About";
import Contact from "@components/Contact";
import Hero from "@components/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProjectList />
      <Skills />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
