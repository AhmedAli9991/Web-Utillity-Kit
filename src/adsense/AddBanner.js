"use client";

import React, { useEffect } from "react";

const AddBanner = (props) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

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