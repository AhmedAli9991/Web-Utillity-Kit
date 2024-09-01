"use client"

import { useState,useEffect } from 'react';
import "../styles/Formatter.css"
import JsonView from "@uiw/react-json-view";
import { darkTheme } from "@uiw/react-json-view/dark";
import Switch from "@/buttons/Switch" 
import XMLViewer from 'react-xml-viewer'
import AddBanner from "@/adsense/AddBanner";

function XMLFormatter() {
    const Quote = JsonView.Quote;

    const [input, setInput]   = useState( '' );
    const [output, setOutput] = useState( '' );

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
        if ( input ) {
            
            setOutput( input );
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
                placeholder="paste your XML here..."
                language="json"

            ></textarea>

            <div>
            <div className="bg-gray-800 max-w-7xl mx-auto py-10 px-4 mb-4">
              <AddBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="4284247248"
              />
            </div>
                <button type="button" onClick={beautifyHandler}>Format</button>


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
        
        <div style={{
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
            boxShadow: "0px 0px 15px 0px rgb(0 0 0)"
        
        }}>
          <XMLViewer
          className='textarea'
            xml={output}
            // collapsed={3}
            // enableClipboard={true}
            // displayObjectSize={false}
            // indentWidth={indentation*2}  // Set indentation width to 4 spaces

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
                boxShadow: "0px 0px 15px 0px rgb(0 0 0)"
            
            }}

          >
          </XMLViewer>
          </div>      
      </div>
    )
}
export default XMLFormatter