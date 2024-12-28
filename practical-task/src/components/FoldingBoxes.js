import React, { useEffect, useRef } from 'react';
import './styles.css';

const sections = [
  {
    id: 1,
    title: 'Creation',
    content: `
      You have an idea? We have the method.
      We help you choose the best sound format for your project: the one that will meet your goals, your desires, and make your message shine.
      Editorial construction, duration, narration style, choice of voices, design, technical needs: together, we give shape to your project.
    `,
  },
  {
    id: 2,
    title: 'Production',
    content: `
      For each project, a team of passionate, selected, and dedicated professionals intervenes at each stage and according to your needs:
      Pre-production → writing the script, casting the voices, choosing the sound identity.
      Recording → in a studio, on-site, or relocated to a mobile studio.
      Post-production → editing, sound design, mixing, mastering.
    `,
  },
  {
    id: 3,
    title: 'Diffusion',
    content: `
      Having a podcast is good. Getting it heard is better.
      Hosting of content, uploading to platforms, audience optimization, and monitoring of listening statistics. We take care of everything!
    `,
  },
];

const FoldingBoxes = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      const sections = container.querySelectorAll('.folding-section');
      const scrollTop = container.scrollTop;

      sections.forEach((section, index) => {
        const offset = scrollTop - index * window.innerHeight;
        section.style.transform = `rotateX(${Math.min(Math.max(offset / 5, -90), 90)}deg)`;
      });
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="folding-container">
      {sections.map((section, index) => (
        <div key={section.id} className="folding-section">
          <div className="top-left">
            <h2>{section.title}</h2>
            <hr/>
            <div className="page-number">{index + 1}</div>
          </div>
          <div className="right-side">
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoldingBoxes;
