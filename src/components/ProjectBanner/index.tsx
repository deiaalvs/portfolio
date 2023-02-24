import { Container } from './styles';

interface ProjectBannerProps {
  projectName: string;
  projectType: string;
  projectImg: string;
}

export function ProjectBanner({
  projectName,
  projectType,
  projectImg
}: ProjectBannerProps) {
  return (
    <Container imgUrl={projectImg}>
      <div className="overlay" />
      <section>
        <h1>{projectName}</h1>
        <h2>{projectType}</h2>
      </section>
    </Container>
  );
}
