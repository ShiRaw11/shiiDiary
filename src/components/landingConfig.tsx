'use client'
import React from 'react';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import LandingParticlesConfig from '@/config/landingParticles';
export const LandingParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log(container);
  }, []);

  return (
    <div id='particle-background' >
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={LandingParticlesConfig}
        style={{ position: 'absolute', top: 0, left: 0, width: '50px', height: '100px', zIndex: 1 }}
      />
    </div>
  );
};