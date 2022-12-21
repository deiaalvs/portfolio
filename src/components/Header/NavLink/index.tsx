import { NavLinkContainer } from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface INavLinkProps {
  title: string;
  path: string;
}

export function NavLink({ title, path }: INavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === path;
  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
