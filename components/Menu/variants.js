export const listVariants = {
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const listItemsVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export const linkVariants = {
  initial: ({ isMobile }) => {
    return isMobile ? { x: 0 } : { x: -74 };
  },
  hover: ({ isMobile, color }) => {
    return isMobile ? { color } : { x: 0 };
  },
};

export const videoRevealVariants = {
  hidden: { width: 0 },
  show: { width: '100%' },
};

export const videoVariants = {
  hidden: { opacity: 0, transition: { delay: 0.05 } },
  show: { opacity: 1 },
};

export const transition = {
  duration: 0.2,
  ease: [0.4, 0, 0.2, 1],
};
