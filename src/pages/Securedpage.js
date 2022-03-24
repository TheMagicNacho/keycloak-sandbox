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
          tokenParsed.preferred_username: {keycloak.tokenParsed.preferred_username} || {typeof keycloak.tokenParsed.preferred_username}
    
        </li>
        <li>
          tokenParsed.email:  {keycloak.tokenParsed.nickname} || {typeof keycloak.tokenParsed.nickname}
        </li>
        <li>
          tokenParsed.email: {keycloak.tokenParsed.email} || {typeof keycloak.tokenParsed.email}
        </li>
        <li>
          .subject: {keycloak.subject} || {typeof subject}
        </li>
      </ul>
   </div>
 );
};

export default Secured;