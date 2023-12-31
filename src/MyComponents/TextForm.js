import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "success");

    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces", "success");
    }
    const handleclearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Clear text", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
<div className="container" style = {{color: props.mode==='dark'?'white':'#042743'}}>
     <h1>{props.heading}</h1>
     <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces
    </button>
     <button className="btn btn-primary mx-1" onClick={handleclearClick}>clear Text</button>
</div>
<div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>
</>
  )
}
