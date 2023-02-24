/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import TitleSection from '../TitleSection';
import ProjectItem from './ProjectItem';
import ecommerce from '../../assets/ecommerce.png';
import { Container } from './styles';

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

export function Projects({ projects }: IHomeProps) {
  return (
    <Container>
      <TitleSection title="Últimos Projetos" />

      <section>
        {projects.slice(0, 3).map(project => (
          <ProjectItem
            key={project.projectId}
            projectName={project.projectName}
            projectType={project.projectType}
            projectLink={project.projectId}
            projectImg={project.projectImg}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
