import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';
import { secondaryFontStyle } from '../../../styles/shared/text';

export const ContactSection = styled(motion.section)`
  ${containerStyles};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px 285px;
  color: ${({ theme }) => theme.colors.red};
  /* opacity: 1; */
  transform: translate3d(0, 60px, 0);
  /* transition: opacity 1s ease, transform 1s cubic-bezier(0, 0.7, 0.29, 0.97);
  transition-delay: 0.3s; */
  /* will-change: opacity, transform; */

  & .column {
    width: 33.333%;

    &:last-child {
      justify-content: flex-end;
    }

    & a:hover {
      color: ${({ theme }) => theme.text};
    }
  }

  & .contact-text {
    ${secondaryFontStyle};
    line-height: 28px;
    display: inline-block;
  }

  & address {
    padding: 0 8px;
  }

  ${({ theme }) => theme.breakpoints.medium`
    & .column {
      width: 41.666%;

      &:last-child {
        width: 16.666%;
      }
    }
  `};

  ${({ theme }) => theme.breakpoints.small`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    & .column {
      width: 100%;

      &:last-child {
        width: 100%;
        justify-content: flex-start;
        padding: 1px 0;
      }
    }

    & address {
      padding: 0;
    }
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 0 32px 156px;

    & address {
      padding: 17px 0 42px;
    }

    & .contact-text {
      font-size: 1.125rem;
      line-height: 21px;
    }
  `};
`;
