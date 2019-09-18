import React from 'react';
import { AboutLayout } from './layout';
import { useTitle } from "react-use";
// import { mockData } from './mock';

export function About() {
  useTitle('IATI Datastore - About');

  return <AboutLayout />;
}
