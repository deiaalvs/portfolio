import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Experiences } from '../components/Experiences';
import { HomeContainer } from '../styles/HomeContainer.styles';
import { Projects } from '../components/Projects';
import { TechExpertise } from '../components/TechExpertise';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects />
        <TechExpertise />
      </main>
    </HomeContainer>
  );
}
