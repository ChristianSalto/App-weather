import React from 'react';
import AppFrame from './AppFrame';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'AppFrame',
  component: AppFrame,
};

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      loren ipusum loren ipusum loren ipusum loren ipusum loren ipusum loren
      ipusum loren ipusum loren ipusumloren ipusum ipusum loren ipusum loren
      ipusumloren ipusum ipusum loren ipusum loren ipusumloren ipusum ipusum
      loren ipusum loren ipusumloren ipusumipusum loren ipusum loren ipusumloren
      ipusum
    </AppFrame>
  </Router>
);
