import './App.css';
import './index.css'
import Navbar from './Components/Navbar'
import TextForm  from './Components/TextForm';
import { useState } from 'react';
// import About from './Components/About';
import Alert from './Components/Alert';

function App() {

  const [mode, setMode] = useState('light');  // whether dark mode is visible or not
 const   [alert, setAlert] = useState(null);

 const showAlert = (message, type) =>{
       setAlert({
        msg : message,
        type : type
       })
       setTimeout(()=>{
        setAlert(null);
       },2000);
 }

 const toggleMode = (cls) =>{
  console.log(cls)
  document.body.classList.add('bg-'+cls)
     if(mode === 'light')
     {
       setMode('dark')
       document.body.style.backgroundColor = '#042743';
       showAlert("Dark mode has been enabled", "success");
     }
     else
     {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

     }
  }
  return (
    <>
   
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  (// this is prop) */}
{/* <Navbar />   */}
<Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
<Alert alert = {alert}  />
 <div className='container' my-3> {/*(//my-3 is used for margin in y axis) */}
<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
{/* <About/> */}

</div>
    </>
  );
}

export default App;
