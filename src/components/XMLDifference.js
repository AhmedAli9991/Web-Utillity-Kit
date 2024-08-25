"use client"
import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { getDiff } from 'json-difference'
import "../styles/Formatter.css"

const XMLDifference = () => {
  const [oldJson, setOldJson] = useState('{}')
  const [newJson, setNewJson] = useState('{}')
  const result = useMemo(() => {
    try {
      const oldJsonParsed = JSON.parse(oldJson)
      const newJsonParsed = JSON.parse(newJson)

      const delta = getDiff(oldJsonParsed, newJsonParsed)

      return {
        delta: JSON.stringify(delta, null, 2),
        added: Object.keys(delta.added).length,
        removed: Object.keys(delta.removed).length,
        edited: Object.keys(delta.edited).length
      }
    } catch (error) {
      return
    }
  }, [oldJson, newJson])    

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
          Find Difference Between XML with our  
          <br />
          <span className="text-green-500">XML Difference Finder</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">

        <div className="md:col-span-1">
          <label className="block text-gray-700 mb-2">Original XML</label>
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
          <label className="block text-gray-700 mb-2">Modified XML</label>
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
            <textarea
              rows={12}
              readOnly
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
              value={result?.delta ?? ''}
              className="w-full border rounded-md"
              placeholder="Difference will appear here..."
            />
          </div>
          
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <label className="block text-gray-700 mb-2">Summary</label>
            <div className="p-4 border rounded-md bg-gray-100 ">
              {result
                ? `${result?.added} fields were added, ${result?.removed} removed, and ${result?.edited} edited!`
                : 'Add JSON data to see the difference.'}
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default XMLDifference
