import './MainPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Filter from '../../components/Filter/Filter';
import Results from '../Results/Results';
import axios from 'axios';
import { useState } from 'react';
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';

const MainPage = () => {
  const [results, setResults] = useState([]);
  const [desc, setDesc] = useState('');
  const [loc, setLoc] = useState('');
  const [isFulltime, setIsFulltime] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault();
    let url = `/jobs?`;
    let anyQuery = false;

    if(desc.length){
      url += `description=${desc}`;
      anyQuery = true;
    }
    if(loc.length){
      if(anyQuery) url += '&';
      url += `location=${loc}`;
      anyQuery = true;
    }
    if(isFulltime){
      if(anyQuery) url += '&';
      url += 'full_time=on'
    }
    axios.get(url).then(resp => resp.data)
    .then(data => {
      setResults(data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  return(
    <>
      <DynamicTitle title="Main" />
      <Navbar />
      <div className="main-page">
        <Filter handleClick={handleClick} setDesc={setDesc} setLoc={setLoc} setIsFulltime={setIsFulltime} />
        <Results results={results} />
      </div>
    </>
  )
}

export default MainPage;