import React from 'react';
import ReactDOM from 'react-dom';
import PageLoader from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageLoader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
