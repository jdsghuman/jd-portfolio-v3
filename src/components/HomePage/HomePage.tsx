import ProjectList from "@components/Project/ProjectList";
import Skills from "@components/Skills";
import About from "@components/About";
import Contact from "@components/Contact";
import Hero from "@components/Hero";
import Meta from "@components/Meta";
import { MetaTags, PageType, RobotsContent } from "@components/Meta/types";

const HomePage = () => {
  const postMetaTags: MetaTags = {
    canonical: "https://www.bobbieleeghuman.com",
    description: `UX Designer | Portfolio`,
    image: "https://www.bobbieleeghuman.com/images/bobbie.png",
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `bobbieleeghuman`,
    type: PageType.website,
  };
  return (
    <>
      <Meta tags={postMetaTags} />
      <Hero />
      <ProjectList />
      <Skills />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
