import { Link, LinkItem, LinkList } from './styled';
import type { LeftPanelLink } from '@/lib/types';

interface Props {
  links: LeftPanelLink[];
}

export const LinkSection = ({ links }: Props) => {
  return (
    <LinkList>
      {links.map((link, index) => (
        <LinkItem key={index}>
          <Link
            href={link.href}
            target={link.isExternal ? '_blank' : undefined}
            rel={link.isExternal ? 'noopener noreferrer' : undefined}
          >
            {link.label}
          </Link>
        </LinkItem>
      ))}
    </LinkList>
  );
};
