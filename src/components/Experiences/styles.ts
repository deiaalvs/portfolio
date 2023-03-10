import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 19rem;
    transition: 0.5s;
  }

  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.textLight};
    font-size: 1rem;
    font-weight: 300;
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-28px);
  }

  &:nth-child(even) > div {
    margin-top: 4rem;
  }

  @media (max-width: 1000px) {
    > div {
      height: auto;
      padding-top: 1.5rem;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 700px) {
    &:hover > div {
      transform: translateY(0);
    }

    &:nth-child(even) > div {
      margin-top: 0;
    }

    > div {
      height: auto;
      padding-top: 2rem;
      max-width: 100%;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
