import { ReactNode } from 'react';
import { TechExpertiseContainer } from './styles';

interface ITechExpertiseItemProps {
  title: string;
  icon: ReactNode;
}

export default function TechExpertiseItem({
  title,
  icon
}: ITechExpertiseItemProps) {
  return (
    <TechExpertiseContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </TechExpertiseContainer>
  );
}
