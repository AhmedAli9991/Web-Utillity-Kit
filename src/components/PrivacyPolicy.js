// components/PrivacyPolicy.js
import React from 'react';
import AddBanner from "@/adsense/AddBanner";
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto leading-relaxed font-sans">
    <div className="max-w-4xl mx-auto leading-relaxed font-sans text-center">
      <h1 className="text-3xl font-bold mb-6" >Privacy Policy</h1>
    </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
      <p>
        Welcome to https://jsonwebtools.com We provide a range of tools designed to make your daily development tasks easier, from formatting JSON with our JSON formatter tool, finding differences between two JSONs with our 
        JSON difference finder tool,we also provide tool for formatting XML with our XML formatter tool, finding differences between two XMLs with our XML difference finder tool, and converting images to base64 with our conversion tool. 
        We intend to provide a single place for all your daily utility needs as a developer. We value your privacy and are committed to protecting your personal information. 
        This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website https://jsonwebtools.com.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <h3 className="text-xl font-semibold mt-4 mb-2">1. Personal Information</h3>
      <p>
        When you visit our website, we may collect personal information that you voluntarily provide, such as your name, email address, and any other information you submit through contact forms or other interactive features.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">2. Usage Data</h3>
      <p>
        We automatically collect certain information about your visit to our website. This includes your IP address, browser type, operating system, referring URLs, and information about your interactions with our website.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
      <p>
        We use the information we collect to:
      </p>
      <ul className="list-disc pl-5 mt-4 mb-4">
        <li>Provide you with relevant content and advertisements</li>
        <li>Analyze website usage and performance</li>
        <li>Collecting feedback to improve our features</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Google Ads</h2>
      <p>
        We use Google AdSense to display ads on our website. Google AdSense uses cookies to display ads based on your prior visits to our website or other sites on the internet. You can check your settings for personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{"Google's Ads Settings"}</a>.

        For more information on Google AdSense poilicies please feel free to vist <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{"Google's Adsense policy "}</a>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
      <p>
        We may use third-party services for analytics and other purposes. These services may collect information about your visits to our site and other sites across the web. For example:
      </p>
      <ul className="list-disc pl-5 mt-4 mb-4">
        <li><strong>Google Analytics:</strong> We use Google Analytics to analyze how users interact with our site. You can learn more about Google Analytics by visiting <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Google Analytics Privacy Policy</a>.</li>
      </ul>



      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our practices, please contact us at: <Link href="/contact" className="text-blue-500 underline">Contact Us</Link>
      </p>

      <div className="my-8">
        <AddBanner
          dataAdFormat="auto"
          dataFullWidthResponsive={true}
          dataAdSlot="4284247248"
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
