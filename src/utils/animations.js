// Common animation variants that can be reused across components

// Fade in animation
export const fadeIn = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}

// Slide in from bottom
export const slideUp = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.3
    }
  }
}

// Slide in from left
export const slideInLeft = {
  initial: {
    opacity: 0,
    x: -30
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 0.3
    }
  }
}

// Slide in from right
export const slideInRight = {
  initial: {
    opacity: 0,
    x: 30
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    x: 30,
    transition: {
      duration: 0.3
    }
  }
}

// Scale in animation
export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3
    }
  }
}

// Stagger children animation
export const staggerContainer = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// Child item for staggered animations
export const staggerItem = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2
  }
}

// Button hover animation
export const buttonHover = {
  scale: 1.03,
  transition: {
    duration: 0.2,
    ease: "easeInOut"
  }
}

// Button tap animation
export const buttonTap = {
  scale: 0.97
}

// For animated cards/sections
export const cardHover = {
  y: -5,
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  transition: {
    duration: 0.2
  }
}

// Page transitions for route changes
export const pageTransition = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
}