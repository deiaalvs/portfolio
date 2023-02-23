/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { Container } from './styles';

interface IProjectItemProps {
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
}: IProjectItemProps) {
  return (
    <Container imgUrl={projectImg}>
      <Link href={`projetos/${projectLink}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{projectName}</h1>
            <h2>{projectType}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}
