// components/PrivacyPolicy.js
import React from 'react';
import AddBanner from "@/adsense/AddBanner";

const PrivacyPolicy = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto leading-relaxed font-sans">
    <div className="max-w-4xl mx-auto leading-relaxed font-sans text-center">
      <h1 className="text-3xl font-bold mb-6" >Privacy Policy</h1>
    </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
      <p>
        Welcome to [Your Website Name]. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website [Your Website URL].
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

      <h3 className="text-xl font-semibold mt-4 mb-2">3. Cookies and Tracking Technologies</h3>
      <p>
        We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our site and improve your experience. You can manage or disable cookies through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
      <p>
        We use the information we collect to:
      </p>
      <ul className="list-disc pl-5 mt-4 mb-4">
        <li>Improve and personalize your experience on our website</li>
        <li>Provide you with relevant content and advertisements</li>
        <li>Analyze website usage and performance</li>
        <li>Communicate with you regarding updates, promotions, and other relevant information</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Google Ads</h2>
      <p>
        We use Google AdSense to serve ads on our website. Google AdSense uses cookies to display ads based on your prior visits to our website or other sites on the internet. You can opt-out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Google's Ads Settings</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
      <p>
        We may use third-party services for analytics and other purposes. These services may collect information about your visits to our site and other sites across the web. For example:
      </p>
      <ul className="list-disc pl-5 mt-4 mb-4">
        <li><strong>Google Analytics:</strong> We use Google Analytics to analyze how users interact with our site. You can learn more about Google Analytics by visiting <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Google Analytics Privacy Policy</a>.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. We strive to protect your information, but we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">User Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal information. To exercise your rights, please contact us at [Your Contact Email Address].
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Children’s Privacy</h2>
      <p>
        Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our practices, please contact us at:
      </p>
      <ul className="list-disc pl-5 mt-4">
        <li><strong>Email:</strong> [Your Contact Email Address]</li>
      </ul>

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
