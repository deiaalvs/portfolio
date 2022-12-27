import { useEffect, useState } from 'react';
import TitleSection from '../TitleSection';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

export function Experiences() {
  const targetTime = new Date('2022-11-22').getTime();

  const [currentTime, setCurrentTime] = useState(Date.now());
  //const currentTime = new Date ("2024-11-11").getTime()
  const timeBetween = currentTime - targetTime;
  const months = Math.floor(timeBetween / (1000 * 60 * 60 * 24) / 30);
  const years = Math.floor(timeBetween / (1000 * 60 * 60 * 24) / 30 / 12);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 8.64e7);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <TitleSection
        title={
          months > 1 && months < 12
            ? `${months} meses`
            : months >= 12 && months < 24
            ? `${years} ano`
            : months >= 24
            ? `${years} anos`
            : `${months} mês`
        }
        description="de experiência"
      />
      <section>
        <ExperienceItem
          year="2022"
          title="Desenvolvedora FullStack Junior"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas magni beatae explicabo error laboriosam est in nam similique temporibus? Ad."
        />
        <ExperienceItem
          year="2022"
          title="Desenvolvedora FullStack Junior"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas magni beatae explicabo error laboriosam est in nam similique temporibus? Ad."
        />
        <ExperienceItem
          year="2022"
          title="Desenvolvedora FullStack Junior"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas magni beatae explicabo error laboriosam est in nam similique temporibus? Ad."
        />
        <ExperienceItem
          year="2022"
          title="Desenvolvedora FullStack Junior"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas magni beatae explicabo error laboriosam est in nam similique temporibus? Ad."
        />
      </section>
    </Container>
  );
}
