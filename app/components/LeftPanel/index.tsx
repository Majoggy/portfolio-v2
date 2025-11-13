import { Wrapper, Name, Title, About } from './styled';
import { LinkSection } from './components/LinkSection';
import type { LeftPanelData } from '@/lib/types';

interface Props {
  data: LeftPanelData;
}

export const LeftPanel = ({ data }: Props) => {
  return (
    <Wrapper>
      <Name>{data.name}</Name>
      <Title>{data.jobTitle}</Title>
      <About>{data.about}</About>
      <LinkSection links={data.links} />
    </Wrapper>
  );
};
