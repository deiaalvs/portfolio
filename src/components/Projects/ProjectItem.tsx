/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from './styles';

interface IProjectProps {
  projectName: string;
  projectType: string;
  projectLink: string;
  projectImg: string;
}

export default function ProjectItem({
  projectName,
  projectType,
  projectLink,
  projectImg
}: IProjectProps) {
  return (
    <ProjectContainer imgUrl={projectImg}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {projectName}</h1>
          <h2>- {projectType}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`projetos/${projectLink}`}>
          <a>
            Ver mais
            <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}
