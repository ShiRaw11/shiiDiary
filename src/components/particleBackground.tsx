'use client'
import React from 'react';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import ParticlesConfig from '@/config/particlesConfig';

export const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log(container);
  }, []);

  return (
    <div id='particle-background' className='absolute top-0 left-0 w-full h-full -z-10'>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig}
      />
    </div>
  );
};
