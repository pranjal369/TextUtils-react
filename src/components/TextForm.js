import React, { useState } from 'react'
// now we arer learning concept of 'states'
// we want our custom text to be in side textarea
// so we first import {useState} and then const[text,setText]=useState();
// it means that we are updating our text to setText


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Upper case button triggered...");
        let ans = text.toUpperCase();
        setText(ans);
        props.showAlert("Converted into Uppercase", "success");

    }

    const handleOnChange = (event) => {
        console.log("On Change");
        // the text of input in textarea do not change until we change our state to even.target.value
        setText(event.target.value)
    }


    const handleLoClick = () => {
        console.log("Lower case button triggered...");
        let ans = text.toLowerCase();
        setText(ans);
        props.showAlert("Converted into Lowercase", "success");
    }


    const handleClear = () => {
        setText("");
    }

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleCopy = () => {
        var msg = document.getElementById("myBox");
        msg.select();
        msg.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(msg.value);

    }
   

    // always inside the function...
    // const[text,setText]=useState('Enter text here3');
    const [text, setText] = useState('');
    // now updating using useState...
    // setText("Enter your texxt here 4");
    return (
        <div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* if we have to change the value in iput in textarea... we have to write onChange below with value ={text} */}
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>To uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>To lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-warning mx-2 my-2" onClick={handleSpeak}>Speak</button>
                <button className="btn btn-danger mx-2" onClick={handleClear}>Clear text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Text Summary here...</h2>
                <p>{text.split(" ").length} Words and  {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
                {/* <button className="btn btn-primary" onClick={clickMe}>Click</button>
                <p></p> */}
                <p></p>
            </div>
        </div>
    )
}
