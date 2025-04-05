import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import {action,originals,horror} from './urls';
import Banner from './Components/Banner/Banner';
import Rowcost from './Components/Row-Cost/Rowcost';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowcost url={originals} title='Netflix originals' />
      <Rowcost url={action} title='Action' isSmall />
      <Rowcost url={horror} title='Horror' horrposter/>
      
    </div>
  );
}

export default App;
