import { Header } from '../../components/Header';
import ProjectItem from '../../components/ProjectItem/index';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
import ecommerce from '../../assets/ecommerce.png';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjectItem
          projectName="Projeto 01"
          projectType="Ecommerce"
          projectLink="teste"
          projectImg={ecommerce}
        />
        <ProjectItem
          projectName="Projeto 02"
          projectType="Ecommerce"
          projectLink="teste"
          projectImg={ecommerce}
        />
        <ProjectItem
          projectName="Projeto 03"
          projectType="Ecommerce"
          projectLink="teste"
          projectImg={ecommerce}
        />
        <ProjectItem
          projectName="Projeto 04"
          projectType="Ecommerce"
          projectLink="teste"
          projectImg={ecommerce}
        />
      </main>
    </ProjetosContainer>
  );
}
