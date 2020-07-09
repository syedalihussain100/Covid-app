import React from 'react';
import GlobalStats from "./GlobalStats";
import AllCountry from "./AllCountry";
import Line from "./Likne";


export default function Info({currentScreen}) {
  if(currentScreen === 0)
  return <GlobalStats/>
 else if(currentScreen === 1)
  return <AllCountry/>
 return <Line/>
}
