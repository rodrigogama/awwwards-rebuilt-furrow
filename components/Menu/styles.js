import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../styles/shared/container';
import { secondaryFontStyle } from '../../styles/shared/text';
import DefaultBackdrop from '../Backdrop';
import DefaultSocialMedia from '../SocialMedia';
import MenuButton from '../MenuButton';

export const Backdrop = styled(DefaultBackdrop)`
  background: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.background};
`;

export const Container = styled.div`
  ${containerStyles};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.div`
  width: 100%;
  padding: 54px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled(Row)`
  & h3 {
    margin: -20px;
    margin-left: 0;
    ${secondaryFontStyle};
  }

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 29px 0;

    & h3 {
      font-size: 1.125rem;
      line-height: 1.2777777778;
    }
  `};
`;

export const Footer = styled(Row)`
  justify-content: flex-start;

  ${({ theme }) => theme.breakpoints.small`
    position: relative;
    flex-direction: column;
    align-items: flex-start;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 32px 0;
  `};
`;

export const FooterText = styled.p`
  ${secondaryFontStyle};
  line-height: 24px;
  margin: 0;
  flex-shrink: 0;

  &.link {
    display: inline-block;
    margin-right: 64px;

    &:hover {
      color: ${({ theme }) => theme.text};
    }
  }

  &.copyright {
    font-size: 0.875rem;
    line-height: 1.0714285714;
  }

  ${({ theme }) => theme.breakpoints.small`
    font-size: 0.875rem;
    line-height: 1.0714285714;

    &.copyright {
      position: absolute;
      right: 0;
      bottom: 54px;
      font-size: 0.6875rem;
      line-height: 1.1818181818;
    }
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    &.copyright {
      bottom: 32px;
    }
  `};
`;

export const SocialMedia = styled(DefaultSocialMedia)`
  justify-content: flex-end;
  width: 100%;

  & a svg path {
    fill: ${({ theme }) => theme.background};
  }

  ${({ theme }) => theme.breakpoints.small`
    width: unset;
    justify-content: flex-start;
  `};
`;

export const Navigation = styled.nav`
  height: 462px;

  ${({ theme }) => theme.breakpoints.small`
    position: absolute;
    top: 94px;
  `};
`;

export const List = styled(motion.ul)`
  display: inline-block;

  & li {
    display: block;
    overflow: hidden;
    float: left;
    clear: left;
  }
`;

export const Link = styled(motion.a)`
  display: flex;
  align-items: center;
  font-size: 57px;
  font-size: 3.5625rem;
  line-height: 1.5964912281;
  font-weight: 900;
  text-transform: uppercase;
  will-change: transform;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 1.75rem;
    line-height: 1.7857142857;
  `};
`;

export const ArrowContainer = styled.span`
  display: block;
  overflow: hidden;
  width: 68px;
  height: 57px;
  padding-right: 6px;
  margin-right: 6px;

  & svg {
    float: right;
    width: 101px;
    height: 57px;
  }

  ${({ theme }) => theme.breakpoints.small`
    display: none;
  `};
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;

  ${({ theme }) => theme.breakpoints.small`
    display: none;
  `};
`;

export const VideoReveal = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  will-change: width;
  transform: translateZ(0);
  background: ${({ theme }) => theme.colors.red};
`;

export const Video = styled(motion.video)`
  position: absolute;
  height: 100%;
  margin: 0;
  will-change: opacity;
  transform: translateZ(0);
  z-index: -1;
`;

export const Address = styled.address`
  margin-top: 17px;
  margin-bottom: 23px;
`;

export const CloseButton = styled(MenuButton)`
  margin: -20px;

  & span {
    color: ${({ theme }) => theme.background};
  }

  &::before,
  &::after {
    margin-top: 0;
    background: ${({ theme }) => theme.background};
  }

  &::before {
    transform: translateY(-50%) rotate(-45deg);
  }

  &::after {
    transform: translateY(-50%) rotate(45deg);
  }

  ${({ theme }) => theme.breakpoints.tablet`
    &::before {
      margin-top: 0;
    }

    &::after {
      margin-top: 0;
    }
  `};
`;
