import { ReactNode } from 'react';
import { Container } from './styles';

interface ITitleSectionProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

function TitleSection({ title, description }: ITitleSectionProps) {
  return (
    <Container>
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}

export default TitleSection;
