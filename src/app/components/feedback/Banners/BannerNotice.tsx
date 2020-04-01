import React from 'react';
import styled from 'styled-components';

const BannerElement1 = styled.div`
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
  @media (max-width: 768px) {
    //padding-left: 10px;
    //padding-right: 10px;
  }
`;

const BannerElement2 = styled.div`
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
  flex-shrink: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const BannerElement3 = styled.div`
  color: white;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: 0.2px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 11px;
    line-height: initial;
    max-width: 95vw;
  }
`;

const BannerElement4 = styled.a`
  color: white;
  text-decoration: underline;
`;

export const BannerNotice = () => (
  <BannerElement1>
    <BannerElement2>!</BannerElement2>
    <BannerElement3>
      The IATI Datastore is in a pre-launch phase; the date of an official
      launch will be announced soon. If you find any issues please raise them on{' '}
      <BannerElement4
        href="https://github.com/zimmerman-zimmerman/iati.cloud/issues/new/choose"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </BannerElement4>
    </BannerElement3>
  </BannerElement1>
);
