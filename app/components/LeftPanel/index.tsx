import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Wrapper, Name, Title, MarkdownContent } from './styled';
import { LinkSection } from './components/LinkSection';
import type { LeftPanelData } from '@/lib/types';

interface Props {
  data: LeftPanelData | null;
}

export const LeftPanel = ({ data }: Props) => {
  if (!data) {
    return <Wrapper />;
  }

  return (
    <Wrapper>
      <Name>{data.name}</Name>
      <Title>{data.jobTitle}</Title>
      <MarkdownContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.about}</ReactMarkdown>
      </MarkdownContent>
      <LinkSection links={data.links} />
    </Wrapper>
  );
};
