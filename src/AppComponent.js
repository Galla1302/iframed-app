import React, { useEffect } from 'react'
import logo from './logo.svg';

import { AuthenticatedTemplate, useIsAuthenticated } from '@azure/msal-react'


export default function AppComponent({ instance }) {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
      const sid = urlParams.get("sid");
      console.log(sid)
  
      // attempt SSO
      instance.ssoSilent({
          sid: sid,
          redirectUri: "/"
      }).then((response) => {
          console.log(response)
      }).catch(error => {
          console.log(error)
      });
  },[])

  console.log(useIsAuthenticated())

  return (
    <AuthenticatedTemplate>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </AuthenticatedTemplate>
  )
}
