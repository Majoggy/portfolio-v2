import { Wrapper, Name, Title, LinkList, LinkItem, Link, About } from './styled';

export const LeftPanel = () => {
  return (
    <Wrapper>
      <Name>Christian Baker</Name>
      <Title>Full-Stack Software Engineer</Title>
      <About>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris.
      </About>
      <About>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris.
      </About>
      <LinkList>
        <LinkItem>
          <Link href="#projects">Projects</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#employment">Employment</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#contact">Contact</Link>
        </LinkItem>
        <LinkItem>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
        </LinkItem>
      </LinkList>
    </Wrapper>
  );
};
