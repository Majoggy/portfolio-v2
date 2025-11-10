import styled from 'styled-components';

export const Card = styled.div`
  border-left: 3px solid #667eea;
  padding-left: 30px;
  margin-bottom: 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -7px;
    top: 0;
    width: 11px;
    height: 11px;
    background: #667eea;
    border-radius: 50%;
  }
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  color: #ccd6f6;
  margin-bottom: 5px;
  font-weight: 600;
`;

export const Company = styled.div`
  color: #667eea;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Period = styled.div`
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

export const Responsibilities = styled.ul`
  color: #8892b0;
  margin-left: 20px;
  list-style-type: disc;
`;

export const Responsibility = styled.li`
  margin-bottom: 8px;
  line-height: 1.6;
`;

export const Description = styled.p`
  color: #8892b0;
  margin-bottom: 15px;
  line-height: 1.7;
`;
