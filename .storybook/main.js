module.exports = {
  stories: [
    '../src/**/story.tsx',
    '../src/**/story.mdx',
    // '../src/**/story.mdx',
  ],

  presets: [
    '@storybook/preset-create-react-app',
    'storybook-addon-deps/preset-explorer',

    // '@storybook/preset-typescript',
  ],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs',
  ],
};
