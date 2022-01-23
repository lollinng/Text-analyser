import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {useState} from 'react'
import About from './components/About';

import {HashRouter as Router, Routes, Route} from "react-router-dom"

function App() {

    // used to toggle between modes
    const[Mode,setMode] = useState('light')
    const[alert,setAlert] = useState(null)

     const showAlert = (message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        // to remove alert after 2s
        setTimeout(() => {
            setAlert(null);
        },2000)
    };

    const toggleMode = ()=>{
        if(Mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#37474f';
            showAlert("Dark mode has been enabled", "success");
        }
        else{ 
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
        }
    };



    return (

        <>
            <Router>
                <Navbar title="First Project" about='AboutMe' number = {3} mode={Mode} toggleMode={toggleMode}/>
                <Alert alert ={alert}/>

                <Routes>
                    <Route exact path="/" element={
                        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode} showAlert ={showAlert}/>
                    }/>
                    <Route exact path="/about" element={<About/>} />
                </Routes>
            </Router>

            
        </>
    );
}

export default App;
