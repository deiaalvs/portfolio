import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import TitleSection from '../TitleSection';
import { Container } from './styles';
import TechExpertiseItem from './TechExpertiseItem';

export function TechExpertise() {
  return (
    <Container>
      <TitleSection title="Conhecimentos" />
      <section>
        <TechExpertiseItem title="HTML" icon={<AiFillHtml5 />} />
        <TechExpertiseItem title="CSS" icon={<FaCss3Alt />} />
        <TechExpertiseItem title="Javascript" icon={<IoLogoJavascript />} />
        <TechExpertiseItem title="React" icon={<FaReact />} />
      </section>
    </Container>
  );
}
