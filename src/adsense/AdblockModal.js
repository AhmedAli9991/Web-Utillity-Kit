import React from 'react';
import '@/styles/adblock.css';

const AdblockModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="adblock-modal-overlay">
      <div className="adblock-modal-content">
        <h2>Ad Blocker Detected</h2>
        <p>
          We have detected that you are using an ad blocker. Please consider disabling it to support our site and access all features.
        </p>
      </div>
    </div>
  );
};

export default AdblockModal;
