import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./helpers/PrivateRoute";



/**
 * REFRENCES
 * https://blog.logrocket.com/implement-keycloak-authentication-react/
 * https://github.com/dasniko/keycloak-reactjs-demo
 * https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter
 * https://codesandbox.io/s/hkh62?file=/pages/index.tsx
 * 
 */

/**
 *  HOW TO THEME
 * 
 *  https://www.baeldung.com/keycloak-custom-login-page
 * https://alxrodav.medium.com/keycloak-custom-login-theme-21be10ad3f4
 * 
 */

function App() {
 return (
   <div>
     <ReactKeycloakProvider authClient={keycloak}>
       <Nav />


       <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<WelcomePage />} />
           {/* browsing security is placed on the router. review the helpers dirctory */}
           <Route
             path="/secured"
             element={
              //  PrivateRoute is a custom element created in helpers
               <PrivateRoute>
                 <SecuredPage />
               </PrivateRoute>
             }
           />
         </Routes>
       </BrowserRouter>
     </ReactKeycloakProvider>
   </div>
 );
}

export default App;



// import React from "react";
// import logo from './logo.svg';
// import './App.css';


// function App() {



//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
       
//       </header>
//     </div>
//   );
// }

// export default App;
