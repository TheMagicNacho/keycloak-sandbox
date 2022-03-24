import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Nav = () => {
 const { keycloak, initialized } = useKeycloak();

 return (

       <section >
         <nav >
           <div>
             <h1>
               Keycloak React AUTH.
             </h1>
             <ul>
               <li>

          
                 <a  href="/">
                   Home
                 </a>
               </li>
               <li>
                 <a href="/secured">
                   Secured Page
                 </a>
               </li>
             </ul>
             <div >
               <div >
                 {/* if user is not authenticated, prompt for login */}
                 {!keycloak.authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.login()}
                   >
                     Login
                   </button>
                 )}
                  {/* If the user is logged in, show a button with the username */}
                 {!!keycloak.authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.logout()}
                   >
                     Logout ({keycloak.tokenParsed.preferred_username})
                   </button>
                 )}
               </div>
             </div>
           </div>
         </nav>
       </section>

 );
};

export default Nav;