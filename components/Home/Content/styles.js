import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';

export const ContentSection = styled(motion.section)`
  ${containerStyles};

  margin-bottom: 210px;

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 107px;
  `};
`;

export const TextWrapper = styled.div`
  margin-left: 8.333%;
  width: calc(58.333% - 32px);

  ${({ theme }) => theme.breakpoints.small`
    width: 100%;
    margin-left: 0;
  `};
`;

export const Text = styled.h2`
  margin: 0;
  font-size: 2.625rem;
  line-height: 1;
  font-weight: 500;
  max-width: 640px;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 1.5rem;
    line-height: 1;

    & br {
      display: none;
    }
  `};
`;
