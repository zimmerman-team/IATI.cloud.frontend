//cc:application modules#;about module;

import React from 'react';
import { useTitle } from 'react-use';
import { ContactLayout } from './layout';

function Contact() {
  useTitle('IATI.cloud - Contact');

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/shell.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: process.env.REACT_APP_HUBSPOT_REGION,
          portalId: process.env.REACT_APP_HUBSPOT_PORTAL_ID,
          formId: process.env.REACT_APP_HUBSPOT_CONTACT_FORM_ID,
          target: '#hubspotSubscribeForm',
        });
      }
    });
  }, []);

  return <ContactLayout />;
}

export default Contact;
