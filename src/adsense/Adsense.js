import Script from 'next/script';
import React from 'react'
import AddBanner from "@/adsense/AddBanner";



const AdSense = ({ pId }) => {
  return (
    <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
        crossOrigin='anonymous'
        strategy="lazyOnload"
        />
  )
}

export default AdSense