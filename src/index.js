// Module Imports
import React from 'react';
import { render } from 'react-dom';



// Component Imports
import { Provider } from 'Store';
import App from 'Application';





render(
  (
    <Provider>
      <App />
    </Provider>
  ),
  document.getElementById('app-root')
);
