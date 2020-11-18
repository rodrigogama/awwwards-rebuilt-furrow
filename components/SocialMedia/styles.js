import styled from 'styled-components';
import { secondaryFontStyle } from '../../styles/shared/text';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: -10px;

  ${({ theme }) => theme.breakpoints.small`
    margin-left: -10px;
  `};
`;

export const Link = styled.a`
  ${secondaryFontStyle};
  padding: 0 10px;
  display: inline-block;
  vertical-align: middle;
  width: 41px;
  height: 21px;
  line-height: 24px;

  &:nth-of-type(2) {
    width: 31px;
    height: 24px;
  }

  &:hover svg path {
    fill: ${({ theme }) => theme.text};
  }
`;
