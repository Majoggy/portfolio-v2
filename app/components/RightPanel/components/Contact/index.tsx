import { Section } from '../Section';
import { ContactCard, ContactGrid, IconWrapper } from './styled';
import { EmailIcon } from './svgs/EmailIcon';
import { GitHubIcon } from './svgs/GitHubIcon';
import { LinkedInIcon } from './svgs/LinkedInIcon';

const contactDetails = [
  { href: 'mailto:cbaker87@gmail.com', svg: EmailIcon },
  { href: 'https://www.linkedin.com/in/cpr-baker/', svg: LinkedInIcon },
  { href: 'https://www.github.com/majoggy/', svg: GitHubIcon },
];

// todo - fix how this looks on ultrawide screens

export const Contact = () => {
  return (
    <Section mb="0" label="Contact" id="contact">
      <ContactGrid>
        {contactDetails.map((contact) => (
          <ContactCard key={contact.href} href={contact.href}>
            <IconWrapper>
              <contact.svg />
            </IconWrapper>
          </ContactCard>
        ))}
      </ContactGrid>
    </Section>
  );
};
