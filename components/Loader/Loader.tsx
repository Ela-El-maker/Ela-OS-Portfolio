import React, { useEffect, useState } from 'react';
import * as Styled from './Loader.styles';

export interface Props {
  isOnScreen: boolean;
  loadingDuration: number;
}

const statusSteps = [
  "Initializing...",
  "Checking Hardware",
  "Optimizing V8 Engine",
  "Verifying Prisma Client",
  "Establishing Secure Link",
  "System Stable"
];

const Loader = ({ isOnScreen, loadingDuration }: Props): JSX.Element => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [specs, setSpecs] = useState({ cpu: 0, ram: 0, ping: 0 });

  useEffect(() => {
    if (!isOnScreen) return;

    // Simulate real-time hardware flux
    const specInterval = setInterval(() => {
      setSpecs({
        cpu: Math.floor(Math.random() * (45 - 30) + 30), // 30-45%
        ram: (Math.random() * (2.4 - 2.1) + 2.1).toFixed(1) as any, // 2.1-2.4GB
        ping: Math.floor(Math.random() * (12 - 5) + 5) // 5-12ms
      });
    }, 800);

    const stepInterval = setInterval(() => {
      setStatusIndex((prev) => (prev < statusSteps.length - 1 ? prev + 1 : prev));
    }, loadingDuration / statusSteps.length);

    return () => {
      clearInterval(specInterval);
      clearInterval(stepInterval);
    };
  }, [isOnScreen, loadingDuration]);

  return (
    <Styled.Overlay isOnScreen={isOnScreen} loadingDuration={loadingDuration}>
      {/* Top Left Spec Section */}
      <Styled.SpecOverlay>
        <div className="spec-item"><span className="label">CPU_LOAD:</span> {specs.cpu}%</div>
        <div className="spec-item"><span className="label">MEM_USE:</span> {specs.ram}GB</div>
        <div className="spec-item"><span className="label">NET_LATENCY:</span> {specs.ping}ms</div>
      </Styled.SpecOverlay>

      <Styled.GlassCard>
        <Styled.IconWrapper>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="5" width="14" height="14" rx="2" />
            <path d="M9 9h6v6H9z" />
            <path d="M9 1h1v4H9zM14 1h1v4h-1zM9 19h1v4H9zM14 19h1v4h-1zM1 9h4v1H1zM1 14h4v1H1zM19 9h4v1h-4zM19 14h4v1h-4z" />
          </svg>
        </Styled.IconWrapper>

        <Styled.StatusText>{statusSteps[statusIndex]}</Styled.StatusText>

        <Styled.ProgressBar>
          {[...Array(20)].map((_, i) => (
            <Styled.Segment 
              key={i} 
              active={i / 20 < (statusIndex + 1) / statusSteps.length} 
            />
          ))}
        </Styled.ProgressBar>
      </Styled.GlassCard>
      
      <Styled.AmbientGlow />
    </Styled.Overlay>
  );
};

export default Loader;