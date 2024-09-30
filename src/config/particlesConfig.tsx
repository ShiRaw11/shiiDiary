const isSmallScreen = window.innerWidth <= 768; 


const ParticlesConfig = {
  autoplay: true,
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  particles: {
    number: {
      value: isSmallScreen ? 13 : 22, // Fewer particles on small screens
      density: {
        enable: false,
        value_area: isSmallScreen ? 400 : 800, // Adjust value area for small screens
      },
    },
    color: {
      value: '#172554',
    },
    shape: {
      type: 'star',
      options: {
        sides: 5,
      },
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: isSmallScreen ? 2 : 3, // Smaller particles on small screens
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    rotate: {
      value: 0,
      random: true,
      direction: 'clockwise',
      animation: {
        enable: true,
        speed: isSmallScreen ? 2 : 5, // Slower rotation on small screens
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: isSmallScreen ? 300 : 600, // Shorter lines on small screens
      color: '#172554',
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: isSmallScreen ? 1 : 2, // Slower movement on small screens
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: ['grab'],
      },
      onclick: {
        enable: false,
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: isSmallScreen ? 200 : 400, // Shorter grab distance on small screens
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  background: {
    color: '',
    image: "url('https://i.pinimg.com/736x/90/7f/13/907f135e046add9ddd187b49697ea527.jpg')",
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
};

export default ParticlesConfig;
