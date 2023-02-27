import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import Aos from 'aos';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Experiences } from '../components/Experiences';
import { HomeContainer } from '../styles/HomeContainer.styles';
import { Projects } from '../components/Projects';
import { TechExpertise } from '../components/TechExpertise';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { getPrismicClient } from '../services/prismic';
import 'aos/dist/aos.css';

interface IProjectProps {
  projectId: string;
  projectName: string;
  projectType: string;
  projectDescription: string;
  projectLink: string;
  projectImg: string;
}

interface IHomeProps {
  projects: IProjectProps[];
}

export default function Home({ projects }: IHomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects projects={projects} />
        <TechExpertise />
        <ContactForm />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'portfolio_projects')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projects = projectResponse.results.map(project => ({
    projectId: project.uid,
    projectName: project.data.projectName,
    projectType: project.data.projectType,
    projectDescription: project.data.projectDescription,
    projectLink: project.data.projectLink.url,
    projectImg: project.data.projectImg.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
