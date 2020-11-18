import React from 'react';
import BackgroundOverlay from './styles';

const transition = {
  duration: 0.9,
  ease: [0.4, 0, 0.2, 1],
};

const variants = {
  initial: {
    x: '-100%',
  },
  animate: {
    x: 0,
  },
};

const Backdrop = props => {
  React.useEffect(() => {
    const overflowY = window.getComputedStyle(document.body).overflowY;
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = overflowY;
    };
  }, []);

  return (
    <BackgroundOverlay
      variants={variants}
      transition={transition}
      initial="initial"
      animate="animate"
      exit="initial"
      {...props}
    />
  );
};

export default Backdrop;
