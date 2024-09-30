const isSmallScreen = window.innerWidth <= 768;

const LandingParticlesConfig = {
  fullScreen: {
    enable:false,
  },
  particles: {
    number: {
      value: isSmallScreen ? 20 : 40, // Adjust number of particles based on screen size
      density: {
        enable: true,
        value_area: isSmallScreen ? 400 : 1000,
      },
    },
    color: {
      value: ['#ff4d4d', '#ff9900', '#ffff66', '#33cc33', '#66b3ff'], // Fireworks colors
    },
    shape: {
      type: "circle", // Circles for fireworks
    },
    opacity: {
      value: 1,
      anim: {
        enable: true,
        speed: 2,
        opacity_min: 0.2, // Particles fade out
      },
    },
    size: {
      value: isSmallScreen ? 3 : 5, // Adjust size for screens
      random: true,
      anim: {
        enable: true,
        speed: 10, // Particles shrink after explosion
        size_min: 0.1,
      },
    },
    life: {
      duration: {
        sync: false,
        value: 30, // Particles will live for 3 seconds
      },
      count: 5, // Increase the number of particles to be generated on each burst
    },
    line_linked: {
      enable: true, // Enable connectors between particles
      distance: isSmallScreen ? 50 : 100, // Distance threshold for connectors
      color: "#ffffff", // White connectors
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: isSmallScreen ? 4 : 8, // Speed for fireworks effect
      direction: "none",
      random: true,
      straight: false, // Non-linear movement
      out_mode: "out", // Particles disappear when moving out of bounds
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab", // Hover effect for connecting particles
      },
      onclick: {
        enable: true,
        mode: "push", // On click, trigger more particle bursts
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200, // Particle connection distance on hover
        line_linked: {
          opacity: 0.8,
        },
      },
      push: {
        particles_nb: 4, // Additional particles added on click
      },
    },
  },
  retina_detect: true,
  background: {
    color: '',
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

export default LandingParticlesConfig;
