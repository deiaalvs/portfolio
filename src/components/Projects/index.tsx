/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import TitleSection from '../TitleSection';
import ProjectItem from './ProjectItem';
import ecommerce from '../../assets/ecommerce.png';

import { Container } from './styles';

export function Projects() {
  return (
    <Container>
      <TitleSection title="Últimos Projetos" />

      <section>
        <ProjectItem
          projectName="Projeto 01"
          projectType="Ecommerce"
          projectLink="projetos"
          projectImg={ecommerce}
        />
        <ProjectItem
          projectName="Projeto 01"
          projectType="Ecommerce"
          projectLink="projetos"
          projectImg={ecommerce}
        />
        <ProjectItem
          projectName="Projeto 01"
          projectType="Ecommerce"
          projectLink="projetos"
          projectImg={ecommerce}
        />
        <ProjectItem
          projectName="Projeto 01"
          projectType="Ecommerce"
          projectLink="projetos"
          projectImg={ecommerce}
        />
        <ProjectItem
          projectName="Projeto 01"
          projectType="Ecommerce"
          projectLink="projetos"
          projectImg={ecommerce}
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
