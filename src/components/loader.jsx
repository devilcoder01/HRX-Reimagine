import React, { useEffect } from 'react';
import './loader.css';

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Animation duration in milliseconds

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <section className="loader-section">
      <div className="loader-content">
        <h2 className="loader-h2">HRX</h2>
        <h2 className="loader-h2 loader-animated">HRX</h2>
      </div>
    </section>
  );
};

export default Loader;
