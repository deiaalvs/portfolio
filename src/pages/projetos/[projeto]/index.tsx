/* eslint-disable jsx-a11y/anchor-is-valid */
import { Header } from '../../../components/Header';
import { ProjectBanner } from '../../../components/ProjectBanner';
import { ProjectDetailContainer } from '../../../styles/ProjectDetailStyles';
import ecommerce from '../../../assets/ecommerce.png';

export default function ProjectDetail() {
  return (
    <ProjectDetailContainer>
      <Header />
      <ProjectBanner
        projectName="Projeto 01"
        projectType="Ecommerce"
        projectImg={ecommerce}
      />
      <main>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
          incidunt. Voluptatum vero iure fugiat sapiente esse illum sunt in, ut
          ipsa facilis maxime? Pariatur soluta explicabo placeat accusantium
          quod quas officiis enim aspernatur sunt? Tenetur, distinctio.
          Cupiditate, quia dolorum eius esse eum voluptas enim ad et quidem
          corporis quis maxime soluta modi quas velit exercitationem voluptatem
          itaque labore nesciunt vitae impedit ab dignissimos omnis iste?
          Consectetur sequi praesentium deserunt aliquam quibusdam quod ab
          debitis, porro neque itaque quaerat dicta adipisci.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectDetailContainer>
  );
}
