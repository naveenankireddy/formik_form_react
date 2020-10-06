import React from 'react';
import './App.css';
import Education from './Components/Education';
import PersonalDetails from './Components/PersonalDetails';
import Profile from './Components/Profile';
import Suceess from './Components/Suceess';

function App() {
  const [activeForm,setActiveForm] = React.useState(1)
  function ActiveForm(){
    switch (activeForm) {
      case 1:
      return <Profile setActiveForm={setActiveForm} />        
        case 2:
        return <PersonalDetails setActiveForm={setActiveForm}/>
        case 3:
        return <Education  setActiveForm={setActiveForm}/>
        case 4:
        return <Suceess />
    
      default:
        break;
    }
  }
 
  return (
    <div className="App">
     <h1>hey lets make a formik form</h1>
     <ActiveForm />
  
        </div>
  );
}

export default App;
