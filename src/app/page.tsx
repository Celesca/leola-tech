import { Contact, GridBackground, Hero, Navbar, Solutions, Team } from "@/components";

export default function Home() {
  return (
    <GridBackground>
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Team />
        <Contact />
      </main>
    </GridBackground>
  );
}
