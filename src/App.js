import './App.css';


import {SearchBar} from "./components/SearchBar"
import {DriverCardsContainer} from "./components/DriverCardsContainer";
import {useEffect, useState} from "react";
function App() {

  const [searchValue, setSearchValue] = useState('');
  // useEffect(()=>{
  //   //filterDrivers(searchValue)
  //   //console.log(searchValue)
  // }, [searchValue])

  return (
      <div>
        <SearchBar setSearchValue={setSearchValue}/>
        <br />
        <DriverCardsContainer searchValue={searchValue}/>
      </div>
  );
}

export default App;
