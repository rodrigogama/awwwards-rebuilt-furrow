import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  transform: translateY(-50%);
  top: 50%;
  right: 0;
  width: 53.08px;
  height: 171.358px;
  z-index: ${({ theme }) => theme.zIndex.awwwards};
`;
