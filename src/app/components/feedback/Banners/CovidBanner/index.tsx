/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { SyntheticEvent, useState, useRef } from 'react';
import { css } from 'styled-components/macro';
import useCookie from '@devhammed/use-cookie';
import { useClickAway } from 'react-use';

const FontSize = '16px';

const WrapperStyle = css`
  color: #2e2e2e;
  line-height: 25px;
  font-size: ${FontSize};
  line-height: 1.1;
  transform: translateY(-25px);
  position: relative;
  display: flex;
  width: 100%;
  z-index: 12;
  background-color: #f3eba1;
  border-bottom: 1px solid #e8d746;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
`;

const NoticeContentStyle = css`
  color: #2e2e2e;
  margin: 0;
  border: 0;
  position: relative;
  padding: 20px 0;
  width: 96%;
`;

const RichTextStyle = css`
  color: #2e2e2e;
  margin: 0;
  padding: 0;
  border: 0;
`;

const NoticeButtonStyle = css`
  margin: 0;
  cursor: pointer;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 24px;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url('https://iatistandard.org/assets/svg/source/icon-cross-alert.1c4f6d9acbd3.svg');
`;

const ParagraphStyle = css`
  margin: 0;
  padding: 0;
  border: 0;
  font-family: chalet-london-sixty, sans-serif;
  font-weight: 400;
  max-width: 900px;
  color: #6e640e;
`;

const BoldTextStyle = css`
  color: #6e640e;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: pragmatica, sans-serif;
  font-weight: 700;
`;

const LinkTextStyle = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  text-decoration: underline;
  color: #6e640e;
`;

interface CookieNoticeParams {
  onClose?: () => void;
  open?: boolean;
  shrink?: boolean;
}

export const CovidBanner = (props: CookieNoticeParams) => {
  /* this hook is for setting the cookie */
  const [cookie, setCookie] = useCookie('covidNotice', 'true');

  /* this hook is for visually hiding the component */
  const [visible, setVisibility] = useState(cookie);

  const ref = useRef(null);

  //   useClickAway(ref, () => {
  //     handleClose();
  //   });

  function handleClose(event?: SyntheticEvent, reason?: string) {
    setCookie('false', {
      expires: 31536000 * 20,
      domain: '',
      path: '',
      secure: false,
      httpOnly: false,
      maxAge: 0,
      sameSite: '',
    });
    setVisibility(!visible);
  }

  return (
    visible &&
    cookie && (
      <div
        css={`
          color: #2e2e2e;
          line-height: 25px;
          font-size: ${props.shrink ? `14px` : `14px`};
          line-height: ${props.shrink ? `1.2` : `initial`};
          transform: ${props.shrink ? `translateY(-25px)` : `translateY(0)`};
          position: relative;
          display: flex;
          width: 100%;
          z-index: 12;
          background-color: #f3eba1;
          border-bottom: 1px solid #e8d746;
          justify-content: center;
          align-items: flex-start;
          align-content: flex-start;
        `}
      >
        {/* <div
          css={`
            position: absolute;
            top: 0;
            left: -50vw;
            background-color: red;
            width: 150vw;
            height: 141px;
            background-color: #f3eba1;
            border-bottom: 1px solid #e8d746;
          `}
        /> */}
        <div css={NoticeContentStyle}>
          <div css={RichTextStyle}>
            <p css={ParagraphStyle}>
              <b css={BoldTextStyle}>Important notice:</b>
              <br />
              Organisations involved in addressing the COVID-19 pandemic are
              encouraged to publish data on their spending and activities using
              the IATI Standard.{' '}
              <a
                css={LinkTextStyle}
                href="https://iatistandard.org/en/news/publishing-data-covid-19-using-iati-standard/"
                target="_blank"
                rel="noreferrer"
              >
                <b css={BoldTextStyle}>See COVID-19 IATI publishing guidance</b>
              </a>
              <b>.</b>
            </p>
            <p css={ParagraphStyle}>
              Discover how to access data by reading{' '}
              <a
                css={LinkTextStyle}
                href="https://iatistandard.org/en/news/covid-19-data-access-and-use-guidance-launched/"
                target="_blank"
                rel="noreferrer"
              >
                <b css={BoldTextStyle}>
                  Guidance: Accessing and Using IATI COVID-19 Data
                </b>
              </a>
            </p>
          </div>
          <div
            role="button"
            onClick={handleClose}
            css={NoticeButtonStyle}
            data-cy="covid-banner-close-btn"
          />
        </div>
      </div>
    )
  );
};
