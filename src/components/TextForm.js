import React,{useState} from 'react';


export default function TextForm(props) {

    const [text,setText] = useState('');


    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleOnchange = (event)=>{
        setText(event.target.value);
    }

    const handledown = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClear = ()=>{
        setText("")
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }
    



    return (
        <>
        <div className='container my-3 ' style = {{color:props.mode ==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
                <textarea className="form-control" value={text} onChange={handleOnchange} style = {{backgroundColor:props.mode ==='light'?'white':'grey',color:props.mode ==='light'?'black':'white'}} id="myBox" rows="8"/>
            </div>
            <button onClick={handleUpClick} className='btn btn-primary mx-1'>Convert to Uppercase</button>
            <button onClick={handledown} className='btn btn-primary mx-2'>Convert to Lowercase</button>
            <button onClick={handleClear} className='btn btn-primary mx-2'>Clear</button>
            <button onClick={handleCopy} className='btn btn-primary mx-2'>Copy</button>
            <button onClick={handleExtraSpaces} className='btn btn-primary mx-2'>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style = {{color:props.mode ==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text.length===0 ?0:text.split(" ").length} words and {text.length} characters</p>
            <p>{text.length===0 ?0:0.008*text.split(" ").length} Minutes read</p>
            <h1>Preview</h1>
            <p>{text.length===0?"Enter Something to Preview here":text}</p>
        </div>
        </>
        
    );
}

