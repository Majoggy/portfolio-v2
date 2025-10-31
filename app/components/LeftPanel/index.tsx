import { Wrapper, Name, Title, LinkList, LinkItem, Link } from "./styled";

export const LeftPanel = () => {
  return (
    <Wrapper>
      <Name>Christian Baker</Name>
      <Title>Full-Stack Software Engineer</Title>
      <LinkList>
        <LinkItem>
          <Link href="#about">About</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#projects">Projects</Link>
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
}