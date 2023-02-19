import React, { useState } from 'react'
import '../App.css';

export default function TextForm(props) {
    const [isBold, updateBold] = useState(false)


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(' Converted To Uppercase', 'success');
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(' Converted To Lowercase', 'success');
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }


    const makeBold = () => {
        updateBold(!isBold);
        props.showAlert(' Converted To Lowercase', 'success');

    }

    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select();
        props.showAlert(' Text Copied', 'success');

        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState('');
    // setText = ('Renter Your Text Here');

    return (
        <>
            <div>

                <div className='mb-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChange}>
                    <h1>{props.heading}</h1>
                    <textarea className={`${isBold ? 'textBold' : ''} form-control`} style={{ background: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChange} value={text} id="myBox" rows="10"></textarea>

                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase
                </button>
                <button className="btn btn-danger mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-success mx-2" onClick={makeBold} >Convert to Bold Text</button>
                <button className="btn btn-warning mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-info mx-2" onClick={handleCopy}>Text Copy</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChange}>

                <h1>Your Text Summary</h1>
                <p>Their are {text.split(" ").length} words {text.length} Character</p>
                <p>Mintues need to read {0.08 * text.split(" ").length}</p>
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : 'Enter to Something below to Preview'}</p>

            </div>
        </>
    );
}
