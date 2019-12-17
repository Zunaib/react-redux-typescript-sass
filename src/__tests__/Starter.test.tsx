import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Starter } from '../components/Starter';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Starter>test</Starter>, div);

  const comp = div.querySelector('div');
  expect(comp).toBeDefined();

  ReactDOM.unmountComponentAtNode(div);
});
