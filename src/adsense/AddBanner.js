"use client";

import React, { useEffect } from "react";

const AddBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}) => {
    const [adblock,useAddblock] = React.useState(false)
  useEffect(() => {
    try {
        let adsbygoogle = (window).adsbygoogle 
        if (adsbygoogle && !adsbygoogle.loaded)
            (adsbygoogle = (window).adsbygoogle || []).push({});
      
    } catch (error) {
        useAddblock(true)
        console.log('adblock',adblock)
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