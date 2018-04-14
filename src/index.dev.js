// Module Imports
import React from 'react';
import { render } from 'react-dom';



// Component Imports
import { Provider } from 'Store';
import { HotApp } from 'Application';





render(
  (
    <Provider>
      <HotApp />
    </Provider>
  ),
  document.getElementById('app-root')
);
