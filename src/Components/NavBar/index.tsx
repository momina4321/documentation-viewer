import React from 'react';
import { JsonData } from '../Form/Form';
import {Nav, NavLink} from './NavbarElements';




interface Props {
  JSONdata: JsonData | null; // Define the prop type
}




export function NavBar(props:Props) {

  const {JSONdata} = props;
  
  return (
    <>
  
<Nav>

{JSONdata && JSONdata.Pages?.map((page, index) => (
  
<NavLink key={index} to={`/${index + 1}`}>
       <p>    Page {index + 1} </p>
         </NavLink>
  ) )}


  </Nav>


   

  

    </>
  )
}

export default NavBar;
