import { CodeItem, Container, InfosContainer, TextContainer } from './styles';
import picture from '../../assets/pessoa.webp';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Andreia</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos </span>
            {'\u007B'}
            <div>
              Nome: <span className="blue">Andreia</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Costa</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo </span>
            {'\u007B'}
            <div>
              Função: <span className="blue">Dev FullStack</span>
            </div>
            <div>
              Empresa: <span className="blue">Trinus Co</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
