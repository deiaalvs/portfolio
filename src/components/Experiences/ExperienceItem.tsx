import { ItemContainer } from './styles';

interface IExperienceItemProps {
  year: string;
  title: string;
  description: string;
}

export default function ExperienceItem({year, title, description} : IExperienceItemProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
