import styled from 'styled-components';
import { motion } from 'framer-motion';

export default styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  will-change: transform;
  z-index: ${({ theme }) => theme.zIndex.menu};
`;
