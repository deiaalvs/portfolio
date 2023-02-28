/* eslint-disable jsx-a11y/anchor-is-valid */
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { Header } from '../../../components/Header';
import { ProjectBanner } from '../../../components/ProjectBanner';
import { ProjectDetailContainer } from '../../../styles/ProjectDetailStyles';
import { getPrismicClient } from '../../../services/prismic';
import { LoadingScreen } from '../../../components/LoadingScreen';

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

  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjectDetailContainer>
      <Head>
        <title>{projects.projectName} | Meu portfólio</title>
        <meta name="description" content={projects.projectDescription} />
        <meta property="og:image" content={projects.projectImg} />
        <meta property="og:image:secure_url" content={projects.projectImg} />
        <meta name="twitter:image" content={projects.projectImg} />
        <meta name="twitter:image:src" content={projects.projectImg} />
        <meta property="og:description" content={projects.projectDescription} />
      </Head>
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
