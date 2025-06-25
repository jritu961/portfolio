import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const BackgroundAnimation = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: '#0d1117',
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#f59e42',
      },
      shape: {
        type: 'character',
        character: {
          value: [
            'GIT', 'GITHUB', 'KAFKA', 'λ', '∞', '⚡', '⛓',
            'async', 'await', 'Promise', 'pipeline', 'commit', 'merge', 'branch', 'topic', 'consumer', 'producer', 'event', 'stream', 'node', 'push', 'pull', 'clone', 'fork', 'PR', 'issue', 'CI/CD', 'webhook', 'API', 'pub/sub', 'log', 'broker', 'partition', 'offset', 'replica', 'leader', 'zookeeper', 'cloud', 'devops', 'docker', 'k8s', 'microservice', 'scalable', 'distributed', 'event-driven'
          ],
          font: 'Poppins, monospace',
          style: '',
          weight: '700',
          fill: true,
        },
      },
      opacity: {
        value: 0.22,
        random: true,
      },
      size: {
        value: 26,
        random: {
          enable: true,
          minimumValue: 14,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 1.1,
        direction: 'right',
        straight: true,
        out_mode: 'out',
      },
      shadow: {
        enable: true,
        color: '#f59e42',
        blur: 8,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: false,
        },
        onclick: {
          enable: false,
        },
      },
    },
  };

  return (
    <div style={{ position: 'fixed', zIndex: -1, width: '100vw', height: '100vh' }}>
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
    </div>
  );
};

export default BackgroundAnimation; 