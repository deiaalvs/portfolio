import TitleSection from '../TitleSection';
import Form from './Form';
import { Container } from './styles';

export function ContactForm() {
  return (
    <Container>
      <TitleSection
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve
          </>
        }
      />

      <Form />
    </Container>
  );
}
