import React from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const transition = {
  delay: 0.3,
  translateY: {
    duration: 1,
    ease: [0, 0.7, 0.29, 0.97],
  },
  opacity: {
    duration: 1,
    ease: [0.25, 0.1, 0.25, 1.0],
  },
};

const variants = {
  show: { translateY: 0, opacity: 1 },
  hidden: { translateY: 60, opacity: 0 },
};

const AnimateOnScreen = ({ children: childrenProp }) => {
  const animation = useAnimation();
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      animation.start('show');
    }
  }, [animation, inView, inViewRef]);

  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const handleRef = node => {
      // Keep your own reference
      inViewRef(node);

      // Call the original ref, if any
      const { ref } = child;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref !== null) {
        ref.current = node;
      }
    };

    return React.cloneElement(child, {
      variants,
      transition,
      animate: animation,
      initial: 'hidden',
      ref: handleRef,
    });
  });

  return children;
};

export default React.memo(AnimateOnScreen);
