import { Wrapper } from './styled';
import { Employment } from './components/Employment';
import { Projects } from './components/Projects';

export const RightPanel = () => {
  return (
    <Wrapper>
      <Employment />
      <Projects />
    </Wrapper>
  );
};
