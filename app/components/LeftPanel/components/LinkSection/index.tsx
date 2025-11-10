import { Link, LinkItem, LinkList } from './styled';
import { links } from '../../data';

export const LinkSection = () => {
  return (
    <LinkList>
      {links.map((link, index) => (
        <LinkItem key={index}>
          <Link
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >
            {link.label}
          </Link>
        </LinkItem>
      ))}
    </LinkList>
  );
};
