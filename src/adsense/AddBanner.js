"use client";

import React, { useEffect,useState } from "react";

const AddBanner = (props) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      document.head.appendChild(script);
      setScriptLoaded(true);
    }
  }, [scriptLoaded]);


  return (
    <ins
    //   className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-2860851484242043"
      data-ad-slot="4360908337"
      //  data-ad-slot={dataAdSlot}
      data-ad-format="auto"

      // data-ad-format={dataAdFormat}
      data-full-width-responsive="true"
      ></ins>
  );
};

export default AddBanner;