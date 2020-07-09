import React,{useState} from 'react';
import './App.css';
import Nav from "./Component/Nav";
import Info from "./Component/Info";
import Bottom from "./Component/Bottom";


function App() {
  const screenConfig = useState(0);


  return (
    <div>
     <Nav/>
     <Info currentScreen={screenConfig[0]}/>
     <Bottom screenConfig={screenConfig}/>
    </div>
  );
}

export default App;
