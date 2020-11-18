import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';
import { secondaryFontStyle } from '../../../styles/shared/text';
import DefaultMenuButton from '../../MenuButton';

export const ContentSection = styled(motion.section)`
  ${containerStyles};
  position: relative;
  margin-bottom: 200px;

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 100px;
  `};
`;

export const ProjectAnchor = styled(motion.a)`
  display: block;
  width: 100%;
  height: 480px;
  margin: 0 0 215px;

  ${({ theme }) => theme.breakpoints.tablet`
    height: 190px;
    margin-bottom: 208px;
  `};
`;

export const ProjectInfo = styled(motion.div)`
  margin-left: 8.333%;
  width: 83.333%;
  position: relative;

  & h3,
  & .project-info {
    position: absolute;
    top: 75px;
    z-index: 1;
  }

  & h3 {
    ${secondaryFontStyle};
  }

  & .project-info {
    right: 0;

    & h4 {
      ${secondaryFontStyle};
      display: inline-block;
      font-size: 0.875rem;
      line-height: 23px;
      margin-left: 32px;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.small`
    margin-left: 0;
    width: 83.333%;

    & .project-info {
      display: none;
    }
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    & h3 {
      font-size: 1.125rem;
      line-height: 1.2777777778;
      top: 17px;
    }
  `};
`;

export const ProjectTitle = styled(motion.h1)`
  position: absolute;
  top: 347px;
  left: -3px;
  z-index: 1;

  & .arrow {
    display: block;
    overflow: hidden;
    margin: 25px 0 0 3px;
    height: 57px;
    width: 101px;

    & svg path {
      fill: ${({ theme }) => theme.text};
    }
  }

  ${({ theme }) => theme.breakpoints.tablet`
    top: 166px;
    left: 0;
    font-size: 3.75rem;
    line-height: 0.7166666667;

    & .arrow {
      margin: 10px 0 0 2px;
      width: 76.19px;
      height: 43px;
    }
  `};
`;

export const VideoPreview = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 480px;
  margin: 0;

  & video {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.small`
    width: calc(100% + 64px);
    margin-left: -32px;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    height: 190px;
  `};
`;

export const MenuContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${({ theme }) => theme.breakpoints.tablet`
    justify-content: flex-start;
  `};
`;

export const MenuButton = styled(DefaultMenuButton)`
  width: calc(25% - 30px);
  background-color: ${({ theme }) => theme.colors.red};

  &::before,
  &::after {
    background: ${({ theme }) => theme.background};
  }

  & span {
    position: relative;
    opacity: 1;
    right: 0;
    color: ${({ theme }) => theme.background};
  }

  ${({ theme }) => theme.breakpoints.medium`
    width: calc(33.333% - 30px);
  `};

  ${({ theme }) => theme.breakpoints.small`
    width: 100%;
    max-width: 235px;

    & span {
      display: inline;
    }
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    height: 47px;
    max-width: 215px;
    padding: 12px 20px;

    & span {
      font-size: 1.125rem;
      line-height: 1.2777777778;
    }
  `};
`;
