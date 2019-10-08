import React from 'react';

export const BannerNotice = () => (
  <div
    css={`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #c74239;
      z-index: 40;
    `}
  >
    <div
      css={`
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 50%;
        color: #c74239;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        margin-right: 5px;
      `}
    >
      !
    </div>
    <div
      css={`
        color: white;
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.71;
        letter-spacing: 0.2px;
        text-align: center;
      `}
    >
      The Query Builder is in a testing phase until 4th Nov 2019. If you find
      any issues, please raise them{' '}
      <a
        href="https://github.com/zimmerman-zimmerman/iati.cloud/issues/new/choose"
        target="_blank"
        css={`
          color: white;
          text-decoration: underline;
        `}
      >
        here
      </a>
    </div>
  </div>
);
