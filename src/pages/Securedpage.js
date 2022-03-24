import React from 'react';


import { useKeycloak } from "@react-keycloak/web";



const Secured = () => {


const { keycloak, initialized } = useKeycloak();

console.table(keycloak);

 return (
   <div>
     <h1 className="text-black text-4xl">Welcome to the Protected Page.</h1>
      <ul>
        <li>
          preferred_username: {keycloak.tokenParsed.preferred_username} || type: {typeof keycloak.tokenParsed.preferred_username}
    
        </li>
        <li>
          nickname:  {keycloak.tokenParsed.nickname} || type: {typeof keycloak.tokenParsed.nickname}
        </li>
        <li>
          email: {keycloak.tokenParsed.email} || {typeof keycloak.tokenParsed.email}
        </li>
      </ul>
   </div>
 );
};

export default Secured;