import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Nav } from "./components/Nav";
import { Process } from "./components/Process";
import { Stack } from "./components/Stack";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <div className="app">
      <div className="scanlight" aria-hidden="true" />
      <Nav />
      <Hero variant="outline" />
      <Marquee speed={40} />
      <Work />
      <Process />
      <Stack />
      <Contact />
      <div className="grain" aria-hidden="true" />
    </div>
  );
}
