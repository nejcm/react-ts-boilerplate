import {css} from '@emotion/core';

const globalStyles = css`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html,
  body {
    background-color: #fff;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    margin: 0;
    padding: 0;
    min-height: 100%;
    min-height: 100vh;
    min-width: 320px;
    width: 100%;
  }

  html {
    height: auto;
  }
`;

export default globalStyles;
