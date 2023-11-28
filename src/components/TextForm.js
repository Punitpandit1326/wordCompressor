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
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState('');
    // setText = ('Renter Your Text Here');

    return (
        <>
            <div>

                <div className='mb-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChange}>
                    <h1>{props.heading}</h1>
                    <textarea className={`${isBold ? 'textBold' : ''} form-control`} style={{ background: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChange} value={text} id="myBox" rows="10"></textarea>

                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase
                </button>
                <button disabled={text.length === 0} className="btn btn-danger mx-2 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={makeBold} >Convert to Bold Text</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-info mx-2 my-1" onClick={handleCopy}>Text Copy</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChange}>

                <h1>Your Text Summary</h1>
                <p>Their are {text.split(" ").filter((element) => { return element.length !== 0 }).length} words {text.length} Character</p>
                <p>Mintues need to read {0.08 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</p>
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : 'There is No Words To Preview Here'}</p>

            </div>
        </>
    );
}
