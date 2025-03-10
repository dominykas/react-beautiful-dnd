// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import WithControls from './src/dynamic/with-controls';
import LazyLoading from './src/dynamic/lazy-loading';

storiesOf('Dynamic changes during a drag (11.x)', module)
  .add('With controls', () => <WithControls />)
  .add('Lazy loading', () => <LazyLoading />);
