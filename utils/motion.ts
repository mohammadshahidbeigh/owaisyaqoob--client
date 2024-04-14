export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function sliderVariants(delay: number) {
  return {
    initial: {
      x: "100%", // Start the text off-screen to the right
    },
    animate: {
      x: "-200%", // Move the text across the screen to the left
      transition: {
        repeat: Infinity, // Repeat the animation infinitely
        duration: 10, // Set the duration of each animation cycle
        ease: "linear", // Use linear easing for constant speed
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};
