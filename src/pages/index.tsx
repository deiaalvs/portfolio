import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Experiences } from '../Experiences';
import { HomeContainer } from '../styles/HomeContainer.styles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences />
      </main>
    </HomeContainer>
  );
}
