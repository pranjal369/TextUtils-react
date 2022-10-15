// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Pranjal from './components/User';

// import {
//   BrowserRouter,
//   Routes, // instead of "Switch"
//   Route,
//   Link
// } from "react-router-dom";
// ReactDOM.render(
//   root
// );

// let name = "Pranjal";
function App() {
 
  const [mode, setMode] = useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
   setAlert({
     msg:message,
     type:type
   })
  

  setTimeout(() => {
    setAlert(null);
  }, 1500);

  }
  
  const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark Mode Enabled","success")
  }
  else
  {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode Enabled","success")
    
  }
  }

  return (
    <>
      {/* <Navbar title="Pranjal" about="Aboutttt"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
    
   
{/*   
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TextForm />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter> */}
 

      {/* <div className="container"> */}
      {<TextForm  showAlert={showAlert} heading="Enter the text here...2" mode={mode} />}
      {/* <Pranjal/> */}
     {/* { <About/> } */}
      {/* </div> */}
    </>
  );
}

export default App;
