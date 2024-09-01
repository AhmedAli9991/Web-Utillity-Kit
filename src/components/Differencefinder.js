"use client"
import { useState, useMemo ,useEffect} from 'react'
import dynamic from 'next/dynamic'
import { getDiff } from 'json-difference'
import "../styles/Formatter.css"
import JsonView from "@uiw/react-json-view";
import AddBanner from "@/adsense/AddBanner";
import { useDetectAdBlock } from "adblock-detect-react";

const Differencefinder = () => {
  const Quote = JsonView.Quote;
  const adBlockDetected = useDetectAdBlock();
  useEffect(() => {
      console.log('adBlockDetected',adBlockDetected)

      if (adBlockDetected) {
          console.log(adBlockDetected)
        window.alert("ad block detected");
      }
    }, []);
  const [oldJson, setOldJson] = useState('{}')
  const [newJson, setNewJson] = useState('{}')
  const result = useMemo(() => {
    try {
      const oldJsonParsed = JSON.parse(oldJson)
      const newJsonParsed = JSON.parse(newJson)

      const delta = getDiff(oldJsonParsed, newJsonParsed)

      return {
        delta,
        added: Object.keys(delta.added).length,
        removed: Object.keys(delta.removed).length,
        edited: Object.keys(delta.edited).length
      }
    } catch (error) {
      return{delta:{message:"error"},
      added: 0,
      removed: 0,
      edited:0 }
    }
  }, [oldJson, newJson])    

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">

        <div className="md:col-span-1">
          <label className="block text-gray-700 mb-2">Original JSON</label>
          <textarea
            rows={12}
            style={{
              padding: "20px",
              boxSizing: "border-box",
              border: "1px solid #000",
              background: "#dce3e2",
              borderRadius: "10px",
              outline: "none",
              resize: "none",
              fontFamily: "monospace",
              transition: "background 0.25s, color 0.25s",
              boxShadow: "0px 0px 15px 0px rgb(0 0 0)"
            }}
            value={oldJson}
            onChange={(e) => setOldJson(e.target.value)}
            className="w-full border rounded-md"
            placeholder="Enter original JSON here..."
          />
        </div>

        <div className="md:col-span-1">
          <label className="block text-gray-700 mb-2">Modified JSON</label>
          <textarea
            rows={12}
            style={{
              padding: "20px",
              boxSizing: "border-box",
              border: "1px solid #000",
              background: "#dce3e2",
              borderRadius: "10px",
              outline: "none",
              resize: "none",
              fontFamily: "monospace",
              transition: "background 0.25s, color 0.25s",
              boxShadow: "0px 0px 15px 0px rgb(0 0 0)"
            }}
            value={newJson}
            onChange={(e) => setNewJson(e.target.value)}
            className="w-full border rounded-md"
            placeholder="Enter modified JSON here..."
          />
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row md:space-x-4 mt-6">
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700 mb-2">Difference</label>
            <JsonView
          className='textarea'
            value={result?.delta}
            displayDataTypes={false}
            enableClipboard={true}
            collapsed={false}  // Ensures all nodes are expanded; set to true if you want collapsing functionality
            displayObjectSize={false}
            shortenTextAfterLength={30000}
            style={{
              height: "400px",  // Fixed height in pixels
              padding: "20px",
              boxSizing: "border-box",
              border: "1px solid #000",
              background: "#dce3e2",
              borderRadius: "10px",
              outline: "none",
              resize: "none",
              fontFamily: "monospace",
              transition: "background 0.25s, color 0.25s",
              boxShadow: "0px 0px 15px 0px rgb(0 0 0)",
              overflow: "auto" 
            }}
          

          >
          
          </JsonView>
          </div>
          
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <label className="block text-gray-700 mb-2">Summary</label>
            <div className="p-4 border rounded-md bg-gray-100 ">
              {result
                ? `${result?.added} fields were added, ${result?.removed} removed, and ${result?.edited} edited!`
                : 'Add JSON data to see the difference.'}
            </div>
          <div className="bg-gray-800 max-w-7xl mx-auto py-10 px-4 mt-4">
              <AddBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="4284247248"
              />
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Differencefinder
