//cc:application modules#;about module;

import React from 'react';
import { AboutLayout } from './layout';
import { useTitle } from 'react-use';

function About() {
  useTitle('IATI.cloud - About');
  return <AboutLayout />;
}

export default About;
