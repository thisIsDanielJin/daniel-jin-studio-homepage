import { Footer } from "./components/footer";
import { Hero } from "./Sections/hero";
import { About } from "./Sections/about";
import { Services } from "./Sections/services";
import { Projects } from "./Sections/projects";
import { Testimonials } from "./Sections/testimonials";
import { Timeline } from "./Sections/timeline";
import { Contact } from "./Sections/contact";

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Testimonials />
            <Timeline />
            <Contact />
            <Footer />
        </div>
    );
}
