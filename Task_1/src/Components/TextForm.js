
import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUPClick =() =>{
    //   console.log("UpperCase was clicked" + text)
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to Upper Case", "success")
    }

    const handleLOClick =() =>{
    //   console.log("UpperCase was clicked" + text)
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lower Case", "success")

    }

    const handleOnChange =(event) =>{
      console.log("On Change")
      setText(event.target.value);
    }

    const clearText = () => {
      setText("");
    }

    
    // const copyToClipboard = async () => {
    //   try {
    //     await navigator.clipboard.writeText(copiedText);
    //     setCopiedText('Copied!');
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };

  

    // const [copiedText, setCopiedText] = useState('');

    const [text, setText] = useState('Enter text here2');
     
    // text = "new text"; // Wrong way to change/ update the text
    //  setText = ("new text"); // correct way to change/ update the text

  return (
<>


<div>
  <div className='container' style = {{color:props.mode==='dark'?'white':'black'}}> 

  </div>

    <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control2" value = {text} onChange={handleOnChange} style = {{color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  </div>
  
  {/* <button className="btn btn-light mx-1" onClick={copyToClipboard}>Copy Text</button> */}
  <button className="btn btn-light mx-1" onClick={handleUPClick}>Convert to UpperCase</button>
  <button className="btn btn-light mx-1" onClick={handleLOClick}>Convert to LowerCase</button>
  <button className="btn btn-light mx-1" onClick={clearText}>Clear Text</button>
</div>
 <div className='container my-3' style = {{color:props.mode==='dark'?'white':'black'}}>

  <h2>Your text summary</h2>

  {/* Word Counter */}
  <p> {text.split(" ").length} words and  {text.length} charcters</p>

  {/* Time to read the text */}
  <p> {0.008 * text.split(" ").length } Minutes read</p>

  <h2> Preview </h2>
  <div className='Pre'>
 
  <div className='text'>
  <p>{text.length >0?text:"Enter Something to Preview here"}</p>
  </div>
 
  </div>
 
  </div>
</>
  )
}
