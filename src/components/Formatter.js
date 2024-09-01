"use client"
import AddBanner from "@/adsense/AddBanner";
import { useState,useEffect } from 'react';
import "../styles/Formatter.css"
import JsonView from "@uiw/react-json-view";
import { darkTheme } from "@uiw/react-json-view/dark";
import AddBlock from "@/adsense/AddBlock";
import Switch from "@/buttons/Switch" 
function Formatter() {
    const Quote = JsonView.Quote;
 
    const [input, setInput]   = useState( '' );
    const [types, setTypes]   = useState( false );
    const [output, setOutput] = useState( '' );
    const [output2, setOutput2] = useState( {} );
    const [indentation, setIndentation] = useState(1); // Default indentation
    const increaseIndentation = () => {
        setIndentation(prev => Math.min(prev + 1, 50)); // Increase by 2, max 10 spaces
    };

    const decreaseIndentation = () => {
        setIndentation(prev => Math.max(prev - 1, 1)); // Decrease by 2, min 2 spaces
    };
   
    const handleInputChange = ( e ) => {
        setInput( e.target.value );
    }

    const beautifyHandler = () => {
        try{
        if ( input ) {
            
            const inputParsed     = JSON.parse( input );
            const beautifiedInput = JSON.stringify( inputParsed, null, 4 );
            setOutput( beautifiedInput );
            setOutput2( inputParsed );
        }}
        catch(err){
            console.log(err)
        }
    }
    // useEffect(()=>{
    //     beautifyHandler()
    // },[input])
    const minifyHandler = () => {
        if ( input ) {
            const inputParsed   = JSON.parse( input );
            const minifiedInput = JSON.stringify( inputParsed );
            setOutput2( inputParsed );
        }
    }

    const clearHandler = () => {
        setInput( '' );
        setOutput( '' );
    }

    return (
        <div className="Formatter">
            <textarea 
                value={input} 
                onChange={handleInputChange}
                placeholder="paste your JSON here..."
                language="json"

            ></textarea>

            <div>
            <AddBlock/>

            <div className="bg-gray-800 max-w-7xl mx-auto py-10 px-4 mb-4">

              <AddBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="4284247248"
              />
            </div>
                <button type="button" onClick={beautifyHandler}>Format</button>
                <div className="indentation-controls">
                <button type="button" onClick={decreaseIndentation}>-</button>
                <span >{indentation}</span>
                <button type="button" onClick={increaseIndentation}>+</button>
            </div>
                          <div className="indentation-controls">

                <Switch label={"Show Data Type"}setIsOn={setTypes} isOn={types}/>
            </div>
            {/* <Switch setIsOn={setTypes} isOn={types}/> */}

                            <button type="button" onClick={clearHandler}>Clear</button>
                            <div className="bg-gray-800 max-w-7xl mx-auto py-10 px-4 ">
              <AddBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="4284247248"
              />
            </div>
            </div>
{/* 
            <textarea 
                value={output} 
                readOnly 
                placeholder="formatted JSON..."
            ></textarea> */}
        {output2 && typeof output2 === "object" && (
            // <div className="textarea" >
        
          <JsonView
          className='textarea'
            value={output2}
            displayDataTypes={types}
            collapsed={3}
            enableClipboard={true}
            displayObjectSize={false}
            indentWidth={indentation*2}  // Set indentation width to 4 spaces
            shortenTextAfterLength={30000}
            style={{
                height: "80%",
                padding: "20px",
                boxSizing: "border-box",
                border: "1px solid #000",
                background: "#dce3e2",
                borderRadius: "10px",
                outline: "none",
                resize: "none",
                fontFamily: "monospace",
                transition:" background 0.25s, color 0.25s",
                boxShadow: "0px 0px 15px 0px rgb(0 0 0)",
                overflow: "auto" 

            }}

          >
            <Quote>
              <span />
            </Quote>
          </JsonView>
        //   </div> 
        )}
      </div>
    )
}
export default Formatter;