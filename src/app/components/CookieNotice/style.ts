import styled from 'styled-components';
import theme from 'app/theme';
import { NavLink } from 'react-router-dom';

/* general */
const CookieNoticeBackground = 'yellow';
const CookieNoticeFontFam = 'Roboto';
const CookieNoticeTextColor = 'black';
const CookieNoticeFontWeight = 400;
/* cookie message */
const CookieMessageFontSize = '16px';
/* cookie button */
const CookieButtonBorderColor = 'red';
const CookieButtonFontSize = '12px';
/* hovers */
const HoverOpacity = 0.5;


const TestComp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${CookieNoticeBackground};
  width: 100vw;
  height: 130px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  z-index: 10;
`;

export const ComponentBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${CookieNoticeBackground};
  width: 100vw;
  height: 130px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  z-index: 10;
`;

export const CookieMessage = styled.p`
  color: ${CookieNoticeTextColor};
  font-size: ${CookieMessageFontSize};
  font-family: ${CookieNoticeFontFam};
  font-weight: ${CookieNoticeFontWeight};
  max-width: 674px;
  width: 100%;
  line-height: 25.6px;
  margin: 0;
`;

export const Spacer = styled.div`
  width: 60px;
`;

/* todo: create separate component for the cookie button */
export const CookieButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 276px;
  width: 100%;
  height: 62px;
  text-decoration: none;
  color: ${CookieNoticeTextColor};
  font-family: ${CookieNoticeFontFam};
  font-weight: ${CookieNoticeFontWeight};
  font-size: ${CookieButtonFontSize};
  border-radius: 50px;
  border: 2px solid ${CookieButtonBorderColor};
  line-height: 56px;
  cursor: pointer;
  &:hover {
    opacity: ${HoverOpacity};
  }
`;

export const CookieInfoLink = styled(NavLink)`
  color: white;
  &:hover {
    opacity: ${HoverOpacity};
  }
`;
