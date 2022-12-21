import { lighten } from 'polished';
import styled from 'styled-components';

interface INavLinkContainerProps {
  isActive: boolean;
}

export const NavLinkContainer = styled.li<INavLinkContainerProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive
        ? ({ theme }) => theme.primary
        : ({ theme }) => theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? ({ theme }) => lighten(0.2, theme.primary)
          : ({ theme }) => lighten(0.2, theme.textHighlight)};
    }
  }
`;
