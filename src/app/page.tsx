import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Enterprise } from "@/components/sections/Enterprise";
import { Experience } from "@/components/sections/Experience";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Terminal } from "@/components/sections/Terminal";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Enterprise />
      <Stack />
      <Terminal />
      <GitHubSection />
      <Journey />
      <Contact />
    </>
  );
}
