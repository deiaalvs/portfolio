/* eslint-disable jsx-a11y/anchor-is-valid */
import Prismic from '@prismicio/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Header } from '../../../components/Header';
import { ProjectBanner } from '../../../components/ProjectBanner';
import { ProjectDetailContainer } from '../../../styles/ProjectDetailStyles';
import { getPrismicClient } from '../../../services/prismic';

interface IProjectProps {
  projectName: string;
  projectType: string;
  projectDescription: string;
  projectLink: string;
  projectImg: string;
}

interface IHomeProps {
  projects: IProjectProps;
}

export default function ProjectDetail({ projects }: IHomeProps) {
  function handleProjectView() {
    window.open(projects.projectLink);
  }

  return (
    <ProjectDetailContainer>
      <Header />
      <ProjectBanner
        projectName={projects.projectName}
        projectType={projects.projectType}
        projectImg={projects.projectImg}
      />
      <main>
        <p>{projects.projectDescription}</p>
        <button type="button" onClick={handleProjectView}>
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectDetailContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projects = await prismic.query([
    Prismic.Predicates.at('document.type', 'portfolio_projects')
  ]);

  const paths = projects.results.map(project => ({
    params: {
      projeto: project.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { projeto } = context.params;

  const projectResponse = await prismic.getByUID(
    'portfolio_projects',
    String(projeto),
    {}
  );

  const projects = {
    projectId: projectResponse.uid,
    projectName: projectResponse.data.projectName,
    projectType: projectResponse.data.projectType,
    projectDescription: projectResponse.data.projectDescription,
    projectLink: projectResponse.data.projectLink.url,
    projectImg: projectResponse.data.projectImg.url
  };

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
