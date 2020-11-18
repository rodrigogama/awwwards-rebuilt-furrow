import React from 'react';
import { motion } from 'framer-motion';
import useCursorStyle from '../../../hooks/useCursorStyle';
import useWindowSize from '../../../hooks/useWindowSize';
import useStyledTheme from '../../../hooks/useStyledTheme';
import CanvasEraser from '../../CanvasEraser';
import { BannerSection, BannerTitle, VideoContainer } from './styles';

const titleAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemTitleAnimation = {
  initial: { y: '100vh' },
  animate: {
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Banner = () => {
  const canvasRef = React.useRef(null);
  const windowSize = useWindowSize();
  const theme = useStyledTheme();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <BannerSection style={{ height: windowSize.height }}>
      <VideoContainer>
        <video
          src="/videos/banner.mp4"
          height="100%"
          width="100%"
          loop
          autoPlay
          muted
        />
      </VideoContainer>
      <CanvasEraser
        ref={canvasRef}
        width={windowSize.width}
        height={windowSize.height}
        size={120}
        background={theme.background}
        onMouseEnter={addCursorBorder}
        onMouseLeave={removeCursorBorder}
      />
      <BannerTitle
        variants={titleAnimation}
        initial="initial"
        animate="animate"
      >
        <motion.span variants={itemTitleAnimation}>DIG</motion.span>
        <motion.span variants={itemTitleAnimation}>DEEP</motion.span>
      </BannerTitle>
    </BannerSection>
  );
};

export default React.memo(Banner);
