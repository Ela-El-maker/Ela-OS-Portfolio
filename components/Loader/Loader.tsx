import React, { useEffect, useState, useMemo } from 'react';
import * as Styled from './Loader.styles';

export interface Props {
  isOnScreen: boolean;
  loadingDuration: number;
}

const BOOT_LOGS = [
  "[ OK ] Initializing microkernel...",
  "[ OK ] Detecting hardware architectures...",
  "[ INFO ] Allocating virtual memory paging...",
  "[ OK ] V8 Engine optimization complete.",
  "[ WARN ] Prisma Client: connection pooled.",
  "[ OK ] Establishing secure SSH handshake...",
  "[ OK ] Loading GUI assets...",
  "[ OK ] System environment stable."
];

const Loader = ({ isOnScreen, loadingDuration }: Props): JSX.Element => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [percent, setPercent] = useState(0);
  const [specs, setSpecs] = useState({ cpu: 0, ram: 0, temp: 42 });

  useEffect(() => {
    if (!isOnScreen) return;

    // 1. Hardware Flux Simulation
    const specInterval = setInterval(() => {
      setSpecs({
        cpu: Math.floor(Math.random() * 15 + 20),
        ram: Number((Math.random() * 0.5 + 2.1).toFixed(1)),
        temp: Math.floor(Math.random() * 5 + 40)
      });
    }, 1000);

    // 2. Smooth Percentage Increments
    const perInterval = setInterval(() => {
      setPercent(prev => (prev < 100 ? prev + 1 : 100));
    }, loadingDuration / 100);

    // 3. Log Step Controller
    const stepInterval = setInterval(() => {
      setStatusIndex(prev => (prev < BOOT_LOGS.length - 1 ? prev + 1 : prev));
    }, loadingDuration / BOOT_LOGS.length);

    return () => {
      clearInterval(specInterval);
      clearInterval(perInterval);
      clearInterval(stepInterval);
    };
  }, [isOnScreen, loadingDuration]);

  // Only show the last 4 logs for the rolling effect
  const visibleLogs = useMemo(() => 
    BOOT_LOGS.slice(Math.max(0, statusIndex - 3), statusIndex + 1), 
  [statusIndex]);

  return (
    <Styled.Overlay isOnScreen={isOnScreen} loadingDuration={loadingDuration}>
      <Styled.Scanline />
      
      <Styled.TerminalContainer>
        {/* Top Header */}
        <Styled.Header>
          <div className="title">SYSTEM_BOOT_SEQUENCE_V.2.0.4</div>
          <div className="percent">{percent}%</div>
        </Styled.Header>

        {/* Rolling Logs */}
        <Styled.LogArea>
          {visibleLogs.map((log, i) => (
            <div key={i} className="log-line">{log}</div>
          ))}
          <Styled.Cursor />
        </Styled.LogArea>

        {/* Central Visualizer */}
        <Styled.VisualizerArea>
          <Styled.HexGrid />
          <Styled.PulseCircle />
        </Styled.VisualizerArea>

        {/* Hardware Footer */}
        <Styled.StatsGrid>
          <div className="stat">
            <span className="label">CPU</span>
            <div className="value">{specs.cpu}%</div>
          </div>
          <div className="stat">
            <span className="label">MEM</span>
            <div className="value">{specs.ram}GB</div>
          </div>
          <div className="stat">
            <span className="label">TMP</span>
            <div className="value">{specs.temp}°C</div>
          </div>
        </Styled.StatsGrid>

        {/* Modern Segmented Progress */}
        <Styled.ProgressWrapper>
          {[...Array(40)].map((_, i) => (
            <Styled.BarSegment 
              key={i} 
              active={i / 40 < percent / 100} 
            />
          ))}
        </Styled.ProgressWrapper>
      </Styled.TerminalContainer>

      <Styled.CornerDecor position="top-left" />
      <Styled.CornerDecor position="bottom-right" />
    </Styled.Overlay>
  );
};

export default Loader;