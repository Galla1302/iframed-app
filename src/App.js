import './App.css';

import { PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import AppComponent from './AppComponent';

function App() {
  const myMSALObj = new PublicClientApplication({
    auth: {
      clientId: "f037a419-527d-40eb-ae93-130f0b480d53",
      authority: "https://login.microsoftonline.com/2206583e-b21c-4e53-bc02-261969cb44fb",
      redirectUri: "/",// set to a blank page for handling auth code response via popups
    },
    cache: {
        cacheLocation: "sessionStorage", // set your cache location to local storage
    },
    scopes: ["User.Read"]
});


  return (
    <MsalProvider instance={myMSALObj}>
      <AppComponent instance={myMSALObj} />
    </MsalProvider>
  );
}

export default App;
