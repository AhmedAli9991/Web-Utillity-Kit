import { useEffect, useState } from 'react';
import AdblockModal from './AdblockModal';
const AddBlock = () => {
  const [isAdBlockActive, setIsAdBlockActive] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;

    script.onload = () => setIsAdBlockActive(false);
    script.onerror = () => setIsAdBlockActive(true);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
    <AdblockModal isOpen={isAdBlockActive} onClose={() => setIsAdBlockActive(false)} />
  </div>
  );
};

export default AddBlock;
