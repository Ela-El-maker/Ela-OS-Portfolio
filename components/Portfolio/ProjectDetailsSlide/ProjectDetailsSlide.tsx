import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './ProjectDetailsSlide.styles';
import TextCarousel from '../TextCarousel/TextCarousel';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { ICarouselQuote } from '../../../types/portfolio';

export interface Props {
  slideHeight: string;
  slideBgColor: string;
  projectMobileImg: string;
  projectName: string;
  projectQuotes: ICarouselQuote[];
}

const ProjectDetailsSlide = ({
  slideHeight,
  slideBgColor,
  projectName,
  projectMobileImg,
  projectQuotes,
}: Props): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isElementVisible] = useIntersectionObserver(containerRef, {
    threshold: 0.5,
  });
  const [isOnScreen, setIsOnScreen] = useState(false);

  // **New state for allocation logic**
  const [isAllocating, setIsAllocating] = useState(false);
  const [currentHex, setCurrentHex] = useState('48 65 6c 6c 6f');

  useEffect(() => {
    if (isElementVisible && !isOnScreen) setIsOnScreen(true);
  }, [isElementVisible, isOnScreen]);

  useEffect(() => {
    // Trigger "System Interrupt" allocation animation
    setIsAllocating(true);

    // Generate new "Memory Content" based on project name
    const newHex = Array.from(projectName.substring(0, 5))
      .map(char => char.charCodeAt(0).toString(16))
      .join(' ');

    const timer = setTimeout(() => {
      setCurrentHex(newHex);
      setIsAllocating(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [projectName]);

  return (
    <Styled.Container
      ref={containerRef}
      slideHeight={slideHeight}
      slideBgColor={slideBgColor}
    >
      {isOnScreen && (
        <>
          {/* Top Left Status Metadata */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            fontFamily: 'JetBrains Mono',
            color: 'rgba(88, 199, 243, 0.5)',
            fontSize: '10px'
          }}>
            SYSTEM_RES: 1920x1080 <br />
            LATENCY: 14ms <br />
            CORE: STABLE
          </div>

          <Styled.RightColumn>
            <TextCarousel quotes={projectQuotes} />
          </Styled.RightColumn>

          <Styled.LeftColumn>
            <Styled.MemoryMapContainer>
              {/* Kernel Segment */}
              <Styled.MemorySegment variant="kernel">
                <span>0xFFFFFFFF</span>
                <div style={{ textAlign: 'center' }}>KERNEL_SPACE // PRIVILEGED_ACCESS</div>
                <span>0x80000000</span>
              </Styled.MemorySegment>

              <div style={{ height: '20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ borderLeft: '1px dashed #58c7f3', height: '100%' }} />
              </div>

              {/* Stack Segment */}
              <Styled.MemorySegment variant="stack" isAllocating={isAllocating}>
                <span>0x7FFFFFFF</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: isAllocating ? '#2bff88' : '#58c7f3' }}>
                    {isAllocating ? '>>> PUSH_ADDR' : 'STACK_PTR'}
                  </span>
                </div>
                <Styled.HexValue key={projectName}>{currentHex}</Styled.HexValue>
              </Styled.MemorySegment>

              {/* Heap Segment */}
              <Styled.MemorySegment
                variant="heap"
                isAllocating={isAllocating}
                style={{ height: '120px', alignItems: 'flex-start' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '10px', color: '#58c7f3' }}>HEAP_ALLOC_MAP</span>
                  <div style={{ marginTop: '10px', fontSize: '11px', lineHeight: '1.2' }}>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        style={{ opacity: isAllocating ? 0.2 : 0.8 }}
                      >
                        [PAGE_{i}] 0x400{i}a000 {'->'} {isAllocating ? 'FREEING...' : 'ALLOCATED'}
                      </div>
                    ))}
                  </div>
                </div>
              </Styled.MemorySegment>

              {/* Text Segment */}
              <Styled.MemorySegment variant="text">
                <span>0x00400000</span>
                <span>.TEXT // EXECUTABLE_INSTRUCTIONS</span>
                <div style={{ fontSize: '10px', color: '#2bff88' }}>
                  syscall: SYS_WRITE
                </div>
              </Styled.MemorySegment>
            </Styled.MemoryMapContainer>
          </Styled.LeftColumn>
        </>
      )}
    </Styled.Container>
  );
};

export default ProjectDetailsSlide;
