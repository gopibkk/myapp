import React from 'react';
import './App.css';
// import Todolist from "./components/Todolist";
// import Lists from './components/Lists';
// import DisplayButton from './components/DisplayButton';
// import DisplayStock from './components/DisplayStock';
// import ATMsimple from './components/ATMsimple';
// import ATMadvance from './components/ATMadvance';
// import ATMchoice from './components/ATMChoice';
import ATMBasic from './components/ATMBasic';

const App = () => (   
      <div class="container">
      <div class="row">
      <div class="col"></div>
      <div class="col-6">
            <ATMBasic />
      </div>
      <div class="col"></div>
      </div> 
      </div>    
     
      // <div>
      //     <ATMBasic />            
      // </div>
      // <div>
      // <DisplayStock />   
      // <ATMsimple />  
      //<ATMadvance />
      // <ATMchoice />
      // </div>
      
      
   );

export default App;