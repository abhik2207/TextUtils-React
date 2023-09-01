import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "info");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "info");
    }

    const handleClrClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Cleared the text!", "info");
    }

    const handleCapClick = ()=>{
        let x = text[0];
        let newText = x.toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Capitalized the text!", "info");
    }
    
    const handleRevClick = ()=>{
        let strArr = text.split("");
        strArr = strArr.reverse();
        let newText = strArr.join("");
        setText(newText);
        props.showAlert("Reversed the text!", "info");
    }

    const handleReplcClick = () => {
        let existing_text = prompt("Enter which word to replace : ");
        let replaced_text = prompt("Enter New Text");
        setText(text.replaceAll(existing_text, replaced_text));
        props.showAlert("Replaced the text!", "info");
    }

    const handleSpkClick = ()=>{
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
        props.showAlert("Spoke the text!", "info");
    }

    const handleCpyClick = ()=>{
        // var text = document.getElementById("myBox");
        // text.select();
        // document.getSelection().removeAllRanges();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "info");
    }
    
    const handleExSpcClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "info");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                    <label htmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
                    <textarea style={{backgroundColor:props.mode==='dark'?'#575757':'white', color:props.mode==='dark'?'white':'black'}} className="form-control mb-4" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Capitalize the string</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRevClick}>Reverse the text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReplcClick}>Find and Replace text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExSpcClick}>Remove Extra spaces</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpkClick}>Speak the text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCpyClick}>Copy text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear text</button>
            </div>
            <div className="container mt-5">
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0;}).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0;}).length} minutes required to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Enter something in the textbox to preview it here.'}</p>
            </div>
        </>
    )
}
