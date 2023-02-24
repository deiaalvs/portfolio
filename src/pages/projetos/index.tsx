import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { Header } from '../../components/Header';
import ProjectItem from '../../components/ProjectItem/index';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
import { getPrismicClient } from '../../services/prismic';

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

export default function Projetos({ projects }: IHomeProps) {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        {projects.map(project => (
          <ProjectItem
            key={project.projectId}
            projectName={project.projectName}
            projectType={project.projectType}
            projectLink={project.projectId}
            projectImg={project.projectImg}
          />
        ))}
      </main>
    </ProjetosContainer>
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
