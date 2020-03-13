import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import { StoryWrapper } from '../src/app/utils/StoryWrapper';
import Providers from '../src/app/Providers';
import { withConsole } from '@storybook/addon-console';

import { DocsPage } from 'storybook-addon-deps/blocks';

addParameters({
  docs: { page: DocsPage, inlineStories: true },
  dependencies: { withStoriesOnly: false, hideEmpty: true },
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

const customViewports = {
  desktopSmall: {
    name: 'Desktop Small',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },

  desktopGeneral: {
    name: 'Desktop General',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },

  desktopLarge: {
    name: 'Desktop Large',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },

  mobileGeneral: {
    name: 'Mobile General',
    styles: {
      width: '360px',
      height: '640px',
    },
  },

  tabletGeneral: {
    name: 'Tablet General',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
};

addDecorator(storyFn => (
  <Providers>
    <StoryWrapper>{storyFn()}</StoryWrapper>
  </Providers>
));

addParameters({
  viewport: {
    viewports: customViewports, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'desktopSmall',
  },
});
