import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import AppBar from '../../components/AppBar';

const variants = {
  hidden: isTabletView => ({ y: isTabletView ? -81 : -131 }),
  show: { y: 0 },
};

const Footer = () => {
  const isTabletView = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.tablet}px)`,
  );

  return (
    <AppBar
      key={isTabletView}
      direction="up"
      renderAs="footer"
      variants={variants}
      initial={false}
      custom={isTabletView}
      transition={{
        duration: 0.7,
        ease: [0.666, 0, 0.237, 1],
      }}
    />
  );
};

export default React.memo(Footer);
