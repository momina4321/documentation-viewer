import React from 'react';
import react ,{ useState } from 'react';
import NavBar from '../NavBar';
import {CenteredForm, Label, TextInput} from './Formelements';
import { Route, Routes } from 'react-router-dom';
import MainArea from '../MainArea/MainArea';

export interface JsonData {
  Pages: Array<{
    title: string;
    bodyText: string;
  }>;
}



export const MyForm:React.FC = () => {
  const [url, setURL] = useState("");
  const [JSONdata, setJSONdata] = useState<JsonData | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);




 const getData=()=>{
    fetch(url).then((response)=>{
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();

    }).then((data:JsonData)=>{
      //do something with data here
      setJSONdata(data);
    })
  }

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    setFormSubmitted(true);
    getData();
  }

  return (

        <div>
    <CenteredForm onSubmit={handleSubmit}>
      <Label>Enter JSON url:
        <TextInput
        type="url"
          value={url}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setURL(e.target.value)}
        />
      </Label>
      <button type="submit">Submit</button>
    </CenteredForm>

{formSubmitted && <NavBar JSONdata={JSONdata}/> }

<Routes>
{JSONdata && JSONdata.Pages?.map((page, index) => (
  
  <Route key={index} path={`/${index + 1}`} 
  element={<MainArea index={index} JSONdata={JSONdata} />} />

) )}
</Routes>
      </div>

  )
  
}

export default MyForm;