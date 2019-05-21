import React from 'react';
import ReactDOM from 'react-dom';
import CookieModule from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CookieModule />, div);
  ReactDOM.unmountComponentAtNode(div);
});
