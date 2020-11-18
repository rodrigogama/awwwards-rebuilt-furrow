import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';
import { secondaryFontStyle } from '../../../styles/shared/text';

export const ContentSection = styled(motion.section)`
  ${containerStyles};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 200px;

  ${({ theme }) => theme.breakpoints.small`
    flex-direction: column;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 86px;
  `};
`;

export const TextWrapper = styled.div`
  margin-left: 8.333%;
  width: 58.333%;

  & h2 {
    margin: 0;
    margin-bottom: 44px;
    max-width: 600px;
    font-size: 2.625rem;
    line-height: 1;
    font-weight: 500;
  }

  & p {
    max-width: 448px;
    margin: 6.9px 0;
    line-height: 1.2777777778;
  }

  ${({ theme }) => theme.breakpoints.small`
    margin-left: 0;
    width: 100%;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    & h2 {
      font-size: 1.5rem;
      margin-bottom: 34px;
    }
  `};
`;

export const ServicesWrapper = styled.div`
  margin-left: 8.333%;
  width: 25%;
  padding-top: 15px;
  padding-left: 30px;

  & h3 {
    ${secondaryFontStyle};
  }

  ${({ theme }) => theme.breakpoints.small`
    margin-left: 0;
    padding-left: 0;
    width: 100%;
  `};
`;

export const AccordionToggle = styled.button`
  ${secondaryFontStyle};
  font-size: 0.875rem;
  position: relative;
  display: block;
  padding: 27px 0 0 35px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.red};

  &:hover:not([aria-expanded='true']) {
    color: ${({ theme }) => theme.text};

    &::before,
    &::after {
      width: 11px;
      transform: rotate(0deg);
    }

    &::before {
      left: 2px;
    }

    &::after {
      left: 13px;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    width: 18px;
    height: 4px;
    margin-top: 11.5px;
    background: ${({ theme }) => theme.colors.red};
    transition: all 0.1s ease-in-out;
  }

  &::before {
    left: 0;
    transform: rotate(45deg);
  }

  &::after {
    left: 10px;
    transform: rotate(-45deg);
  }

  &[aria-expanded='true'] {
    &::before,
    &::after {
      width: 11px;
      transform: rotate(0deg);
    }

    &::before {
      left: 2px;
    }

    &::after {
      left: 13px;
    }
  }
`;

export const AccordionContent = styled(motion.div)`
  padding-left: 35px;
  font-size: 0.875rem;
  line-height: 1.0714285714;
  letter-spacing: 0.5px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.red};

  & p {
    margin: 6.1px 0 0;
  }
`;
