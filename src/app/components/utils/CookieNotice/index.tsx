/* base */
import React, { useState } from 'react';
import useCookie from '@devhammed/use-cookie';

import {
  ComponentBase,
  CookieButton,
  CookieInfoLink,
  CookieMessage,
  Spacer
} from './style';

type CookieNoticeProps = {
  cookieText?: string;
  cookieButtonText?: string;
  cookieLinkText?: string;
};

const CookieNotice: React.FC<CookieNoticeProps> = props => {
  /* this hook is for setting the cookie */
  const [cookie, setCookie] = useCookie('cookieNotice', 'true');
  /* this hook is for visually hiding the component */
  const [visible, setVisibility] = useState(cookie);

  // console.log();
  return (
    /* if visible is false, hide */
    visible &&
    /* if cookie is false, also hide */
    (cookie && (
      <ComponentBase>
        <CookieMessage>
          {props.cookieText}
          <CookieInfoLink to="/cookies">{props.cookieLinkText}</CookieInfoLink>
        </CookieMessage>
        <Spacer />
        <CookieButton
          data-cy="cookie-notice"
          onClick={() => {
            setCookie('false');
            setVisibility(!visible);
          }}
        >
          {props.cookieButtonText}
        </CookieButton>
      </ComponentBase>
    ))
  );
};

CookieNotice.defaultProps = {
  cookieText:
    'Zoom gebruikt cookies om het bezoek (geanonimiseerd) te analyseren om verbeteringen aan te brengen. Indien je hiermee akkoord bent, hoef je je voorkeuren niet te wijzigen. ',
  cookieButtonText: 'accepteren',
  cookieLinkText: 'Meer informatie'
};

export default CookieNotice;
