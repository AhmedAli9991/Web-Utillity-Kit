"use client"; // Ensure this component is rendered only on the client side

import { useState,useEffect } from 'react';
import AddBanner from "@/adsense/AddBanner";
import { useDetectAdBlock } from "adblock-detect-react";
import AddBlock from "@/adsense/AddBlock";

const Base64 = () => {
  const [file, setFile] = useState(null);
  const [base64, setBase64] = useState('');
  const [error, setError] = useState(null);
  const adBlockDetected = useDetectAdBlock();
  useEffect(() => {
      console.log('adBlockDetected',adBlockDetected)

      if (adBlockDetected) {
          console.log(adBlockDetected)
        window.alert("ad block detected");
      }
    }, []);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
        setError("File size exceeds 10MB");
        setFile(null);
        setBase64('');
        return;
      }
      setFile(selectedFile);
      setError(null);
      convertToBase64(selectedFile);
    }
  };

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64(reader.result);
    };
    reader.onerror = () => {
      setError("Error converting file to base64");
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      
      <AddBlock/>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <div className="md:col-span-1">
          <label className="block text-gray-700 mb-2">Base64 Output</label>
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
            value={base64}
            className="w-full border rounded-md"
            placeholder="Base64 will appear here"
          />
        </div>
        <div className="bg-gray-800 max-w-7xl py-10 px-4 mt-4">
              <AddBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="4284247248"
              />
            </div>
      </div>
      <div className="bg-gray-800 max-w-7xl mx-auto py-10 px-4 mt-4">
              <AddBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="4284247248"
              />
            </div>
    </div>
  );
};

export default Base64;
