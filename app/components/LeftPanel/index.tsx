import { Wrapper, Name, Title, About } from './styled';
import { LinkSection } from './components/LinkSection';

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
      <LinkSection />
    </Wrapper>
  );
};
