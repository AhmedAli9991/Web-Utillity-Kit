"use client";

import React, { useEffect } from "react";

const AddBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}) => {
  useEffect(() => {
    try {
        let adsbygoogle = (window).adsbygoogle 
        if (adsbygoogle && !adsbygoogle.loaded)
            (adsbygoogle = (window).adsbygoogle || []).push({});
      
    } catch (error) {
      console.log(error.message);

    }
  }, []);

  return (
    <ins
    //   className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-123456789"
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
    ></ins>
  );
};

export default AddBanner;