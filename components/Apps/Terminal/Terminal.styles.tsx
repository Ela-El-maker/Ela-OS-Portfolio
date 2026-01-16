import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  min-height: 500px;
  background-color: #010606; /* The base color under the matrix */
  position: relative;
  overflow: hidden;

  /* Ensure the terminal library sits above the canvas */
  .terminal-base {
    background: transparent !important;
  }

  /* Force the terminal library's generated divs to fill the space */
  & > div,
  .terminal-base,
  .terminal-container,
  .terminal-content {
    height: 100% !important;
    min-height: 500px !important;
    width: 100% !important;
  }

  /* Custom scrollbar for the terminal */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #2bff88;
    border-radius: 4px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;