import React from 'react';
import ReactDOM from 'react-dom';
import CookieNotice from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CookieNotice />, div);
  ReactDOM.unmountComponentAtNode(div);
});
