import React from "react";
import { JsonData } from "../Form/Form";
import {MainAreaContainer, MainBody, MainHeading} from './MainAreaElements';

interface Props {
    JSONdata: JsonData | null; // Define the prop type
    index:number;
  }

export function MainArea (props:Props){
  

  const page = props.JSONdata?.Pages[props.index] ;


  return (
      <MainAreaContainer>
          <MainHeading>Page {props.index+1}</MainHeading>
          {page && (
            <div>
            <MainBody>{page.title}</MainBody>
            <MainBody>{page.bodyText}</MainBody>
            </div>
          )}
        </MainAreaContainer>
      );

}
export default MainArea;