import React, { useEffect, useState, useCallback } from 'react';
import * as Styled from './TextCarousel.styles';
import { ICarouselQuote } from '../../../types/portfolio';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export interface Props {
  quotes: ICarouselQuote[];
}

const TextCarousel = ({ quotes }: Props): JSX.Element => {
  const [quoteID, setQuoteID] = useState(0);
  const [scrambledTitle, setScrambledTitle] = useState('');
  const { title, quote } = quotes[quoteID];

  // The Decryption Animation Logic
  const decrypt = useCallback((targetText: string) => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let iteration = 0;

    const interval = setInterval(() => {
      setScrambledTitle(
        targetText.split('')
          .map((_, index) => {
            if (index < iteration) return targetText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= targetText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const clearDecryption = decrypt(title);

    const autoSlide = setInterval(() => {
      setQuoteID((prev) => (prev + 1 >= quotes.length ? 0 : prev + 1));
    }, 12000); // Increased time to allow for reading + animation

    return () => {
      clearInterval(autoSlide);
      clearDecryption();
    };
  }, [quoteID, title, decrypt, quotes.length]);

  const handleManualNav = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setQuoteID((prev) => (prev + 1 >= quotes.length ? 0 : prev + 1));
    } else {
      setQuoteID((prev) => (prev - 1 < 0 ? quotes.length - 1 : prev - 1));
    }
  };

  return (
    <Styled.Container>
      <Styled.TextWrapper>
        {/* Terminal Header with Bracket Prefix */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Styled.StatusPulse />
          <SectionHeader
            variant={'extraSmall'}
            headerText={`[ ${scrambledTitle} ]`}
            margin={'0'}
            color={'#2bff88'}
          />
        </div>

        <PortfolioParagraph
          key={quoteID} // Key forces animation refresh in PortfolioParagraph
          margin={'1.5rem 0'}
          paragraphText={quote}
          withDarkColor={false}
          variant={'small'}
          withAnimatedPresence={true}
        />
      </Styled.TextWrapper>

      <Styled.ControlsWrapper>
        <Styled.PrevQuote onClick={() => handleManualNav('prev')} title="Previous Slide">
          <FiChevronLeft className={'carousel-icon prev'} />
        </Styled.PrevQuote>

        <Styled.Indicator>
          <span>DATA_SET</span>
          <span>0{quoteID + 1} / 0{quotes.length}</span>
        </Styled.Indicator>

        <Styled.NextQuote onClick={() => handleManualNav('next')} title="Next Slide">
          <FiChevronRight className={'carousel-icon next'} />
        </Styled.NextQuote>
      </Styled.ControlsWrapper>
    </Styled.Container>
  );
};

export default TextCarousel;