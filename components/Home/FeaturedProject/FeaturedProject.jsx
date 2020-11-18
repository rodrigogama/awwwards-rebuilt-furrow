import React from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useMenuContext } from '../../../context/menu';
import useCursorStyle from '../../../hooks/useCursorStyle';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useStyledTheme from '../../../hooks/useStyledTheme';
import AnimateOnScreen from '../../AnimateOnScreen';
import Arrow from '../../Icons/Arrow';
import {
  ContentSection,
  ProjectAnchor,
  ProjectInfo,
  ProjectTitle,
  VideoPreview,
  MenuContainer,
  MenuButton,
} from './styles';

const transition = {
  duration: 0.45,
  ease: [0.4, 0, 0.2, 1],
};

const FeaturedProject = () => {
  const controlsInfo = useAnimation();
  const controlsArrow = useAnimation();
  const theme = useStyledTheme();
  const [{ isMenuOpen }] = useMenuContext();
  const {
    addCursorColor,
    resetCursorColor,
    addCursorBorder,
    removeCursorBorder,
  } = useCursorStyle();
  const isTabletView = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.tablet}px)`,
  );

  const handleMouseEnter = React.useCallback(() => {
    addCursorBorder();
    addCursorColor(theme.text);
  }, [addCursorColor, addCursorBorder, theme.text]);

  const handleMouseLeave = React.useCallback(async () => {
    if (isMenuOpen) return;

    removeCursorBorder();
    resetCursorColor();
  }, [removeCursorBorder, resetCursorColor, isMenuOpen]);

  const handleAnchorHoverStart = React.useCallback(() => {
    addCursorBorder();

    // animate controls
    controlsInfo.start({ opacity: 1 });
    controlsArrow.start({ x: 0 });
  }, [addCursorBorder, controlsInfo, controlsArrow]);

  const handleAnchorHoverEnd = React.useCallback(() => {
    removeCursorBorder();

    // animate controls
    controlsInfo.start({ opacity: 0 });
    controlsArrow.start({ x: isTabletView ? -25.19 : -33 });
  }, [removeCursorBorder, controlsInfo, controlsArrow, isTabletView]);

  React.useEffect(() => {
    // animate arrow programmatically because initial prop was not working properly.
    // I probably did something wrong :P
    controlsArrow.start({ x: isTabletView ? -25.19 : -33 });
  }, [controlsArrow, isTabletView]);

  return (
    <ContentSection>
      <AnimateOnScreen>
        <motion.div>
          <Link href="/projects/not-humble" passHref>
            <ProjectAnchor
              onHoverStart={handleAnchorHoverStart}
              onHoverEnd={handleAnchorHoverEnd}
            >
              <ProjectInfo>
                <h3>Featured Project</h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={controlsInfo}
                  transition={transition}
                  className="project-info"
                >
                  <h4>PEI Seafood</h4>
                  <h4>2019</h4>
                </motion.div>
                <ProjectTitle>
                  NOT <br /> HUMBLE
                  <span className="arrow">
                    <Arrow animate={controlsArrow} transition={transition} />
                  </span>
                </ProjectTitle>
              </ProjectInfo>
              <VideoPreview>
                <video loop autoPlay muted src="videos/featured-video.mp4" />
              </VideoPreview>
            </ProjectAnchor>
          </Link>
        </motion.div>
      </AnimateOnScreen>
      <AnimateOnScreen>
        <MenuContainer>
          <MenuButton
            sticky={false}
            title="All Projects"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </MenuContainer>
      </AnimateOnScreen>
    </ContentSection>
  );
};

export default FeaturedProject;
