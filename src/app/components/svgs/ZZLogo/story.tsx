import React from 'react';
import { storiesOf } from '@storybook/react';
import { IATILogoColor, IATILogoWhite } from '.';
import Providers from 'app/Providers';

storiesOf('SVG,s', module).add('IATI Logos', () => (
  <Providers>
    <IATILogoColor />
    <IATILogoWhite />
  </Providers>
));
