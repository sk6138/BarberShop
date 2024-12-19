import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-27v0vckh2lx6sgjl.us.auth0.com"
    clientId="IBNpfmj38RRdwMcIECKq1HQ1iGbsg6H7"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
